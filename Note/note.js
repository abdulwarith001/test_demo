const btn = document.getElementById("btn");
const body = document.getElementById("body");

function changeBodyColor() {
  body.style.color = "red";
}

function calculateNum(num1, num2, num3) {
  logColor("yellow");
  const answer = num1 * num2 + num3;
  console.log("hello");
  console.log(answer);
}

calculateNum(2, 4, 8);
calculateNum(5, 0, 4);

function logColor(color) {
  console.log(color);
}

logColor("red");
logColor("blue");
logColor("purple");

function number(nom1, nom2, nom3) {
  const solution = nom1 + nom2 + nom3;
  console.log(solution);
}
const boy = "I am a boy";
const girl = "i am a girl";

const text = "This is a string" + ", " + girl + "uja" + "iks" + "hjkns";

const text2 = `This is a template string ${boy} and this is another string ${girl}, ${text}`;

const answer = 2 + 5;
const displayAnswer = `The answer to 2 + 5 is equal to ${answer}`;
console.log(displayAnswer);
number(3, 9, "one");
