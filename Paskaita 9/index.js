const p = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", changeStyle);

function changeStyle() {
  p.style.fontSize = "20px";
  if (p.style.fontSize === "20px") {
    console.log("dydis yra 20px");
  }
  if (p.classList.contains("green-text")) {
    p.classList.remove("green-text");
  } else {
    p.classList.add("green-text");
  }
}

const arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 10],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
