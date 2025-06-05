/*
[문제] 존재하지 않는 URL로 요청을 보내 에러를 유도하고,
각 방식(fetch, axios)으로 에러를 try/catch로 처리하세요.

요청: GET https://jsonplaceholder.typicode.com/404-not-found

- 에러 메시지와 HTTP 상태 코드를 콘솔에 출력
*/
import axios from "axios";

async function fetchWithAxios() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/404-not-found"
    );
    console.log(response.data);
  } catch (err) {
    // axios는 HTTP 오류도 catch에서 잡힘
    console.error("❌ axios 에러 발생!");
    console.error("에러 메시지:", err.message);
    console.error("HTTP 상태코드:", err.response?.status); // optional chaining 사용
  }
}

fetchWithAxios();

async function fetchWithFetch() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/404-not-found"
    );

    // fetch는 404도 성공처럼 처리함 → 수동으로 체크 필요
    if (!response.ok) {
      throw new Error(`HTTP 상태코드: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("❌ fetch 에러 발생!");
    console.error("에러 메시지:", err.message);
  }
}

fetchWithFetch();
