// 문제: prompt() 메서드를 활용해 사용자에게 숫자를 입력받아 홀수/짝수를 출력하세요.
<<<<<<< HEAD

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
=======
// alert("새싹 안녕");
// let input = prompt("이름이 뭡니까?");
// alert(input);
let input = prompt("숫자를 입력하세요");

console.log(input % 2 == 1 ? "홀수" : "짝수");
>>>>>>> upstream/main
