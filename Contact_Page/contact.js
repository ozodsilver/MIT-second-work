const contactMoneyBtn = document.querySelector(".contact-money-btn");
const contactMoneyBtnInfo = document.querySelector(".contact-money-info");

contactMoneyBtn.onmousemove = () =>
  contactMoneyBtnInfo.classList.add("contact-money-info-active");
contactMoneyBtn.onmouseout = () =>
  contactMoneyBtnInfo.classList.remove("contact-money-info-active");
