// Your code here

var dodger = document.getElementById('dodger');
// This defines the dodger element.

document.addEventListener('keydown', function(e) {
    // listen for a 'keydown' event, handleEvent()
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }   // if the e (event).key is exactly "ArrowLeft" then, invoke moveDodgerLeft().
})

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    // this grabs the numbers from dodger element's left style attribute and removes the "px"
    
    let left = parseInt(leftNumbers, 10);
    // converts the result of leftNumbers, a string value, into a number value(with the radix of 10).
    // Radix is a base number and is super confusing to explain. Just use 10.

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
    // if the left value is larger than 0, 
    // decrease the value of left by 1px.
}


document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})





function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}
// Using the same function but moves the dodger right by the + operator.