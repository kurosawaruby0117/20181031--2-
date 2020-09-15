const member = Array.from(document.querySelectorAll(".box"));
const arrayNumber = document.querySelector(".arraynumber");
const arrayValue = document.querySelector(".arrayValue");
function handleMemberClick(e) {
  arrayNumber.innerText = e.target.id;
  console.log(e.target.id);
  arrayValue.innerText = e.target.innerText;
}

member.forEach(function (e) {
  e.addEventListener("click", handleMemberClick);
});

console.log(arrayNumber);
