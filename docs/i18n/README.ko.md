# OpenWrt Smart Reboot (LuCI 지원)

- English: [README.en.md](../../README.en.md)
- 다국어 인덱스: [README.i18n.md](README.i18n.md)
- OpenWrt 정규 등록 가이드: [OPENWRT_UPSTREAM_SUBMISSION.md](../../OPENWRT_UPSTREAM_SUBMISSION.md)

네트워크 사용량이 낮을 때만 지정한 새벽 시간에 재부팅하는 패키지입니다.

## 구성

- `smart-reboot`: 실제 재부팅 판별/실행 서비스
- `luci-app-smart-reboot`: LuCI 설정 화면

## 동작 방식

1. 설정된 시각(기본: `04:00`)에 `smart-reboot-check` 실행
2. 지정 인터페이스(또는 전체 인터페이스)의 `rx_bytes + tx_bytes`를 `sample_seconds` 동안 측정
3. 증가량이 `byte_threshold` 이하이면 유휴 상태로 판단 후 재부팅

## 기본값

- 활성화: `1`
- 시간: `04:00`
- 전체 인터페이스 선택: `0`
- 인터페이스: `wan`
- 샘플 시간: `120`
- 유휴 임계값: `262144` 바이트(256KB)

## LuCI 설정 항목

- 재부팅 시각: `HH:MM` 형식 단일 입력
- 전체 선택: 모든 네트워크 인터페이스 모니터링
- 모니터링 인터페이스: 논리 인터페이스 라벨 + 디바이스명
- 마지막 자동 재부팅: 최근 자동 재부팅 시각 표시

## i18n

- LuCI 다국어 지원이 실제로 포함되어 있습니다.
- 번역 리소스(`.lmo`)는 앱 패키지에 함께 포함됩니다.
- 지원 언어: `ko`, `ja`, `zh_Hans`, `zh_Hant`, `de`, `fr`, `es`, `it`, `pt_BR`, `ru`, `uk`, `vi`, `th`, `id`, `tr`, `pl`, `nl`, `ar`
