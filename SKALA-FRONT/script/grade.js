//성적 계산기
function startGradeCheck() {
  var subjects = ["HTML", "CSS", "JavaScript"];
  var total = 0;

  for (var i = 0; i < subjects.length; i++) {
    var input = prompt(subjects[i] + " 점수를 입력하세요.");

    if (input === null) {
      alert("채점을 취소했습니다.");
      return;
    }

    var score = Number(input);

    if (isNaN(score) || input.trim() === "" || score < 0 || score > 100) {
      alert("0~100 사이의 숫자만 입력해주세요.");
      i--;
      continue;
    }

    total += score;
  }

  var average = Math.round((total / subjects.length) * 100) / 100;

  var passResult = average >= 60 ? "합격" : "불합격";

  var grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  alert(
    "총점: " + total + "점, 평균: " + average +
    ", 결과: " + passResult + "입니다! (등급: " + grade + ")"
  );
}