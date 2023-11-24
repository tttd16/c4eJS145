const usernameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");
const containerElement = document.querySelector("#container");
const btnElement = document.querySelector("#btnSubmit");
btnElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (usernameElement.value.trim() === "" || passwordElement.value.trim() == "") {
    alert("Vui lòng nhập");
  } else {
    const div = document.createElement("div");
    div.style.marginBottom = "10px";
    div.style.marginTop = "10px";
    div.innerHTML = `
    <p>Username: ${usernameElement.value}</p>
    <p>Password: ${passwordElement.value}</p>
    <button class="btnDelete">Delete</button>
  `;
    containerElement.appendChild(div);
  }
  usernameElement.value = "";
  passwordElement.value = "";
});

containerElement.addEventListener("click", function (e) {
  if (e.target.classList.contains("btnDelete")) {
    const parent = e.target.parentNode;
    containerElement.removeChild(parent);
  }
});

/// Bài 2:
const squareEle = document.querySelectorAll(".square");
const clearSquareEle = document.querySelector("#clearSquare");
let currentPlayer = "X";
for (const square of squareEle) {
  square.addEventListener("click", function () {
    if (square.innerText === "") {
      square.innerText = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
  clearSquareEle.addEventListener("click", function () {
    square.innerText = "";
  });
}
