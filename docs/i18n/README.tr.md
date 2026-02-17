# OpenWrt Smart Reboot (LuCI ile)

- İngilizce: [README.en.md](../../README.en.md)
- Çok dilli dizin: [README.i18n.md](README.i18n.md)
- OpenWrt upstream gönderim rehberi: [OPENWRT_UPSTREAM_SUBMISSION.md](../../OPENWRT_UPSTREAM_SUBMISSION.md)

Bu paket, yönlendiriciyi yapılandırılmış şafak saatinde yalnızca ağ boşta olduğunda yeniden başlatır.

## Bileşenler

- `smart-reboot`: boşta kontrolü ve yeniden başlatma için backend servis
- `luci-app-smart-reboot`: LuCI yapılandırma sayfası

## Nasıl çalışır

1. `smart-reboot-check`, ayarlanan saatte çalışır (varsayılan: `04:00`)
2. Seçilen arayüzlerde `rx_bytes + tx_bytes` değeri `sample_seconds` boyunca ölçülür
3. Artış ≤ `byte_threshold` ise boşta kabul edilir ve yeniden başlatılır

## Varsayılanlar

- Etkin: `1`
- Saat: `04:00`
- Tüm arayüzleri seç: `0`
- Arayüz: `wan`
- Örnekleme süresi: `120`
- Boşta eşiği: `262144` bayt (256KB)

## LuCI Seçenekleri

- Yeniden başlatma saati: `HH:MM`
- Tüm arayüzleri seç
- İzlenen arayüzler (mantıksal etiket + cihaz adı)
- Son otomatik yeniden başlatma zamanı

## i18n

- Gerçek LuCI çoklu dil desteği dahildir
- Çeviri kaynakları (`.lmo`) uygulama paketine dahildir
- Desteklenen diller: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
