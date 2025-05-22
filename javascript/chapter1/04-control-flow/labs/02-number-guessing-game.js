// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복
const answer = Math.floor(Math.random() * 10) + 1;
let guess = null;

while (guess !== answer) {
  const input = prompt("1부터 10 사이 숫자를 입력하세요:");
  guess = parseInt(input);

  if (isNaN(guess)) {
    alert("숫자를 입력해주세요.");
    continue;
  }

  if (guess < 1 || guess > 10) {
    alert("1부터 10 사이 숫자만 입력 가능합니다.");
    continue;
  }

  if (guess === answer) {
    alert("🎉 정답입니다!");
  } else {
    alert("❌ 틀렸습니다. 다시 시도하세요.");
  }
}

rl.close();

playGame();
