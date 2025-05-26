// 문제: 숫자 조건 검사기 만들기
// 숫자 하나와 조건을 전달받아, 조건을 만족하는지를 판단하는 함수를 작성하세요.
// checkByCondition(num, callback) 형태로 작성하며,
// callback 함수는 해당 숫자가 조건을 만족하면 true, 아니면 false를 반환합니다.

// 고차함수 : 함수를 인자로 받거나 반환하는 함수
// 콜백함수 : 다른 함수에 전달되어 나중에 호출되는 함수
// 다형성을 이루는 방법 (자바에선 인터페이스 / 상속 / 메서드 오버라이딩을 통해
// 이뤘다면 자바스크립트에선 콜백을 통해)

function checkByCondition(num, callback) {
  // TODO: callback을 이용해 조건 검사
  return callback(num);
}

function checkEven(num) {
  return num % 2 === 0;
}

function checkIfTen(num) {
  return num > 10;
}

function checkIfThree(num) {
  return num % 3 === 0;
}

// 1) 짝수인지 검사
// 2) 10보다 큰지 검사
// 3) 3의 배수인지 검사

console.log(checkByCondition(8, checkEven)); // true (짝수)
console.log(checkByCondition(5, checkEven)); // false
console.log(checkByCondition(12, checkIfTen)); // true (10보다 큼)
console.log(checkByCondition(3, checkIfThree)); // true (3의 배수)
console.log(checkByCondition(4, checkIfThree)); // false
