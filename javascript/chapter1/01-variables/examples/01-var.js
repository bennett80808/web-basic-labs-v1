// var: 함수 스코프, 재선언 가능
console.log("=== var 예제 ===");

var name = "지수";
console.log("이름:", name);

var name = "지훈"; // 재선언 가능
console.log("바뀐 이름:", name);

function varTest() {
  if (true) {
    var x = 10; // var 자바처럼 블록이 사라진다고 사라지는게 아님. 함수 스코프
  }
  console.log("x 값:", x); // 함수 스코프
}
// console.log(x);
varTest();
