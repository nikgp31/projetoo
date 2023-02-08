function addUser(){
player1Name = document.getElementeById("player1NameInput").value;
player2Name = document.getElementeById("player2NameInput").value;

localStorage.setIten("player1Name",player1Name );
localStorage.setIten("player2Name",player2Name );

window.location = "game_page.html";
}
