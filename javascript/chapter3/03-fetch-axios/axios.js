// axios : 써드 파티 라이브러리 (외부 라이브러리)
import axios from "axios";
async function get() {
  await axios.get("https://jsonplaceholder.typicode.com/posts/1");
}

get();
