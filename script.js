document.addEventListener("DOMContentLoaded", function () {

  let playerTurn = true;
  const player1 = 'X';
  const player2 = 'O';
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

  const squares = document.querySelectorAll('td');

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(e) {
      // document.getElementsByTagName()
      // console.log(e.target);
      e.target.className = "X";
      e.target.innerText = 'X';

      if (playerTurn) {
        e.target.className = 'O';
        e.target.innerText = 'O';
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