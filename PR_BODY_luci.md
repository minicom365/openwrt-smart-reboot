# PR Title

luci-app-smart-reboot: add LuCI frontend for smart-reboot

# PR Body

This adds LuCI support for `smart-reboot`.

## Features

- Enable/disable toggle
- Reboot time input (`HH:MM`)
- Interface selection (including select-all mode)
- Last automatic reboot status display
- Idle sampling / threshold settings
- Built-in i18n catalogs for 18 languages

## i18n Languages

`ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`

## Testing

- OpenWrt 23.05-based buildroot
- Target: `ipq806x/generic`
- LuCI page render / save / service interaction verified

## Dependency

- openwrt/packages PR: <LINK_TO_PACKAGES_PR>

Signed-off-by: minicom365 <3387910@naver.com>
