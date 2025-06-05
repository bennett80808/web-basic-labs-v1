/*
이메일 주소가 "naver.com"인 사용자가 있는지 확인하고, 있다면 그 사람을 출력하세요.
*/

const users = [
  { name: "이유저", email: "chulsoo@gmail.com" },
  { name: "김유저", email: "younghee@naver.com" },
  { name: "서유저", email: "minsu@daum.net" },
];

// TODO: find 사용

const nUser = users.find((user) => user.email.includes("naver.com"));
console.log(nUser);

//const result = array.find(callback);
// find()는 조건을 만족하는 첫 번째 요소를 찾아서 반환합니다.

// 중복된 값이 있더라도 가장 먼저 조건을 만족하는 요소 하나만 반환합니다.

// 조건을 만족하는 요소가 없으면 undefined를 반환합니다.
