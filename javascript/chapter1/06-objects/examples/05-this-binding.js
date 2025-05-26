const student = {
  name: "윤학생",
  greet() {
    console.log(`안녕하세요, ${this.name}!`);
  },
};
student.greet();
setTimeout(student.greet, 1000); // undefined (this 가 가리키는게 소실)
setTimeout(student.greet.bind(student), 1000); // student 객체를 this로 고정

// 자바스크립트에서 this는 함수가 호출되는 방식에 따라 달라져.
// 단순히 **그 함수가 "어디서 정의됐는지"가 아니라, **"어떻게 불렸는지"**가 핵심이야!

// student.greet이 객체 없이 호출된 일반 함수"**가 됐기 때문이야.
// 이때는 기본적으로 this는 전역 객체(window) 또는 undefined 가 돼

// 콜백으로 전달될 때 this 소실
// 콜백 함수란?
// **"다른 함수에 인자로 전달되어, 그 안에서 나중에 호출되는 함수
// const user = {
//   name: "민수",
//   sayHi() {
//     console.log(this.name);
//   }
// };

// setTimeout(user.sayHi, 1000); // ❌ this는 window or undefined 출력됨

// 브라우저 환경에서 자바스크립트를 실행할 때,
// "전역(global) 객체" 가 바로 window야.

//console.log(window); // 브라우저의 모든 전역 기능이 다 들어있음
// ✅ 포함된 것들:
// console

// alert()

// setTimeout()

// 전역 변수 (예: var x = 1 → window.x === 1)

// DOM 접근 (document, location 등)
