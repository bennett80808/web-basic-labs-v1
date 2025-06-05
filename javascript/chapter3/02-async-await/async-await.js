// async - await : 프로미스 객체를 처리하는 문법

// 프로미스 객체를 반환하는 함수
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // 프로미스 상태가 성공
    }, ms);
  });
}

// delay(1000).then(() => {
//   console.log("프로미스 객체 결과 성공");
// });

async function main() {
  console.log("main 함수 실행");
  await delay(1000);
  console.log("1초 후 출력");
}

main();
console.log("코드 실행");
