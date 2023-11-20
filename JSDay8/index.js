// Bài 1
const createArr = (inputLength) => {
  let arr = [];
  while (arr.length < inputLength) {
    let num = Math.floor(Math.random() * 5 + 1);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

const myArr = createArr(5);
console.log(myArr);
console.log(myArr.length); //a
console.log(myArr[0]); //b
console.log(myArr[myArr.length - 1]); //c
console.log(myArr.slice(1)); // d
//e
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

/// ======================================================
// Bài 2

let myCar = {
  model: "BMW",
  color: "Black",
  size: "7 Chỗ",
};

console.log(myCar.model); //a
myCar.color = "Red"; // b
// Sử dụng Object Restructuring làm câu c.
let { size, ...newMyCar } = myCar;
myCar = newMyCar;
console.log(myCar);
//d
myCar.owner = "TD";
console.log(myCar);

/// ======================================================
// Bài 3

const arrNum = [1, 2, 3, 4, 5];

// a
arrNum.splice(1, 0, 100);
// console.log(arrNum);

//b
let inputIndex;
while (true) {
  inputIndex = +prompt("Enter Index");
  if (!isNaN(inputIndex) && inputIndex < arrNum.length) {
    alert(arrNum[inputIndex]);
    break;
  } else {
    alert("Enter again");
    1;
  }
}

let inputNumber;
while (true) {
  inputNumber = +prompt("Entet Number");
  if (!isNaN(inputNumber) && arrNum.includes(inputNumber)) {
    let indexN = arrNum.indexOf(inputNumber);
    alert(indexN);
    break;
  } else {
    alert("Enter again");
  }
}

//c
let inputIndexDelete;
while (true) {
  inputIndexDelete = +prompt("Entet Index Delete");
  if (!isNaN(inputIndexDelete) && inputIndexDelete < arrNum.length) {
    arrNum.splice(inputIndexDelete, 1);
    alert(arrNum);
    break;
  } else {
    alert("Enter again");
  }
}

//d, e
function getMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    if (max < element) {
      max = element;
    }
    if (min > element) {
      min = element;
    }
  }
  return { max, min };
}
console.log(getMaxAndMin(arrNum));

// f, g
function sumAndSubtraction(arr) {
  let sum = 0;
  let subtraction = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum += element;
    subtraction -= element;
  }
  return { sum, subtraction };
}

console.log(sumAndSubtraction(arrNum));
