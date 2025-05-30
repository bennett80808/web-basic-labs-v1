// 함수 표현식 : 콜백 (일회성이 많아 굳이 이름을 줄 필요 X)
// 변수에 함수를 할당 (익명 함수도 사용 가능)
// 호이스팅 X

// sayHello(); // 호출 안됨

// 변수가 함수를 할당받음.
const sayHello = function () {
  console.log("Hello, world!");
};

sayHello(); // 호출

setTimeout(sayHello, 1000);

// 함수 선언식은 호이스팅 가능, 함수 표현식은 호이스팅 불가능

// 함수 선언식식
// sayHi(); // ✅ 호출 가능

// function sayHi() {
//   console.log("안녕!");
// }
