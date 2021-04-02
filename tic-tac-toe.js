window.addEventListener("DOMContentLoaded", event => {

    const playerX = "<img src='https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'>";
    const playerO = "<img src='https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'>";

    const board = document.querySelector("#tic-tac-toe-board");

    //set up event listeners for each square in the grid
    //if user clicks, insert the appropriate img
    let clicks = 0;

    board.addEventListener("click", event => {
        clicks++;
        if (clicks % 2 !== 0) {
            event.target.innerHTML = playerX;
        } else {
            event.target.innerHTML = playerO;
        }
    });

    const newGameButton = document.querySelector("#new-game-button");

    newGameButton.addEventListener("click", event => {
        let squares = document.querySelectorAll(".square");

        squares.forEach((square) => {
            square.innerHTML = "";
        });

    });








});
