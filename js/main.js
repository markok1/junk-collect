(function ($) {
  let section = $("section.faq");
  let sectionForm = $("div.form-holder");
  if (section.length) {
    $(".qa-item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("opened")) {
        $(this).removeClass("opened");
        $(this).find(".answer").slideUp(150);
      } else {
        $(".qa-item").removeClass("opened");
        $(".qa-item .answer").slideUp(150);
        $(this).addClass("opened");
        $(this).find(".answer").slideDown(150);
      }
    });
  }
})(jQuery);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-fade");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-fade");
hiddenElements.forEach((el) => observer.observe(el));
