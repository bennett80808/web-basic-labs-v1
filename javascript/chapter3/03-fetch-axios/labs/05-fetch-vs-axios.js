/*
[문제] 동일한 요청을 fetch와 axios로 각각 구현하세요.

요청: GET https://jsonplaceholder.typicode.com/todos/1

- 두 방식 모두 async/await 사용
- 각각 결과 콘솔 출력
- 차이점 주석으로 정리
*/
// ✅ [1] fetch 방식
async function fetchWithFetch() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // fetch는 응답을 직접 JSON으로 파싱해야 함
    const data = await response.json();

    console.log("✅ fetch 결과:", data);
  } catch (error) {
    console.error("❌ fetch 에러:", error);
  }
}

// ✅ [2] axios 방식
import axios from "axios"; // Node.js 환경이라면 필요 (브라우저에서는 CDN 가능)

async function fetchWithAxios() {
  try {
    // axios는 자동으로 JSON 파싱된 결과를 반환함
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log("✅ axios 결과:", response.data);
  } catch (error) {
    console.error("❌ axios 에러:", error);
  }
}

// ✅ 함수 실행
fetchWithFetch();
fetchWithAxios();

// ✅ 차이점 요약 (주석용)
// 항목	                fetch	                                    axios
// JSON 파싱	직접 res.json() 해야 함	                            자동으로 response.data에 파싱된 데이터 제공
// 기본 기능	최소한의 API (low-level)	                        다양한 기능 내장 (타임아웃, 헤더 자동처리 등)
// 에러 처리	HTTP 에러(404 등)를 catch로 못 잡음 → 수동 체크 필요	HTTP 에러도 자동으로 catch로 전달
// 응답 객체	Response 객체 → 수동 파싱	                            data, status, headers 등 구조화된 응답
// 파일 용량	매우 작음	                                        약간 큼 (라이브러리 포함)
