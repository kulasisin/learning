$(document).ready(function () {
  $(".fa-bars").on("click", function (e) {
    e.preventDefault();
    $(".navbar").toggleClass("menu-show");
  });
  $("body").click(function (e) {
    if (!$(e.target).hasClass("fa-bars")) {
      $(".navbar").removeClass("menu-show");
    }
  });
  $(".go-top").click(function (e) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  });
});
