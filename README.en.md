# OpenWrt Smart Reboot (with LuCI)

This package reboots the router at a configured dawn time only when network traffic is idle.

## Components

- `smart-reboot`: backend service for idle-check and reboot execution
- `luci-app-smart-reboot`: LuCI configuration page

## How It Works

1. Runs `smart-reboot-check` at the configured time (default: `04:00`)
2. Measures `rx_bytes + tx_bytes` on selected interfaces (or all interfaces) for `sample_seconds`
3. If traffic increase is less than or equal to `byte_threshold`, it is considered idle and reboot is executed

## Defaults

- Enabled: `1`
- Time: `04:00`
- Select all interfaces: `0`
- Interfaces: `wan`
- Sampling seconds: `120`
- Idle threshold: `262144` bytes (256KB)

## LuCI Options

- Reboot time: single `HH:MM` input
- Select all interfaces: monitor all network interfaces
- Monitored interfaces: logical interface labels (`WAN/LAN`) + device name
- Last automatic reboot: shows the latest automatic reboot timestamp

## i18n

- Real LuCI i18n support is included.
- Translation resources (`.lmo`) are bundled in the app package.
- Supported languages (18): `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
- Change LuCI system language to apply UI translations.

## Buildroot Placement Example

In an OpenWrt source tree:

- place `smart-reboot` under `package/utils/smart-reboot`
- place `luci-app-smart-reboot` under `package/luci-app-smart-reboot`

Then select and build packages via `make menuconfig`.
