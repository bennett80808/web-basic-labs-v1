// 문제 : 숫자 n을 입력받아 1부터 n까지의 합을 반환하는 함수를 작성하세요.
function sum(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let sumNum = sum(10);
console.log(sumNum);
