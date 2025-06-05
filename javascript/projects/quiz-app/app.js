// ✅ DOM 요소 선택
const startBtn = document.getElementById("start-btn"); // 시작 버튼
const selectCount = document.getElementById("select-count"); // 문제 수 선택 드롭다운
const quizBox = document.getElementById("quiz-box"); // 문제 영역
const viewQuiz = document.getElementById("view-quiz"); // 퀴즈 전체 박스
const submitBtn = document.getElementById("submit-btn"); // 제출 버튼
const progress = document.getElementById("progress"); // 문제 진행 표시 (ex: 문제 1/3)

// ✅ 상태 변수들
let quizData = []; // 전체 퀴즈 데이터
let currentIndex = 0; // 현재 문제 번호
let selectedAnswers = []; // 사용자가 선택한 답 저장
let timerId = null; // setInterval ID
let countdown = 0; // 남은 시간 (초)
let hasSubmitted = false; // 중복 제출 방지용 플래그
selectCount.value = "3";
// ✅ 시작 버튼 클릭 시 실행
startBtn.addEventListener("click", async () => {
  const count = parseInt(selectCount.value); // 선택된 문제 수를 정수로 파싱
  const response = await fetch("data/questions.json"); // 문제 JSON 파일 불러오기
  const allDatasArray = await response.json(); // 파싱

  quizData = getRandomQuestions(allDatasArray, count); // 랜덤으로 문제 추출
  currentIndex = 0;
  selectedAnswers = []; // 기존 선택 답 초기화
  document.getElementById("view-start").style.display = "none"; // 시작 화면 숨기기

  viewQuiz.style.display = "block"; // 퀴즈 화면 보이기
  showQuestion(currentIndex); // 첫 번째 문제 보여주기
});

// ✅ 제출 버튼 클릭 시 실행
submitBtn.addEventListener("click", () => {
  submitAnswer("manual"); // 수동 제출
});

// ✅ 현재 문제 화면 구성
function showQuestion(index) {
  const q = quizData[index]; // 현재 문제 데이터

  // 문제 + 보기 출력
  quizBox.innerHTML = `
    <p><strong>문제 ${index + 1}:</strong> ${q.question}</p>
    <ul>
      ${q.choices
        .map(
          (choice, i) =>
            `<li>
              <label>
                <input type="radio" name="answer" value="${i}"> ${choice}
              </label>
            </li>`
        )
        .join("")}
    </ul>
  `;

  // 문제 진행 표시 (ex: 문제 2/5)
  progress.textContent = `문제 ${index + 1} / ${quizData.length}`;
  submitBtn.disabled = true; // 처음엔 비활성화

  // 라디오 선택 시 제출 버튼 활성화
  const radios = document.querySelectorAll('input[name="answer"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      submitBtn.disabled = false;
    });
  });

  // ⏱️ 타이머 설정
  clearInterval(timerId); // 이전 타이머 제거
  countdown = q.timeLimit; // 제한 시간 설정
  updateTimerUI(); // 타이머 표시
  timerId = setInterval(() => {
    //setInterval(콜백함수, 시간(ms))
    // 일정한 간격마다 콜백 함수를 반복해서 실행해주는 함수야.
    // 시간(ms)는 밀리초 단위 (1000ms = 1초)
    // 동시에 그 **반복 작업을 구분할 수 있는 고유 ID(숫자)**를 반환합니다.
    // 이 숫자 ID가 timerId에 저장됩니다.
    //     setInterval을 호출할 때마다 고유한 timerId가 하나씩 생성됩니다.
    // 즉, setInterval 1개 = timerId 1개예요
    // clearInterval로 반복 작업을 중단시키기 위해 존재.
    countdown--;
    updateTimerUI();

    if (countdown <= 0) {
      clearInterval(timerId);
      submitAnswer("timeout"); // 시간 초과 자동 제출
    }
  }, 1000);
}

// ✅ 문제 중 랜덤으로 추출
function getRandomQuestions(array, count) {
  const shuffled = [...array].sort(() => Math.random() - 0.5); // 배열 섞기
  return shuffled.slice(0, count); // 원하는 개수만큼 반환
}

// ✅ 타이머 표시 업데이트
function updateTimerUI() {
  const timerEl = document.getElementById("timer");
  if (timerEl) {
    timerEl.textContent = `남은시간: ${countdown}초`;
  }
}

// ✅ 제출 처리 (버튼 or 시간 초과 모두 호출)
function submitAnswer(source = "manual") {
  // 이건 함수 submitAnswer()가 호출될 때
  //  인자가 없으면 자동으로 "manual"을 source 값으로 사용하겠다는 뜻이야.
  if (hasSubmitted) return; // 중복 방지
  hasSubmitted = true;

  clearInterval(timerId); // 타이머 중지
  submitBtn.disabled = true; // 버튼 잠금

  // 선택한 라디오의 value를 숫자로 저장, 없으면 "미선택"
  const selected = document.querySelector('input[name="answer"]:checked');
  selectedAnswers.push(selected ? parseInt(selected.value) : "미선택");

  currentIndex++; // 다음 문제로 이동

  setTimeout(() => {
    hasSubmitted = false; // 다음 문제용 플래그 초기화
    if (currentIndex < quizData.length) {
      showQuestion(currentIndex); // 다음 문제 보여주기
    } else {
      showResult(); // 마지막 문제였다면 결과 출력
    }
  }, 100); // 약간의 지연 (UI 깜빡임 방지)
  //바로 다음 문제를 출력하면, 브라우저는:
  // 사용자의 마지막 선택(라디오 버튼 체크 상태 등)과
  // 화면 업데이트(버튼 비활성화, 타이머 중지 등) 내용을
  // 즉시 반영하지 못하고 그냥 다음 문제 화면으로 넘어가버릴 수 있어.
}

// ✅ 결과 화면 구성
function showResult() {
  let correctCount = 0;

  // 각 문제 정오답 비교 및 HTML 구성
  const resultHTML = quizData
    .map((q, i) => {
      //q: 현재 문제 객체 (question, choices, answer, timeLimit 등이 담김)
      // i: 현재 인덱스 (0부터 시작
      const userAnswer = selectedAnswers[i];
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) correctCount++;

      return `
      <div style="border:1px solid #ccc; padding:1em; margin-bottom:1em;">
        <h3>Q${i + 1}. ${isCorrect ? "✅" : "❌"}</h3>
        <p>${q.question}</p>
        <div><strong>내 선택:</strong> ${
          userAnswer === "미선택"
            ? "미선택"
            : `${userAnswer + 1}번: ${q.choices[userAnswer]}`
          //보기 번호는 0부터 시작하기 때문에 +1 해줌
          // 예:
          // userAnswer = 0 → 1번
          // userAnswer = 1 → 2번
        }</div>
        <div><strong>정답:</strong> ${q.answer + 1}번: ${
        q.choices[q.answer]
      }</div>
      </div>
    `;
    })
    .join("");

  // 전체 결과 출력
  quizBox.innerHTML = `
    <h2>퀴즈 결과</h2>
    <p>총 ${quizData.length}문제 중 ${correctCount}개 정답!</p>
    ${resultHTML}
    <button id="restart-btn" style="margin-top: 1em;">다시하기</button>
  `;

  submitBtn.style.display = "none"; // 제출 버튼 숨기기
  document.getElementById("timer").textContent = ""; // 타이머 제거
  progress.style.display = "none"; // 문제 번호 숨기기
  document.getElementById("restart-btn").addEventListener("click", () => {
    // 퀴즈 상태 초기화
    quizData = [];
    currentIndex = 0;
    selectedAnswers = [];
    hasSubmitted = false;

    // 화면 전환
    viewQuiz.style.display = "none"; // 퀴즈 박스 숨기기
    document.getElementById("view-start").style.display = "block"; // 시작 박스 다시 보이기
    submitBtn.style.display = "inline-block"; // 제출 버튼 다시 보이게
    progress.style.display = "inline"; // 진행 표시 복구
    // ✅ 문제 수 기본값 3으로 초기화
    selectCount.value = "3";
  });
}

// 전체 흐름름 트라이 1.

// "시작" 버튼이 클릭되면 지금 보이는 요소들 숨김,
// { 총 문제는 data/question.json 에서 가져오되 가져오기 전에 무작위로 섞기, 고른 문제수만큼 가져오기.
// 고른 문제수 값만큼 문제 1개씩 보이게,
// "현재문제 번째/전체문제수" 위쪽에 출력,
// 문제 및 4개의 보기 data/question.json 에서 가져오기. 보기 4개는 그 중 한개만 선택가능.,
// 타이머 존재. 타이머가 다 되거나 "제출"누르면 체크한 값이 있으면 그걸로 사용자 답을 저장. 없으면 "미선택"으로 사용자 답 배열에 저장.
// }
// 맨 마지막결과에 추가로 "다시하기" 누르면 모든 값이 초기화되고 다시 "시작"페이지만 보이도록.

// GPT "의도 → 동작 → 흐름" 중심의 계층적 주석 구조

// └── "시작" 버튼 클릭
// 　　└── 문제 불러오기 (JSON) → 섞기 → 일부 선택
// 　　└── 첫 문제 보여주기
// 　　　　└── 타이머 시작
// 　　　　└── 보기 선택 가능

// [사용자 제출]
// └── "제출" 버튼 클릭 or 타이머 종료
// 　　└── 선택한 답 저장
// 　　└── 다음 문제 or 결과 화면

// [마지막 문제 후]
// └── 결과 요약 화면
// 　　└── "다시하기" 버튼 제공 → 모든 상태 초기화

// 주석 업그레이드 버전

// ✅ DOM 요소 선택
// 각 화면 구성 요소(버튼, 영역 등)를 미리 변수에 저장해 접근성 향상

// ✅ 상태 변수들
// 퀴즈 상태 관리에 필요한 변수들 (현재 인덱스, 문제 배열, 타이머 등)

// ✅ 시작 버튼 클릭 시
// - JSON 파일에서 전체 문제 가져오기
// - 문제를 무작위로 섞고 선택한 개수만큼 저장
// - 기존 상태 초기화 (답안, 인덱스 등)
// - 시작화면 숨기고 퀴즈 화면 보여주기
// - 첫 문제 출력

// ✅ 제출 버튼 클릭 시
// - 현재 선택한 답안 저장 (없으면 "미선택")
// - 중복 제출 방지
// - 타이머 제거
// - 다음 문제로 이동 or 결과 출력

// ✅ showQuestion(index)
// - 현재 인덱스의 문제를 화면에 출력
// - 보기 4개 출력 (라디오 버튼, 하나만 선택 가능)
// - 선택 시 제출 버튼 활성화
// - 제한 시간 설정 및 타이머 표시 시작
// - 시간이 다 되면 자동 제출 처리

// ✅ getRandomQuestions(array, count)
// - 문제 배열을 무작위로 섞고 앞에서 count개 잘라서 반환

// ✅ updateTimerUI()
// - 타이머 숫자를 UI에 표시

// ✅ submitAnswer(source)
// - 중복 제출 방지용 플래그 사용
// - 사용자의 답안을 저장
// - 다음 문제 보여주거나, 마지막 문제면 결과 화면 출력

// ✅ showResult()
// - 문제 수, 정답 수 등 전체 결과 출력
// - 각 문항별로 정답/오답 표시, 사용자의 선택과 정답 모두 보여줌
// - '다시하기' 버튼 제공 → 누르면 상태 및 화면 초기화
