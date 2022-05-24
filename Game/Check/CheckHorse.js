import { letters } from "../../assignment.js";
import { isTherePiece } from "../MoveHelper/MoveHelper.js";
import { Turn } from "../../assignment.js";

function checkhorsepos(from, to) {
  if (
    (Turn.turn && from.color == "white") ||
    (!Turn.turn && from.color == "black")
  ) {
    return false;
  }

  if (String.fromCharCode(from.loclet.charCodeAt(0) - 2) == to.loclet) {
    if (from.locnum - 1 == to.locnum || from.locnum + 1 == to.locnum) {
      Turn.turn = !Turn.turn;

      return !!!to.piece;
    }
  } else if (String.fromCharCode(from.loclet.charCodeAt(0) - 1) == to.loclet) {
    if (from.locnum - 2 == to.locnum || from.locnum + 2 == to.locnum) {
      Turn.turn = !Turn.turn;

      return !!!to.piece;
    }
  } else if (String.fromCharCode(from.loclet.charCodeAt(0) + 1) == to.loclet) {
    if (from.locnum - 2 == to.locnum || from.locnum + 2 == to.locnum) {
      Turn.turn = !Turn.turn;

      return !!!to.piece;
    }
  } else if (String.fromCharCode(from.loclet.charCodeAt(0) + 2) == to.loclet) {
    if (from.locnum - 1 == to.locnum || from.locnum + 1 == to.locnum) {
      Turn.turn = !Turn.turn;

      return !!!to.piece;
    }
  }
}

export default checkhorsepos;
