/*
장바구니 항목들의 가격을 모두 합산하여 총액을 계산하세요.
*/

const cart = [
  { name: "Keyboard", price: 30000 },
  { name: "Mouse", price: 15000 },
  { name: "Monitor", price: 200000 },
];

// TODO: reduce로 총합 계산

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);

// const total = cart.reduce((sum, item) => {
//   return sum + item.price;
// }, 0); return이 생략된것. 원래는 이런 뜻임.

//array.reduce((accumulator, currentValue, currentIndex, array) => {
// 로직
// }, initialValue);
// accumulator: 누적값 (초깃값부터 시작해서 매 반복마다 업데이트됨)

// currentValue: 현재 처리 중인(순회중인) 요소

// currentIndex (optional): 현재 요소의 인덱스

// array (optional): 현재 reduce가 동작하는 배열

// initialValue: accumulator의 초기값
