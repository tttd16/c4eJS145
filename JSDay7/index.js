///Bài 1
let myString = prompt("Nhập vào").split(" ").join("");
let length = myString.length;
let i = 0;
while (i < length) {
  console.log("Chữ cái thứ" + " " + (i + 1) + " " + myString[i]);
  i++;
}

// Bài 2
let a1, a2;
while (true) {
  a1 = +prompt("Nhập số thứ nhất");
  if (!isNaN(a1) && a1 > 0 && a1 % 2 === 0) {
    a2 = +prompt("Nhập số thứ hai");
    if (!isNaN(a2) && a2 > 0 && a2 % 2 === 0) {
      a1 > a2 ? alert("Số lớn là: " + a1) : a1 == a2 ? alert("Hai số bằng nhau") : alert("Số lớn là: " + a2);
      break;
    } else {
      alert("Nhập lại");
    }
  } else {
    alert("Nhập lại");
  }
}

// Bài 3
let j = 1;
while (j < 11) {
  console.log(j);
  j++;
}

// Bài 4
let sum = 0;
let subtraction = 0;
let multi = 1;
let division = 1;
let k = 1;
while (k < 11) {
  sum += k;
  subtraction -= k;
  multi *= k;
  division /= k;
  k++;
}
console.log(`   Tổng 1 -> 10 là: ${sum},
                Hiệu 1 -> 10 là: ${subtraction},
                Nhân 1 -> 10 là: ${multi},
                Chia 1 -> 10 là: ${division}
`);
