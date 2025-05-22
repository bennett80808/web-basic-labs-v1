/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/

const choices = ["가위", "바위", "보"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function getRoundResult(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "가위" && computer === "보") ||
    (user === "바위" && computer === "가위") ||
    (user === "보" && computer === "바위")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

async function playGame() {
  let wins = 0;
  let losses = 0;
  let round = 1;

  alert("🕹️ 가위바위보 게임 (3판 2선승제) 시작!");

  while (wins < 2 && losses < 2) {
    alert(`\n[${round}라운드]`);
    const userChoice = prompt("당신의 선택 (가위/바위/보): ");

    if (!choices.includes(userChoice)) {
      alert(
        "❗ 잘못된 입력입니다. '가위', '바위', '보' 중 하나만 입력해주세요."
      );
      continue;
    }

    const computerChoice = getComputerChoice();
    alert(`컴퓨터의 선택: ${computerChoice}`);

    const result = getRoundResult(userChoice, computerChoice);

    if (result === "win") {
      wins++;
      alert(`당신이 이겼습니다! (${wins}승 ${losses}패)`);
    } else if (result === "lose") {
      losses++;
      alert(`당신이 졌습니다. (${wins}승 ${losses}패)`);
    } else {
      alert(`비겼습니다. (${wins}승 ${losses}패)`);
    }

    round++;
  }

  alert("\n🎉 게임 종료:");
  if (wins === 2) {
    alert("당신의 승리입니다!");
  } else {
    alert("컴퓨터의 승리입니다!");
  }
}

playGame();
