const item2 = document.querySelector("#clint-page .clint-logo-2");
const item3 = document.querySelector("#clint-page .clint-logo-3");
function dowF(id, event) {
  if (id == "1") {
    item2.style.cssText = `
          opacity: 1;
          transform: scaleY(1);
         -webkit-transform: scaleY(1);
         -moz-transform: scaleY(1);
         -ms-transform: scaleY(1);
         -o-transform: scaleY(1);
          height: auto;
    `;
  } else {
    item3.style.cssText = `
          opacity: 1;
          transform: scaleY(1);
         -webkit-transform: scaleY(1);
         -moz-transform: scaleY(1);
         -ms-transform: scaleY(1);
         -o-transform: scaleY(1);
          height: auto;
    `;
  }

  event.target.style.display = "none";
}
