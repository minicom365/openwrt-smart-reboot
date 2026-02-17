# OpenWrt Smart Reboot (com LuCI)

- Inglês: [README.en.md](../../README.en.md)
- Índice multilíngue: [README.i18n.md](README.i18n.md)

Este pacote reinicia o roteador no horário de madrugada configurado somente quando a rede está ociosa.

## Componentes

- `smart-reboot`: serviço backend para verificação de ociosidade e reinício
- `luci-app-smart-reboot`: página de configuração LuCI

## Como funciona

1. Executa `smart-reboot-check` no horário configurado (padrão: `04:00`)
2. Mede `rx_bytes + tx_bytes` nas interfaces selecionadas por `sample_seconds`
3. Se o aumento for ≤ `byte_threshold`, considera ocioso e reinicia

## Padrões

- Habilitado: `1`
- Horário: `04:00`
- Selecionar todas as interfaces: `0`
- Interface: `wan`
- Segundos de amostragem: `120`
- Limite de ociosidade: `262144` bytes (256KB)

## Opções LuCI

- Horário de reinício: `HH:MM`
- Selecionar todas as interfaces
- Interfaces monitoradas (rótulo lógico + nome do dispositivo)
- Último reinício automático

## i18n

- Suporte real de i18n LuCI incluído
- Recursos de tradução (`.lmo`) incluídos no pacote
- Idiomas suportados: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
