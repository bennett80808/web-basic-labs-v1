// GET : 조회

async function get() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
// get();

// POST : 데이터를 서버에 전송 (등록)
async function post() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "hello",
      body: "내용입니다",
    }),
  });
  const data = await res.json();
  console.log(data);
}
post();

// http 메세지 조사할것.
