document.addEventListener('DOMContentLoaded', startGame);

var board = {
  cells : [

  ]
};

function startGame () {
  var board = document.getElementsByClassName('board')[0].children;
  for (var i = 0; i < board.length; i++) {
    addListeners(board[i]);
    getRow(board[i]);
  }
}

function addListeners(elem) {
  elem.addEventListener('click', showCell);
  elem.addEventListener('contextmenu', markCell);
}

function getRow(ele) {
  var className = ele.classList;
  for (var i = 0; i < className.length; i++) {
    // console.log(className[i]);
    if (className[i].indexOf("row-") > -1) {
      // console.log(className[i]);
       return (className[i].split("row-").join(""));
    }
  }

  // console.log(row[1]);
}

function showCell(event) {
  event.target.classList.remove('hidden');
}

function markCell(event) {
  event.preventDefault();
  event.target.classList.toggle('marked');
}
