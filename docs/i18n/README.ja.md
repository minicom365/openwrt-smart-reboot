# OpenWrt Smart Reboot（LuCI対応）

- 英語版: [README.en.md](../../README.en.md)
- 多言語インデックス: [README.i18n.md](README.i18n.md)

ネットワークトラフィックが低い場合のみ、設定した早朝時刻に再起動するパッケージです。

## 構成

- `smart-reboot`: アイドル判定と再起動実行を行うバックエンド
- `luci-app-smart-reboot`: LuCI 設定画面

## 動作

1. 設定時刻（デフォルト: `04:00`）に `smart-reboot-check` を実行
2. 指定インターフェース（または全インターフェース）の `rx_bytes + tx_bytes` を `sample_seconds` だけ測定
3. 増加量が `byte_threshold` 以下ならアイドルと判定し再起動

## デフォルト値

- 有効: `1`
- 時刻: `04:00`
- 全インターフェース選択: `0`
- インターフェース: `wan`
- サンプリング秒数: `120`
- アイドル閾値: `262144` bytes (256KB)

## LuCI 設定項目

- 再起動時刻: `HH:MM`
- 全インターフェース選択
- 監視インターフェース選択（論理IFラベル + デバイス名）
- 最後の自動再起動時刻表示

## i18n

- LuCI 多言語対応を同梱
- 翻訳リソース（`.lmo`）をアプリに含有
- 対応言語: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
