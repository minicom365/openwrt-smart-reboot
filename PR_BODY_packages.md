# PR Title

smart-reboot: add network-idle aware scheduled reboot utility

# PR Body

This adds `smart-reboot`, a lightweight OpenWrt utility that performs scheduled reboot only when monitored interfaces are considered idle.

## Features

- UCI-based configuration (`/etc/config/smart-reboot`)
- Cron-triggered check at configured `HH:MM`
- Idle decision based on RX/TX byte delta over a sampling window
- Configurable threshold and monitored interfaces
- Init script integration with automatic enable/restart on install

## Testing

- Build target: `ipq806x/generic`
- Architecture: `arm_cortex-a15_neon-vfpv4`
- Verified package install and service startup

## Notes

- This PR contains backend package only.
- LuCI frontend is submitted separately in OpenWrt LuCI repository.

Signed-off-by: <YOUR_NAME> <YOUR_EMAIL>
