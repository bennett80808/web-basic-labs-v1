/* 이메일 주소에서 아이디만 추출하세요 */
function extractEmailId(email) {
  // TODO: "@" 앞부분만
  let index = email.indexOf("@");
  return email.slice(0, index);
}
console.log(extractEmailId("coder123@gmail.com")); // "coder123"
