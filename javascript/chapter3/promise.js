// 콜백을 프로미스로 전환
// 함수로 묶어서 사용

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 성공 결과를 반환하는 함수
      resolve({ id: 12, name: "윤유저" });
    }, 1000);
  });
}

getUserData().then((user) => {
  console.log(user);
});
console.log("실행");
