window.addEventListener("DOMContentLoaded", (event) => {
  var rellax = new Rellax(".rellax");

  $("#search-button").on("click", function () {
    $("#navsearch").toggleClass("active");
  });
});
