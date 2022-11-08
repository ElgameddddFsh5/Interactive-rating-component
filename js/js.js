let submit = document.getElementById("submit");
let btns = document.querySelectorAll("ul li");
let firstcont = document.querySelector(".first-container");
let seccont = document.querySelector(".sec-container");
let selected = document.querySelector(".selected");
let selectednum = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    selected.innerHTML = `You selected ${btn.innerHTML} Out of 5`;
    if (this.classList !== "onclick") {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("onclick");
      }
      this.classList.add("onclick");
    }
  });
});
submit.addEventListener("click", function () {
  firstcont.classList.add("hide");
  seccont.classList.remove("hide");
});
