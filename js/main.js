$(function () {
  $(".burger").on("click", function () {
    $(".header__menu-bottom").slideToggle();
  });

  $(".slider__inner").slick();

  let burger = document.querySelector(".burger");

  burger.onclick = () => {
    burger.classList.toggle("active");
  };
});
