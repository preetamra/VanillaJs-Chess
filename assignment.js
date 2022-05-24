const container = document.getElementById("container");
const Chess = document.getElementsByClassName("chess-board")[0];

import render from "./Game/Render/Render.js";
import { isPosibleToMove, swap } from "./Game/MoveHelper/MoveHelper.js";

const pieceName = ["rock", "horse", "bishop", "queen", "king", "pawn"];

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let board = [];
for (let i = 0; i < 8; i++) {
  let temp = [];
  for (let j = 0; j < letters.length; j++) {
    temp.push({
      locnum: i,
      loclet: letters[j],
      piece: null,
      color: null,
      ele: null,
    });
  }
  board.push(temp);
}

let Turn = { turn: false };

initialPieces(board);

console.log(board);
render(board);

//initial chess piece placements
function initialPieces(board) {
  let right = 7;
  let left = 0;
  let row = 0;
  let i = 0;

  while (right >= 4 && left <= 3 && i < board.length) {
    //this code is to place special pieces
    board[row][right].piece = i == 3 ? pieceName[i + 1] : pieceName[i];
    board[row][right].color = row == 0 ? "black" : "white";
    board[row][left].piece = pieceName[i];
    board[row][left].color = row == 0 ? "black" : "white";
    //this code is to place pawns
    board[row == 0 ? 1 : 6][right].piece = pieceName[pieceName.length - 1];
    board[row == 0 ? 1 : 6][right].color = row == 0 ? "black" : "white";
    board[row == 0 ? 1 : 6][left].piece = pieceName[pieceName.length - 1];
    board[row == 0 ? 1 : 6][left].color = row == 0 ? "black" : "white";
    right--;
    left++;
    i++;
    if (!(right > 3 && left < 4) && row == 0) {
      right = 7;
      left = 0;
      row = 7;
      i = 0;
    }
  }
}

let from, to;
let type = true;
Chess.addEventListener("click", (e) => {
  if (type) {
    let td = e.target.closest("td");
    let data;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j].ele == td) {
          data = board[i][j];
          break;
        }
      }
    }
    type = false;
    from = data;
  } else {
    let td = e.target.closest("td");
    let data;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j].ele == td) {
          data = board[i][j];
          break;
        }
      }
    }
    type = true;
    to = data;
    isPosibleToMove(from, to, from.piece) && swap(from, to);
  }
});

export { board, letters, pieceName, container, Turn };
