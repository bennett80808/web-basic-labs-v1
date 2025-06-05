/*
[문제] 두 개의 외부 API를 fetch로 병렬 처리한 뒤, 둘의 결과를 모두 출력하세요.

1) https://jsonplaceholder.typicode.com/posts/2
2) https://jsonplaceholder.typicode.com/users/1

- async/await와 Promise.all을 활용
- 두 API 모두의 데이터를 받아서 각각 출력
*/
async function fetchMulti() {
  try {
    const responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
      fetch("https://jsonplaceholder.typicode.com/users/1"),
    ]);

    const users = await Promise.all(responses.map((res) => res.json()));
    // 배열의 각 요소 res를 받아서 res.json() 를 리턴해서 배열을 새로 만듬.

    //     Promise.all()은 내부적으로 모든 값을 Promise로 감싸서 처리함
    // 즉, 일반 값이 들어와도 자동으로 resolve() 처리됨

    console.log(users);
  } catch (err) {
    console.log("요청실패");
  }
}

fetchMulti();
