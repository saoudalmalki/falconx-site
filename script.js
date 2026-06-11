document.addEventListener("DOMContentLoaded", function () {
  const tiktok = document.querySelector(".hs-tiktok");
  if (tiktok && tiktok.getAttribute("href") === "#") {
    tiktok.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
});
