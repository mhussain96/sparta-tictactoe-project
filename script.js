document.addEventListener("DOMContentLoaded", function () {

  let playerTurn = true;
  const winCombos = [ 
    [0, 1, 2],   // 0
    [3, 4, 5],   // 1
    [6, 7, 8],   // 2
    [0, 3, 6],   // 3
    [1, 4, 7],   // 4
    [2, 5, 8],   // 5
    [0, 4, 8],   // 6
    [6, 4, 2]    // 7
  ]  // array of arrays

  const squares = document.querySelectorAll('td'); // storing the array of td's in squares 
  // td represents the individual grid squares
  for (let i = 0; i < squares.length; i++) {  // for each square the for loop adds an event listener 
    squares[i].addEventListener("click", function(e) {

      if (playerTurn) { // e.target targets the square we clicked on 
        e.target.className = 'X'; 
        e.target.innerText = 'X';
        playerTurn = false; // when player1 fills box this statement allows player2 to fill box
      } else if (!playerTurn) {
        e.target.className = 'O';
        e.target.innerText = 'O';
        playerTurn = true;
      }
      for (let i = 0; i < winCombos.length; i++) { // for loop for winning combos
        if (squares[winCombos[i][0]].innerText == 'X' && // squares with the winning combination of i that is between 0 and 7 in our winCombos array
        squares[winCombos[i][1]].innerText == 'X' &&
        squares[winCombos[i][2]].innerText == 'X') {
        alert('X Wins!'); 
        } else if (squares[winCombos[i][0]].innerText == 'O' &&
        squares[winCombos[i][1]].innerText == 'O' &&
        squares[winCombos[i][2]].innerText == 'O') {
        alert('O Wins!')  
        }
      }
    })
  }
})