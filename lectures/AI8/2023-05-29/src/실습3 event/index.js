/*
const user_name1 = document.getElementById('player1');
const user_name2 = document.getElementById('player2');
const user_name3 = document.getElementById('player3');

user_name1.addEventListener('click', updateName1);
user_name2.addEventListener('click', updateName2);
user_name3.addEventListener('click', updateName3);

function updateName1() {
    const name = prompt("Enter a new name.");
    user_name1.textContent = `Player 1 : ${name}`;
}

function updateName2() {
    const name = prompt("Enter a new name.");
    user_name2.textContent = `Player 2 : ${name}`;
}

function updateName3() {
    const name = prompt("Enter a new name.");
    user_name3.textContent = `Player 3 : ${name}`;
}
*/
const PLAYER_COUNT = 3;

for(let i=0; i< PLAYER_COUNT; i++) {
    let player = document.getElementById("player"+(i+1));
    player.addEventListener('click', player_event_handler);
}

function player_event_handler(event){
    const name = prompt("Enter a new name.");
    event.target.textContent = `${event.target.id} : ${name}`;
}