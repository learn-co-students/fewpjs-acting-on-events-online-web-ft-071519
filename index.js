// Your code here
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left >= -5 && left < 360 ) {
    dodger.style.left = `${left + 3}px`;
  }
  if (left > 360) {
		dodger.style.left = "360px"
  }
}
