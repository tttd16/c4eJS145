const logger = (mess) => {
  console.log(mess);
};

logger("hello");

import check from "./modules/module.js";

check.caculateLength("hello Mindx");
check.checkLengthMin10("hell");

const hs = {
  username: "Mindx",
  password: "12345678",
  age: 23,
  address: "HN",
};

const hsCoppy = { ...hs };
// const { username, ...newHs } = hsCoppy;
const { username, password, age: myAge, address } = hsCoppy;

console.log(myAge);
