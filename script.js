const member = Array.from(document.querySelectorAll(".box"));
const arrayNumber = document.querySelector(".arraynumber");
const arrayNumber2 = document.querySelector(".arraynumber2-1");
const arrayNumber2_1 = document.querySelector(".arraynumber2-2");
const arrayValue = document.querySelector(".arrayValue");
const arrayValue2 = document.querySelector(".arrayValue2");
const firstLow = document.getElementsByClassName("grade_1");
const firstLowfirstLow = Array.from(firstLow[0].querySelectorAll(".box2"));
const SecondLow = document.getElementsByClassName("grade_2");
const SecondLowSecondLow = Array.from(SecondLow[0].querySelectorAll(".box2"));
const ThirdLow = document.getElementsByClassName("grade_3");
const ThirdLowThirdLow = Array.from(ThirdLow[0].querySelectorAll(".box2"));
function handleLowClick(e) {
  arrayNumber2.innerText = e.target.value;
  arrayNumber2_1.innerText = e.target.id;
  arrayValue2.innerText = e.target.innerText;
}
function handleMemberClick(e) {
  arrayNumber.innerText = e.target.id;
  console.log(e.target.id);
  arrayValue.innerText = e.target.innerText;
}
member.forEach(function (e) {
  e.addEventListener("click", handleMemberClick);
});

firstLowfirstLow.forEach(function (e) {
  e.addEventListener("click", handleLowClick);
});
SecondLowSecondLow.forEach(function (e) {
  e.addEventListener("click", handleLowClick);
});
ThirdLowThirdLow.forEach(function (e) {
  e.addEventListener("click", handleLowClick);
});

console.log(ThirdLowThirdLow);
