/*
[문제] axios 또는 fetch를 이용해 아래 두 요청을 병렬로 처리하세요.

- https://jsonplaceholder.typicode.com/users/1
- https://jsonplaceholder.typicode.com/posts/1

Promise.all을 활용하여
두 결과를 동시에 받아 콘솔에 출력하세요.
*/
import axios from "axios";

async function fetchWithAxios() {
  try {
    const [userRes, postRes] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/users/1"),
      axios.get("https://jsonplaceholder.typicode.com/posts/1"),
    ]);

    console.log("👤 사용자 정보:", userRes.data);
    console.log("📝 게시글 정보:", postRes.data);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

fetchWithAxios();
