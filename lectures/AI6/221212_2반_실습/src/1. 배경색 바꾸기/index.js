var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/
blockOne.addEventListener('mouseenter', (event) => {
    blockOne.className = "red"
});

blockTwo.addEventListener('mouseenter', (event) => {
    blockTwo.className = "yellow";
});

blockThree.addEventListener('mouseenter', (event) => {
    blockThree.className = "green";
});

//onmouseenter = (event) => { };