// 문제: prompt() 메서드를 활용해 사용자에게 숫자를 입력받아 홀수/짝수를 출력하세요.

const input = prompt("숫자를 입력하세요: ");
const number = parseInt(input);

if (isNaN(number)) {
  alert("숫자를 입력하지 않았습니다!");
} else {
  if (number % 2 === 0) {
    alert(`${number}는 짝수입니다.`);
  } else {
    alert(`${number}는 홀수입니다.`);
  }
}
