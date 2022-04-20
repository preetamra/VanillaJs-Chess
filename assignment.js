const container = document.getElementById("container");

const pieceName = ["rock", "horse", "bishop", "queen", "king", "pawn"];

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let board = [];
for (let i = 0; i < 8; i++) {
  let temp = [];
  for (let j = 0; j < letters.length; j++) {
    temp.push({ locnum: i, loclet: letters[j], piece: null });
  }
  board.push(temp);
}

initialPieces(board);

console.log(board);

let text = "";

for (let j = 0; j < board.length; j++) {
  text += "<tr>";
  for (let i = 0; i < board[j].length; i++) {
    if (board[j][i].piece == pieceName[0]) {
      text += `<td style="background:${
        i % 2 == (j % 2 == 0) ? 0 : 1 ? "#eee" : "#000"
      }" onclick="displaypos(${j},${i})"><img width="30" alt="Chess rdt45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/32px-Chess_rdt45.svg.png"></td>`;
    } else {
      text += `<td style="background:${
        i % 2 == (j % 2 == 0) ? 0 : 1 ? "#eee" : "#000"
      }" onclick="displaypos(${j},${i})"></td>`;
    }
  }
  text += "</tr>\n";
}

container.innerHTML = text;

function initialPieces(board) {
  let right = 7;
  let left = 0;
  let row = 0;
  let i = 0;
  while (right > 4 && left < 3 && i < board.length) {
    board[row == 0 ? 0 : 7][right].piece = pieceName[i];
    board[row == 0 ? 0 : 7][left].piece = pieceName[i];
    board[row == 0 ? 1 : 6][right].piece = pieceName[pieceName.length - 1];
    board[row == 0 ? 1 : 6][left].piece = pieceName[pieceName.length - 1];
    right--;
    left++;
    i++;
    if (!(right > 4 && left < 3) && row == 0) {
      right = 7;
      left = 0;
      row = 7;
      i = 0;
    }
  }
  board[0][right].piece = pieceName[i];
  board[0][left].piece = pieceName[i + 1];
  board[7][right].piece = pieceName[i];
  board[7][left].piece = pieceName[i + 1];
  board[1][right].piece = pieceName[pieceName.length - 1];
  board[1][left].piece = pieceName[pieceName.length - 1];
  board[6][right].piece = pieceName[pieceName.length - 1];
  board[6][left].piece = pieceName[pieceName.length - 1];
}

function displaypos(j, i) {
  console.log(board[j][i]);
}
