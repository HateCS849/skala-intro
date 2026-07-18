//가방 속 물품(소지품 명, 소지품 수) 보여주는 프로그램
var myBag = [
  { name: "노트북", count: 1 },
  { name: "지갑", count: 1 },
  { name: "볼펜", count: 3 },
  { name: "이어폰", count: 1 },
  { name: "우산", count: 1 }
];

function showMyBag() {
  var bagListEl = document.getElementById("bagList");

  bagListEl.innerHTML = "";

  for (var i = 0; i < myBag.length; i++) {
    var item = myBag[i];

    var li = document.createElement("li");
    li.textContent = item.name + " - " + item.count + "개";
    bagListEl.appendChild(li);

    console.log(item.name + ": " + item.count + "개");
  }
}