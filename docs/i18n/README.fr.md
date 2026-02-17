# OpenWrt Smart Reboot (avec LuCI)

- Anglais: [README.en.md](../../README.en.md)
- Index multilingue: [README.i18n.md](README.i18n.md)
- Guide upstream OpenWrt: [OPENWRT_UPSTREAM_SUBMISSION.md](../../OPENWRT_UPSTREAM_SUBMISSION.md)

Ce paquet redémarre le routeur à l'heure d'aube configurée uniquement lorsque le réseau est inactif.

## Composants

- `smart-reboot`: service backend pour la détection d'inactivité et le redémarrage
- `luci-app-smart-reboot`: page de configuration LuCI

## Fonctionnement

1. Exécute `smart-reboot-check` à l'heure configurée (par défaut : `04:00`)
2. Mesure `rx_bytes + tx_bytes` sur les interfaces choisies pendant `sample_seconds`
3. Si l'augmentation est ≤ `byte_threshold`, l'état inactif est confirmé puis redémarrage

## Valeurs par défaut

- Activé : `1`
- Heure : `04:00`
- Sélection de toutes les interfaces : `0`
- Interface : `wan`
- Durée d'échantillonnage : `120`
- Seuil d'inactivité : `262144` octets (256KB)

## Options LuCI

- Heure de redémarrage : `HH:MM`
- Sélection de toutes les interfaces
- Interfaces surveillées (label logique + nom de périphérique)
- Dernier redémarrage automatique

## i18n

- Support multilingue LuCI réel inclus
- Ressources de traduction (`.lmo`) incluses dans le paquet
- Langues prises en charge : `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
