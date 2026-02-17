# OpenWrt Smart Reboot (với LuCI)

- Tiếng Anh: [README.en.md](../../README.en.md)
- Chỉ mục đa ngôn ngữ: [README.i18n.md](README.i18n.md)
- Hướng dẫn upstream OpenWrt: [OPENWRT_UPSTREAM_SUBMISSION.md](../../OPENWRT_UPSTREAM_SUBMISSION.md)

Gói này chỉ khởi động lại router vào thời điểm rạng sáng đã cấu hình khi mạng ở trạng thái nhàn rỗi.

## Thành phần

- `smart-reboot`: dịch vụ backend kiểm tra nhàn rỗi và thực thi khởi động lại
- `luci-app-smart-reboot`: trang cấu hình LuCI

## Cách hoạt động

1. Chạy `smart-reboot-check` vào thời gian đã đặt (mặc định: `04:00`)
2. Đo `rx_bytes + tx_bytes` trên các giao diện đã chọn trong `sample_seconds`
3. Nếu mức tăng ≤ `byte_threshold`, hệ thống coi là nhàn rỗi và khởi động lại

## Mặc định

- Bật: `1`
- Thời gian: `04:00`
- Chọn tất cả giao diện: `0`
- Giao diện: `wan`
- Giây lấy mẫu: `120`
- Ngưỡng nhàn rỗi: `262144` byte (256KB)

## Tùy chọn LuCI

- Thời gian khởi động lại: `HH:MM`
- Chọn tất cả giao diện
- Giao diện giám sát (nhãn logic + tên thiết bị)
- Thời gian khởi động lại tự động gần nhất

## i18n

- Đã tích hợp hỗ trợ đa ngôn ngữ LuCI thực tế
- Tài nguyên dịch (`.lmo`) được đóng gói cùng ứng dụng
- Ngôn ngữ hỗ trợ: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
