// let: 블록 스코프, 재선언 불가
console.log("=== let 예제 ===");

let title = "기초 JS";
console.log("제목:", title);

title = "심화 JS"; // 재할당은 되고 재선언은 안됨
console.log("수정된 제목:", title);

function letTest() {
  if (true) {
    let x = 20;
<<<<<<< HEAD
    console.log("x (블록 내부):", x); // 블록 단위 스코프.
=======
    var y = 10;
    console.log("x (블록 내부):", x);
>>>>>>> upstream/main
  }
  // console.log(y);
  console.log("x (외부):", x); // ReferenceError
}
letTest();
