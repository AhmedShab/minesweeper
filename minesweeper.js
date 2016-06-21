document.addEventListener('DOMContentLoaded', startGame);

var board = {
  cells : [

  ]
};

function startGame () {
  var boardChildren = document.getElementsByClassName('board')[0].children;
  for (var i = 0; i < boardChildren.length; i++) {
    addListeners(boardChildren[i]);
    addCellToBoard(boardChildren[i]);
  }

  for (var j = 0; j < board.cells.length; j++) {
      board.cells[j].surroundingMines = countMines(board.cells[j]);
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

function getCol(ele) {
  var className = ele.classList;
  for (var i = 0; i < className.length; i++) {
    // console.log(className[i]);
    if (className[i].indexOf("col-") > -1) {
      // console.log(className[i]);
       return (className[i].split("col-").join(""));
      //  console.log(className[i].split("col-").join(""));
    }
  }

  // console.log(row[1]);
}

function addCellToBoard(ele) {
  var newCell = {};

  newCell.row = getRow(ele);
  newCell.col = getRow(ele);

  if(!ele.classList.contains("mine")){
    newCell.isMine = true;
  }
  else {
    newCell.isMine = false;
  }


  board.cells.push(newCell);


}

function countMines(cells) {

  var surroundingCells = getSurroundingCells(cells.row, cells.col);
  var count = 0;


  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++;
    }
  }

  return count;
}

function checkForWin() {
  var mines = document.getElementsByClassName('board')[0].children;
  // console.log(mines);
  // for (var i = 0; i < board.cells.length; i++) {
  //   if (board.cells[i].isMine && board.cells[i].isMarked){
  //
  //   }
  //   else {
  //     return;
  //   }
  //
  // }

  for (var j = 0; j < mines.length; j++) {
    if (mines[j].classList.contains('hidden')){
      return;
    }
  }

  alert("You won the game!!");

}

function showCell(event) {
  event.target.classList.remove('hidden');
  checkForWin();
}

function markCell(event) {
  event.preventDefault();
  event.target.classList.toggle('marked');
  event.target.classList.toggle('hidden');


  for (var i = 0; i < board.cells.length; i++) {
    if ( (board.cells[i].row === getRow(event.target)) &&
       (board.cells[i].col === getCol(event.target)) ) {
         board.cells[i].isMarked = true;
    }

  }

  checkForWin();
  // console.log(board);
}
