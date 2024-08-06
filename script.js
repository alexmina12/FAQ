function extend(buttonIndex) {
  let paragraphs = document.querySelectorAll("#element");
  let image = document.querySelectorAll("#images");
  let targetParagraph = paragraphs[buttonIndex];
  let targetImages = image[buttonIndex];
  let computedStyle = window.getComputedStyle(targetParagraph).display;
  if (computedStyle === "none") {
    targetParagraph.style.display = "block";
    targetImages.src = "./assets/images/icon-minus.svg";
  } else {
    targetParagraph.style.display = "none";
    targetImages.src = "./assets/images/icon-plus.svg";
  }
}
