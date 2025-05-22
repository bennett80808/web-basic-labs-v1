// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.
const input = prompt("숫자를 입력하세요:");
let number = parseInt(input);
let sum = 0;

if (isNaN(number)) {
  alert("숫자를 입력해야 합니다.");
} else {
  while (number > 0) {
    sum += number % 10; // 마지막 자릿수 더하기
    number = Math.floor(number / 10); // 마지막 자릿수 제거
  }

  alert(`자릿수의 합은 ${sum}입니다.`);
}
