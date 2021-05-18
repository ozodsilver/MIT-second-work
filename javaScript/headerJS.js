let btnClick = document.querySelector(".menuButton");
let check = document.querySelector("#check");

btnClick.addEventListener("click", () => {
  let label = document.querySelector(".menuButton label");
  let listItems = document.querySelector(".topMenu .listItems");
  if (check.checked) {
    label.innerHTML = '<i class="fas fa-bars"></i>';
    label.style.color = "#ffffff";
    listItems.style.left = "600px";
  } else {
    listItems.style.transition = ".5s";
    listItems.style.left = "0px";
    label.style.transition = ".35s";
    label.style.color = "black";

    label.innerHTML = '<i class="fas fa-times"></i>';
  }
});

let btnPhone = document.querySelector("#Phone .phoneIcon");
let context = document.querySelector(".Phone_title");
let isT = { is: true };
btnPhone.addEventListener("click", () => {
  if (isT.is) {
    context.style.cssText = `
    transform: scaleX(1);
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);`;
    isT.is = false;
  } else {
    isT.is = true;
    context.style.cssText = `
    transform: scaleX(0);
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);`;
  }
});
