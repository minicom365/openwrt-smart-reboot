# OpenWrt Smart Reboot (con LuCI)

- Inglés: [README.en.md](../../README.en.md)
- Índice multilingüe: [README.i18n.md](README.i18n.md)

Este paquete reinicia el router a la hora de madrugada configurada solo cuando la red está inactiva.

## Componentes

- `smart-reboot`: servicio backend para comprobación de inactividad y reinicio
- `luci-app-smart-reboot`: página de configuración LuCI

## Cómo funciona

1. Ejecuta `smart-reboot-check` a la hora configurada (por defecto: `04:00`)
2. Mide `rx_bytes + tx_bytes` en interfaces seleccionadas durante `sample_seconds`
3. Si el aumento es ≤ `byte_threshold`, se considera inactivo y se reinicia

## Valores por defecto

- Habilitado: `1`
- Hora: `04:00`
- Seleccionar todas las interfaces: `0`
- Interfaz: `wan`
- Segundos de muestreo: `120`
- Umbral de inactividad: `262144` bytes (256KB)

## Opciones LuCI

- Hora de reinicio: `HH:MM`
- Seleccionar todas las interfaces
- Interfaces monitorizadas (etiqueta lógica + nombre de dispositivo)
- Último reinicio automático

## i18n

- Soporte i18n real de LuCI incluido
- Recursos de traducción (`.lmo`) incluidos en el paquete
- Idiomas soportados: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
