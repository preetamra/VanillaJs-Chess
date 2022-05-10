import { board, container, pieceName } from "../../assignment.js";

function render(board) {
  container.innerHTML = "";
  for (let j = 0; j < board.length; j++) {
    const tr = document.createElement("tr");
    for (let i = 0; i < board[j].length; i++) {
      const td = document.createElement("td");
      td.style.background = `${
        i % 2 == (j % 2 == 0) ? 0 : 1 ? "#eee" : "#000"
      }`;

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
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/32px-Chess_nlt45.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/32px-Chess_ndt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[2]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/32px-Chess_blt45.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/32px-Chess_bdt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[3]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/32px-Chess_qlt45.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/32px-Chess_qdt45.svg.png";
            td.appendChild(img);
          }
          break;
        case pieceName[4]:
          {
            const img = document.createElement("img");
            img.width = "30";
            img.src =
              board[j][i].color == "white"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/32px-Chess_klt45.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/32px-Chess_kdt45.svg.png";
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

export default render;
