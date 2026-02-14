(function () {
  "use strict";

  var btnYes = document.getElementById("btnYes");
  var btnNo = document.getElementById("btnNo");
  var questionView = document.getElementById("questionView");
  var successView = document.getElementById("successView");
  var buttonsArea = document.querySelector(".buttons-area");

  if (!btnYes || !btnNo || !buttonsArea) return;

  // Yes: show Hebrew success (replace card content)
  btnYes.addEventListener("click", function () {
    questionView.classList.add("hidden");
    successView.classList.remove("hidden");
  });

  function moveNoButton() {
    var containerWidth = buttonsArea.offsetWidth;
    var containerHeight = buttonsArea.offsetHeight;
    var noBtnWidth = btnNo.offsetWidth;
    var noBtnHeight = btnNo.offsetHeight;

    var maxX = Math.max(0, containerWidth - noBtnWidth);
    var maxY = Math.max(0, containerHeight - noBtnHeight);

    var randomX = Math.random() * maxX;
    var randomY = Math.random() * maxY;

    btnNo.style.transform = "none";
    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
  }

  // No: escape on desktop (mouseenter)
  btnNo.addEventListener("mouseenter", moveNoButton);

  // No: escape on mobile (touchstart)
  btnNo.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
  }, { passive: false });
})();
