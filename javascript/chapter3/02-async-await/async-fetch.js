function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // 프로미스 상태가 성공
    }, ms);
  });
}

async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1" // 성공
      //   "https://jsonplaceholder.typicode.co" // 실패
    );
    const data = await response.json();
    console.log(data);

    await delay(1000);
    console.log("delay 함수 이후 코드 실행행");
  } catch (err) {
    console.error(err);
    console.log(" catch 블록 내 코드 실행");
  }
}

fetchTodo();
