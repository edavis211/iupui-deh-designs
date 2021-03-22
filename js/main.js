window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  $(".owl-carousel").owlCarousel({
    loop: true,
    dotsEach: 1,
    items: 1,
  });

  var rellax = new Rellax(".rellax");

  document.getElementById("scrolldown").addEventListener("click", function () {
    var offset = 80; // sticky nav height
    var main = document.getElementById("front-page-main");
    window.scroll({
      top: main.offsetTop - offset,
      left: 0,
      behavior: "smooth",
    });
  });

  document.querySelectorAll(".filter").forEach(function (filter) {
    filter.addEventListener("click", function () {
      filter.classList.toggle("active");
    });
  });
});
