# JS 퀴즈앱 기능 요구사항

---

## 1. 문제 데이터 로딩

- `/data/questions.json` 파일에서 문제 데이터를 **비동기로 불러온다**.  
  (예: `fetch`, `axios` 사용)
- 문제 데이터는 **최대 10문제**까지 있다.

---

## 2. 시작 화면

- 앱을 켜면 **시작 화면**이 보인다.
- **문제 수(3~10개)**를 선택할 수 있다.
- **“시작” 버튼**을 누르면 퀴즈가 시작된다.

---

## 3. 문제 출제 및 풀이

- 퀴즈가 시작되면 **한 번에 한 문제씩**만 보여준다.
- **객관식 4지선다** 문제를 **라디오 버튼**으로 선택할 수 있다.
- **제출** 버튼을 눌러야만 답안이 제출되고, 다음 문제로 넘어간다.
- 각 문제마다 **제한시간(초)**이 있으며, 시간이 다 되면
  - **마지막에 선택한 답안**이 있으면 그 답으로 자동 제출된다.
  - 아무것도 선택하지 않았다면 “미선택” 처리된다.

---

## 4. 진행/점수 표시

- 화면 상단에 **진행 상황(현재 문제 번호/총 문제 수)** 와 **남은 시간**이 표시된다.

---

## 5. 퀴즈 도중 새로고침/이탈

- 퀴즈를 풀다가 **새로고침**하거나 **브라우저를 닫으면**  
  → 처음 시작 화면으로 돌아간다(진행 중 기록은 모두 초기화됨).

---

## 6. 결과 화면

- **모든 문제를 다 풀었을 때만** 결과가 나온다.
- 결과 화면에서는 아래 항목을 **문제별로 모두 보여준다**:
  - 문제 번호(Q1 등), 질문
  - **내가 선택한 답안**(몇 번/내용, 미선택이면 “미선택” 표시)
  - **정답**(몇 번/내용)
  - 문제 번호 옆에 **빨간색 O(정답)/X(오답)** 아이콘이 표시된다.
- 화면 상단에는 **맞힌 개수/총 문제 수**가 표시된다.
- “다시하기” 버튼을 누르면 처음 화면으로 돌아간다.

---

## 7. 기타

- **문제 순서는 매번 랜덤**으로 섞여 출제된다.
- 디자인/레이아웃은 HTML, CSS에 맞춰주고, JS 기능 구현에 집중할 것.

---

## 실전 구현 안내

- JS로 “문제 데이터 불러오기, DOM에 동적으로 문제/선택지/진행 상황/결과를 그리기, 타이머, 상태관리, 제출 등”을 **모두 직접 구현**해야 합니다.
- 기능별 함수 구조, 변수 설계, 이벤트 처리 등은 스스로 고민해서 작성할 것.

---

### 필수 구현 체크리스트

- [ ] 문제 데이터를 비동기로 불러온다.
- [ ] 시작 화면에서 문제 수 선택 → 시작 버튼
- [ ] 한 번에 한 문제씩, 라디오 버튼으로 선택, 제출
- [ ] 제한시간(초) 내 미제출/미선택 처리(자동 제출)
- [ ] 전체 진행 상황 및 타이머 표시
- [ ] 퀴즈 중 새로고침 시 초기화
- [ ] 결과 화면에서 맞힌 개수, 각 문제별 내 답/정답, O/X 표시
- [ ] 다시하기 버튼으로 재시작

---
