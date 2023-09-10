var blockOne = document.getElementById('red');
var blockTwo = document.getElementById('yellow');
var blockThree = document.getElementById('green');

/*지시사항을 따라 작성해주세요*/
blockOne.addEventListener('mouseenter', () => {
  blockOne.classList.add('red');
});

blockTwo.addEventListener('mouseenter', () => {
  blockTwo.classList.add('yellow');
});

blockThree.addEventListener('mouseenter', () => {
  blockThree.classList.add('green');
});

blockOne.addEventListener('mouseout', () => {
  blockOne.classList.remove('red');
})