// 비동기 처리
// 콜백, Promise, async/await

function getUserData(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "윤유저" });
  }, 1000);
}

getUserData((user) => {
  console.log(user);
});
console.log("실행");
