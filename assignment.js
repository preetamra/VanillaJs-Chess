const container = document.getElementById("container");
const Chess = document.getElementsByClassName("chess-board")[0];

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

initialPieces(board);

function render(board) {
  let text = "";
  for (let j = 0; j < board.length; j++) {
    const tr = document.createElement("tr");
    for (let i = 0; i < board[j].length; i++) {
      const td = document.createElement("td");
      td.style.background = `${
        i % 2 == (j % 2 == 0) ? 0 : 1 ? "#eee" : "#000"
      }`;
      td.onclick = displaypos.bind(this, j, i);

      switch (board[j][i].piece) {
        case pieceName[0]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chess_tile_rl-whitebg.svg/64px-Chess_tile_rl-whitebg.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/32px-Chess_rdt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[1]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chess_tile_rl-whitebg.svg/64px-Chess_tile_rl-whitebg.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/32px-Chess_rdt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[2]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chess_tile_rl-whitebg.svg/64px-Chess_tile_rl-whitebg.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/32px-Chess_rdt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[3]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chess_tile_rl-whitebg.svg/64px-Chess_tile_rl-whitebg.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/32px-Chess_rdt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[4]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chess_tile_rl-whitebg.svg/64px-Chess_tile_rl-whitebg.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/32px-Chess_rdt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[5]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/32px-Chess_plt45.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/32px-Chess_pdt45.svg.png";
            td.appendChild(img);
          }
          break;
      }
      board[j][i].ele = td;
      tr.appendChild(td);
    }
    container.appendChild(tr);
  }
}

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

function displaypos(j, i) {}
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
    console.log(isPosibleToMove(from, to, from.piece));
  }
});

function isPosibleToMove(from, to,type) {
  
  if (from && to) {
    if (
      (from.loclet == to.loclet && from.locnum + 1 == to.locnum) ||
      from.locnum - 1 == to.locnum
    ) {
      return true;
    } else {
      return false;
    }
  }
}
