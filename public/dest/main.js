$(document).ready(function () {
  // ========================= TABS ========================
  function clickTab() {
    $(document).on("click", ".tab__title a", function (e) {
      e.preventDefault();
      let i = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $(".tab__content .tab__content-item")
        .eq(i)
        .css({
          display: "block",
        })
        .siblings()
        .css({
          display: "none",
        });
    });
  }
  clickTab();

  $(window).on("load", () => {
    $(".loading").addClass("--hide");
  });
});
