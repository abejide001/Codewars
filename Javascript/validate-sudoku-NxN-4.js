//https://www.codewars.com/kata/540afbe2dc9f615d5e000425

var Sudoku = function(data)
{
  var sudokuVal = function(length){
    if (length <= 0) { return 0; }
    else { return (length + sudokuVal(length - 1)); }
  }

  return {
    isValid: function() {

      var board = data
      var _grid = [];
      for (var i = 0; i < board.length; i++) {
        _grid.push([]);
      }

      for (var row = 0; row < board.length; row++) {

        var column = 0;

        if (board[row].reduce((a,b) => a+b, 0) !== sudokuVal(board.length)) { return false } //function(a,b) { return a + b; } //check rows

        //check columns
        for (var col = 0; col < board.length; col++){
          column = column + board[col][row];
          if(typeof(board[col][row]) === "boolean"){ return false }
          //push grid data
          gridRow = Math.floor( row / Math.sqrt(board.length) );
          gridCol = Math.floor( col / Math.sqrt(board.length) );
          gridIndex = gridRow * Math.sqrt(board.length) + gridCol;
          _grid[gridIndex].push(board[row][col]);

        }
        if (column !== sudokuVal(board.length)) { return false }

      }

      for (var grd = 0; grd < _grid.length; grd++) {
        if (_grid[grd].reduce((a,b) => a+b, 0) !== sudokuVal(board.length)) { return false }
      }

      return true
    }
  };
};
