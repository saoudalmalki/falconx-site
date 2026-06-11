// FalconX hidden buttons only
document.addEventListener("DOMContentLoaded", function () {
  // TikTok placeholder: prevents jumping until a real TikTok link is added
  const tiktok = document.querySelector(".hs-tiktok");
  if (tiktok && tiktok.getAttribute("href") === "#") {
    tiktok.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
});
