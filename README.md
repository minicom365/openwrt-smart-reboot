# OpenWrt Smart Reboot (LuCI 지원)

네트워크 사용량이 낮을 때만 지정한 새벽 시간에 재부팅하는 패키지입니다.

## 구성

- `smart-reboot`: 실제 재부팅 판별/실행 서비스
- `luci-app-smart-reboot`: LuCI 설정 화면

## 동작 방식

1. 설정된 시각(기본: 04:00)에 `smart-reboot-check` 실행
2. 지정 인터페이스(또는 전체 인터페이스)의 `rx_bytes + tx_bytes`를 `sample_seconds` 동안 측정
3. 증가량이 `byte_threshold` 이하이면 유휴 상태로 판단 후 재부팅

## 기본값

- 활성화: 활성(`1`)
- 시간: `04:00`
- 전체 인터페이스 선택: 비활성(`0`)
- 인터페이스: `wan`
- 샘플 시간: `120`초
- 유휴 임계값: `262144` 바이트(256KB)

## LuCI 설정 항목

- 재부팅 시각: `HH:MM` 형식 단일 입력
- 전체 선택: 모든 네트워크 인터페이스를 모니터링
- 모니터링 인터페이스: 논리 인터페이스(`WAN/LAN`) 기반 라벨로 선택

## 빌드루트 배치 예시

OpenWrt 소스 트리 기준:

- `package/utils/smart-reboot` 에 `smart-reboot` 폴더 배치
- `package/luci-app-smart-reboot` 에 `luci-app-smart-reboot` 폴더 배치

그 후 `make menuconfig`에서 패키지를 선택해 빌드합니다.
