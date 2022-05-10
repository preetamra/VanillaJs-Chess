import { pieceName, board, letters } from "../../assignment.js";
import render from "../Render/Render.js";
import { checkbishoppos } from "../Check/CheckBishop.js";
import { checkrockpos } from "../Check/CheckRock.js";

function isPosibleToMove(from, to, type) {
  if (from && to) {
    switch (type) {
      case pieceName[0]:
        return checkrockpos(from, to);
      case pieceName[1]:
        return;
      case pieceName[2]:
        return checkbishoppos(from, to);
      case pieceName[pieceName.length - 1]:
        return from.loclet == to.loclet;
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
