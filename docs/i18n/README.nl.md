# OpenWrt Smart Reboot (met LuCI)

- Engels: [README.en.md](../../README.en.md)
- Meertalige index: [README.i18n.md](README.i18n.md)

Dit pakket herstart de router op het ingestelde vroege tijdstip alleen wanneer het netwerk inactief is.

## Onderdelen

- `smart-reboot`: backendservice voor idle-controle en herstart
- `luci-app-smart-reboot`: LuCI-configuratiepagina

## Werking

1. Voert `smart-reboot-check` uit op de ingestelde tijd (standaard: `04:00`)
2. Meet `rx_bytes + tx_bytes` op geselecteerde interfaces gedurende `sample_seconds`
3. Als de toename ≤ `byte_threshold` is, wordt idle vastgesteld en herstart uitgevoerd

## Standaardwaarden

- Ingeschakeld: `1`
- Tijd: `04:00`
- Alle interfaces selecteren: `0`
- Interface: `wan`
- Sampleduur: `120`
- Idle-drempel: `262144` bytes (256KB)

## LuCI-opties

- Herstarttijd: `HH:MM`
- Alle interfaces selecteren
- Gemonitorde interfaces (logisch label + apparaatnaam)
- Tijdstip van laatste automatische herstart

## i18n

- Volledige LuCI-meertaligheid is inbegrepen
- Vertaalbronnen (`.lmo`) zijn opgenomen in het app-pakket
- Ondersteunde talen: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
