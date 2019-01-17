document.addEventListener("DOMContentLoaded", function () {

  let playerTurn = true;
  const player1 = 'X';
  const player2 = 'O';
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

  const squares = document.querySelectorAll('td');
  
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(e) {
      // document.getElementsByTagName()
      // console.log(e.target);

      if (playerTurn) {
        e.target.className = 'X';
        e.target.innerText = 'X';
        playerTurn = false; // when player1 fills box this statement allows player2 to fill box
      } else if (!playerTurn) {
        e.target.className = 'O';
        e.target.innerText = 'O';
        playerTurn = true;
      }
      for (let i = 0; i < winCombos.length; i++) { // for loop for winning combos
        if (squares[winCombos[i][0]].innerText == 'X' &&
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
  

  // PSEUDOCODE
  // 1. Get all td elements
  // const squares = document.getElementsByTagName("td");
  // // console.log(squares);

  // // 2. add clicks to each element
  // for (let i = 0; i < squares.length; i++) {

  //   squares[i].addEventListener("click", function (e) {
  //     // 3. when you click a square, fill with an X
  //     // 4. when you click the next square, fill with O      
  //     console.log(e.target)
  //   })
  // }

})