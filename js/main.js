window.addEventListener("DOMContentLoaded", (event) => {
  $("#search-button").on("click", function () {
    $("#navsearch").toggleClass("active");
  });
});

function scrollToElement(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
