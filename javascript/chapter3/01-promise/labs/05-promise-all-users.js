/*
[문제] Promise.all()을 사용하여 사용자 정보 3개를 동시에 불러오세요.

API:
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/users/2
https://jsonplaceholder.typicode.com/users/3

요구사항:
- fetch 또는 axios 중 하나 선택 (async/await 사용)
- Promise.all()로 동시에 요청 보낼 것
- 3명의 이름(name)만 배열로 출력할 것 (예: ["Leanne", "Ervin", "Clementine"])
- 에러가 발생하면 "요청 실패" 메시지를 출력하세요.
*/

async function fetchUser() {
  try {
    const responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/users/2"),
      fetch("https://jsonplaceholder.typicode.com/users/3"),
    ]);

    const users = await Promise.all(responses.map((res) => res.json()));
    // 배열의 각 요소 res를 받아서 res.json() 를 리턴해서 배열을 새로 만듬.

    //     Promise.all()은 내부적으로 모든 값을 Promise로 감싸서 처리함
    // 즉, 일반 값이 들어와도 자동으로 resolve() 처리됨
    const names = users.map((user) => user.name);
    console.log(names);
  } catch (err) {
    console.log("요청실패");
  }
}

fetchUser();
//"Promise로 감싼다"는 뜻
// "그 값이 Promise가 아니면, 자동으로 Promise.resolve(값)으로 바꿔서 비동기처럼 다룬다."
// 예: 일반 값을 Promise.resolve()로 감싸면?
// Promise.resolve(3);  // → Promise<number>
// Promise.resolve("hi");  // → Promise<string>
// Promise.resolve(true);  // → Promise<boolean>

// 기본적으로 Promise는 resolve 중심으로 동작하고,
// Promise.all()이나 async/await도 기본값은 resolve()를 기준으로 작동해.
