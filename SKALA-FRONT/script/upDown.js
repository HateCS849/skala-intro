//Up-Down 숫자 맞추기 게임
function startUpDownGame() {
  var computerNum = Math.floor(Math.random() * 50) + 1;

  var tryCount = 0;
  var isCorrect = false;

  while (!isCorrect) {
    var input = prompt("1부터 50 사이의 숫자를 맞춰보세요! (시도 " + (tryCount + 1) + "번째)");

    if (input === null) {
      alert("게임을 종료합니다.");
      return;
    }

    var userNum = Number(input);

    if (isNaN(userNum) || input.trim() === "") {
      alert("숫자만 입력해주세요!");
      continue;
    }

    tryCount++;

    if (userNum > computerNum) {
      alert("Down!");
    } else if (userNum < computerNum) {
      alert("Up!");
    } else {
      alert("축하합니다! " + tryCount + "번 만에 맞추셨습니다.");
      isCorrect = true;
    }
  }
}