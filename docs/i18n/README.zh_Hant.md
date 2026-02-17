# OpenWrt Smart Reboot（LuCI 支援）

- 英文版: [README.en.md](../../README.en.md)
- 多語言索引: [README.i18n.md](README.i18n.md)
- OpenWrt 上游提交指南: [OPENWRT_UPSTREAM_SUBMISSION.md](../../OPENWRT_UPSTREAM_SUBMISSION.md)

此套件僅在網路閒置時，於設定的清晨時間自動重新啟動路由器。

## 組成

- `smart-reboot`: 後端服務（閒置檢測與重啟執行）
- `luci-app-smart-reboot`: LuCI 設定頁面

## 運作方式

1. 在設定時間（預設 `04:00`）執行 `smart-reboot-check`
2. 對指定介面（或全部介面）的 `rx_bytes + tx_bytes` 進行 `sample_seconds` 取樣
3. 若增量小於等於 `byte_threshold`，判定為閒置並執行重啟

## 預設值

- 啟用: `1`
- 時間: `04:00`
- 全介面選擇: `0`
- 介面: `wan`
- 取樣秒數: `120`
- 閒置閾值: `262144` 位元組 (256KB)

## LuCI 設定項目

- 重啟時間: `HH:MM`
- 全介面選擇
- 監控介面（邏輯介面標籤 + 裝置名稱）
- 最近自動重啟時間顯示

## i18n

- 已內建 LuCI 多語系支援
- 翻譯資源（`.lmo`）隨應用一同打包
- 支援語言: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
