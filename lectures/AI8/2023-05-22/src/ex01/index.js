const user_name = document.querySelector('p'); // []
document.getL

user_name.addEventListener('click', updateName);

function updateName() {
    const name = prompt("Enter a new name.");
    user_name.textContent = `Player 1 : ${name}`;
}