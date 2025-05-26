// 클로저 : 외부 변수를 기억하는 함수
// 함수 내부의 상태를 기억하고 캡슐화를 완전한 은닉이 가능

function createCounter() {
  let count = 0; // 외부에서는 접근 불가한 private 변수

  return function () {
    count++;
    console.log(`현재 카운트: ${count}`);
  };
}

const counter = createCounter();

counter(); // 현재 카운트: 1
counter(); // 현재 카운트: 2

// -> 객체로 하면 안되나??
// 기본적으로 자바스크립트는 접근제어자가 불가했음. (2022 이후부터 # (private 상태) 가능)

// 그 클로저가 더 이상 사용되지 않을 때까지,
// 즉 참조가 끊길 때까지 외부 변수를 계속 기억해.

// 반례: 클로저가 아닌 경우
// let count = 0;

// function sayCount() {
//   console.log(count);
// }
// 여기서도 외부 변수 count를 참조하고 있지만,
// 이건 전역 스코프 접근일 뿐이고,
// **클로저의 진짜 의미(함수가 선언된 시점의 지역 스코프 기억)**와는 좀 달라.
// 전역 변수는 아무나 접근 가능하기 때문에 캡슐화 실패.
