document.addEventListener('DOMContentLoaded', startGame);

function startGame () {
  var board = document.getElementsByClassName('board')[0].children;
  for (var i = 0; i < board.length; i++) {
    addListeners(board[i]);
  }
}

function addListeners(elem) {
  elem.addEventListener('click', showCell);
}

function showCell(event) {
  event.target.classList.remove('hidden');
}
