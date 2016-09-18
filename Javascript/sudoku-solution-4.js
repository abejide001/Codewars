//https://www.codewars.com/kata/529bf0e9bdf7657179000008 

function validSolution(board){
  var _grid = [];
  for (var i = 0; i < 9; i++) {
    _grid.push([]);
  }

  for (var row = 0; row < board.length; row++) {
    var column = 0;
     //check rows
    if (board[row].reduce((a,b) => a+b, 0) !== 45) { return false } //function(a,b) { return a + b; }

    //calc columns
    for (var col = 0; col < board.length; col++){
      column = column + board[col][row];

    //push grid data
    gridRow = Math.floor( row / 3 );
    gridCol = Math.floor( col / 3 );
    gridIndex = gridRow * 3 + gridCol;
    _grid[gridIndex].push(board[row][col]);

    }
    if (column !== 45) { return false } //check columns

  }
  //check grid data
  for (var grd = 0; grd < _grid.length; grd++) {
    if (_grid[grd].reduce((a,b) => a+b, 0) !== 45) { return false }
  }

  return true
}
