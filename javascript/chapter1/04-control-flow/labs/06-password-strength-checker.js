/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/

let password = prompt("비밀번호를 입력하세요: ");
const issues = [];

if (password.length < 8) {
  issues.push("❌ 길이가 8자 미만");
}

if (!/[A-Z]/.test(password)) {
  issues.push("❌ 대문자가 없음");
}

if (!/[0-9]/.test(password)) {
  issues.push("❌ 숫자가 없음");
}

if (!/[!@#$%^&*]/.test(password)) {
  issues.push("❌ 특수문자(!@#$%^&*) 없음");
}

if (issues.length === 0) {
  alert("✅ 강한 비밀번호입니다!");
} else {
  alert("다음 조건이 부족합니다:");
  issues.forEach((msg) => alert(msg));
}
