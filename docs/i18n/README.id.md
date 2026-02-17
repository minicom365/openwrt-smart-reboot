# OpenWrt Smart Reboot (dengan LuCI)

- Inggris: [README.en.md](../../README.en.md)
- Indeks multibahasa: [README.i18n.md](README.i18n.md)

Paket ini me-reboot router pada waktu dini hari yang dikonfigurasi hanya saat jaringan dalam kondisi idle.

## Komponen

- `smart-reboot`: layanan backend untuk cek idle dan eksekusi reboot
- `luci-app-smart-reboot`: halaman konfigurasi LuCI

## Cara kerja

1. Menjalankan `smart-reboot-check` pada waktu terkonfigurasi (default: `04:00`)
2. Mengukur `rx_bytes + tx_bytes` pada antarmuka terpilih selama `sample_seconds`
3. Jika kenaikan ≤ `byte_threshold`, dianggap idle lalu reboot dieksekusi

## Nilai default

- Aktif: `1`
- Waktu: `04:00`
- Pilih semua antarmuka: `0`
- Antarmuka: `wan`
- Durasi sampling: `120`
- Ambang idle: `262144` byte (256KB)

## Opsi LuCI

- Waktu reboot: `HH:MM`
- Pilih semua antarmuka
- Antarmuka dipantau (label logis + nama perangkat)
- Waktu reboot otomatis terakhir

## i18n

- Dukungan multibahasa LuCI disertakan
- Sumber terjemahan (`.lmo`) dibundel dalam paket aplikasi
- Bahasa didukung: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
