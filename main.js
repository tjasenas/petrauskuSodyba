Fancybox.bind("[data-fancybox]", {
  // Your custom optionsg
});
const navLinks = document.querySelectorAll(".scroll");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileWrapper = document.querySelector(".mob-wrapper");
const overlay = document.querySelector(".overlay");

function closeMobile() {
  mobileWrapper.classList.remove("active");
  overlay.classList.remove("active");
}

openBtn.addEventListener("click", function () {
  mobileWrapper.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", closeMobile);
closeBtn.addEventListener("click", closeMobile);

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (link.closest(".mob-wrapper")) {
      closeMobile();
    }

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
