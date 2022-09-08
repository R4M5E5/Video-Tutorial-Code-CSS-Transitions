
function onClickExampleB(element) {
    const newTopValue = element.style.top === "0px" ? "390px" : "0px"
    element.style.top = newTopValue;
}

function onClickExampleC() {
    const circleOne = document.getElementById("one");
    const circleTwo = document.getElementById("two");
    const circleThree = document.getElementById("three");
    const newTopValue = circleOne.style.top === "0px" ? "390px" : "0px"
    circleOne.style.top = newTopValue;
    circleTwo.style.top = newTopValue;
    circleThree.style.top = newTopValue;
}
