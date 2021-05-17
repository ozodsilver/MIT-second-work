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
