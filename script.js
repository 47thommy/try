const peoples = document.querySelectorAll(".list");
const menu = document.querySelector(".left-section");
const close = document.querySelector(".close");
const message = document.querySelector(".right-section");
const back = document.querySelector("#chat");
const footer = document.querySelector(".main_footer");
peoples.forEach((people) => {
  if (peoples) {
    people.addEventListener("click", () => {
      menu.classList.add("showed");
      message.classList.add("showed");
      back.classList.add("showed");
      footer.classList.add("showed");
    });
  }
});

if (back) {
  back.addEventListener("click", () => {
    message.classList.remove("showed");
    menu.classList.remove("showed");
    back.classList.remove("showed");
  });
}
