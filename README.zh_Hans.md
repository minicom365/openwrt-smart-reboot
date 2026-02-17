# OpenWrt Smart Reboot（LuCI 支持）

- 英文版: [README.en.md](README.en.md)
- 多语言索引: [README.i18n.md](README.i18n.md)
- OpenWrt 上游提交指南: [OPENWRT_UPSTREAM_SUBMISSION.md](OPENWRT_UPSTREAM_SUBMISSION.md)

该软件包仅在网络空闲时，于设定的凌晨时间自动重启路由器。

## 组成

- `smart-reboot`: 后端服务（空闲检测与重启执行）
- `luci-app-smart-reboot`: LuCI 配置页面

## 工作方式

1. 在设定时间（默认 `04:00`）运行 `smart-reboot-check`
2. 对选定接口（或全部接口）的 `rx_bytes + tx_bytes` 进行 `sample_seconds` 采样
3. 若增量小于等于 `byte_threshold`，判定为空闲并执行重启

## 默认值

- 启用: `1`
- 时间: `04:00`
- 选择全部接口: `0`
- 接口: `wan`
- 采样时长: `120`
- 空闲阈值: `262144` 字节 (256KB)

## LuCI 选项

- 重启时间: `HH:MM`
- 全接口选择
- 监控接口（逻辑接口标签 + 设备名）
- 最近自动重启时间显示

## i18n

- 已内置 LuCI 多语言支持
- 翻译资源（`.lmo`）随应用一起打包
- 支持语言: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
