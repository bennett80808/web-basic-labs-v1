/*
[문제] axios를 사용해 특정 게시글을 수정하는 PUT 요청을 보내세요.

PUT: https://jsonplaceholder.typicode.com/posts/1

- 수정할 내용: { title: "Updated Title", body: "Updated Body", userId: 1 }
- 응답 결과를 콘솔에 출력하세요
*/
import axios from "axios";

async function updatePost() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const updateData = {
    title: "Updated Title",
    body: "Updated Body",
    userId: 1,
  };

  try {
    const response = await axios.put(url, updateData);
    console.log("응답 데이터", response.data);
  } catch (err) {
    console.log("에러발생", err);
  }
}
updatePost();
