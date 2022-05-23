import { pieceName, board, letters } from "../../assignment.js";
import render from "../Render/Render.js";
import checkbishoppos from "../Check/CheckBishop.js";
import checkrockpos from "../Check/CheckRock.js";
import checkpawnpos from "../Check/CheckPawn.js";
import checkhorsepos from "../Check/CheckHorse.js";
import checkqueenpos from "../Check/CheckQueen.js";

function isPosibleToMove(from, to, type) {
  if (from && to) {
    switch (type) {
      case pieceName[0]:
        return checkrockpos(from, to);
      case pieceName[1]:
        return checkhorsepos(from, to);
      case pieceName[2]:
        return checkbishoppos(from, to);
      case pieceName[3]:
        return checkqueenpos(from, to);
      case pieceName[pieceName.length - 1]:
        return checkpawnpos(from, to);
    }
  }
}

function isTherePiece(a, b) {
  try {
    return !!board[a][b].piece;
  } catch (e) {
    return false;
  }
}

function swap(from, to) {
  let temp = { ...from };
  from.piece = to.piece;
  from.color = to.color;
  to.piece = temp.piece;
  to.color = temp.color;
  render(board);
}

export { isPosibleToMove, isTherePiece, swap };
