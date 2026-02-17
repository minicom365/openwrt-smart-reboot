# OpenWrt Smart Reboot (mit LuCI)

- Englisch: [README.en.md](../../README.en.md)
- Mehrsprachen-Index: [README.i18n.md](README.i18n.md)
- OpenWrt-Upstream-Leitfaden: [OPENWRT_UPSTREAM_SUBMISSION.md](../../OPENWRT_UPSTREAM_SUBMISSION.md)

Dieses Paket startet den Router nur dann zur konfigurierten Frühzeit neu, wenn das Netzwerk im Leerlauf ist.

## Komponenten

- `smart-reboot`: Backend-Dienst für Idle-Prüfung und Neustart
- `luci-app-smart-reboot`: LuCI-Konfigurationsseite

## Funktionsweise

1. Führt `smart-reboot-check` zur eingestellten Zeit aus (Standard: `04:00`)
2. Misst `rx_bytes + tx_bytes` der gewählten Schnittstellen für `sample_seconds`
3. Wenn die Zunahme ≤ `byte_threshold` ist, wird Leerlauf erkannt und neu gestartet

## Standardwerte

- Aktiviert: `1`
- Zeit: `04:00`
- Alle Schnittstellen auswählen: `0`
- Schnittstelle: `wan`
- Abtastdauer: `120`
- Leerlauf-Schwelle: `262144` Bytes (256KB)

## LuCI-Optionen

- Neustartzeit: `HH:MM`
- Alle Schnittstellen auswählen
- Überwachte Schnittstellen (logisches Label + Gerätename)
- Letzter automatischer Neustart

## i18n

- Echte LuCI-Mehrsprachigkeit ist enthalten
- Übersetzungsressourcen (`.lmo`) sind im App-Paket gebündelt
- Unterstützte Sprachen: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
