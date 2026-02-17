# OpenWrt Smart Reboot (con LuCI)

- Inglese: [README.en.md](../../README.en.md)
- Indice multilingue: [README.i18n.md](README.i18n.md)

Questo pacchetto riavvia il router all'orario di alba configurato solo quando la rete è inattiva.

## Componenti

- `smart-reboot`: servizio backend per controllo inattività e riavvio
- `luci-app-smart-reboot`: pagina di configurazione LuCI

## Come funziona

1. Esegue `smart-reboot-check` all'ora configurata (predefinita: `04:00`)
2. Misura `rx_bytes + tx_bytes` sulle interfacce selezionate per `sample_seconds`
3. Se l'aumento è ≤ `byte_threshold`, viene considerata inattività e avvia il riavvio

## Valori predefiniti

- Abilitato: `1`
- Ora: `04:00`
- Seleziona tutte le interfacce: `0`
- Interfaccia: `wan`
- Secondi di campionamento: `120`
- Soglia inattività: `262144` byte (256KB)

## Opzioni LuCI

- Ora riavvio: `HH:MM`
- Seleziona tutte le interfacce
- Interfacce monitorate (etichetta logica + nome dispositivo)
- Ultimo riavvio automatico

## i18n

- Supporto multilingua LuCI reale incluso
- Risorse di traduzione (`.lmo`) incluse nel pacchetto
- Lingue supportate: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
