# OpenWrt Smart Reboot (z LuCI)

- Angielski: [README.en.md](../../README.en.md)
- Indeks wielojęzyczny: [README.i18n.md](README.i18n.md)
- Przewodnik upstream OpenWrt: [OPENWRT_UPSTREAM_SUBMISSION.md](../../OPENWRT_UPSTREAM_SUBMISSION.md)

Ten pakiet restartuje router o skonfigurowanej porze nad ranem tylko wtedy, gdy sieć jest bezczynna.

## Składniki

- `smart-reboot`: usługa backend do sprawdzania bezczynności i restartu
- `luci-app-smart-reboot`: strona konfiguracji LuCI

## Jak to działa

1. Uruchamia `smart-reboot-check` o ustawionej godzinie (domyślnie: `04:00`)
2. Mierzy `rx_bytes + tx_bytes` na wybranych interfejsach przez `sample_seconds`
3. Jeśli przyrost ≤ `byte_threshold`, uznaje stan bezczynny i wykonuje restart

## Domyślne wartości

- Włączone: `1`
- Czas: `04:00`
- Wybierz wszystkie interfejsy: `0`
- Interfejs: `wan`
- Czas próbkowania: `120`
- Próg bezczynności: `262144` bajtów (256KB)

## Opcje LuCI

- Czas restartu: `HH:MM`
- Wybór wszystkich interfejsów
- Monitorowane interfejsy (etykieta logiczna + nazwa urządzenia)
- Czas ostatniego automatycznego restartu

## i18n

- Zawiera pełne wsparcie wielojęzyczne LuCI
- Zasoby tłumaczeń (`.lmo`) są dołączone do pakietu
- Obsługiwane języki: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
