import { letters } from "../../assignment.js";
import { isTherePiece } from "../MoveHelper/MoveHelper.js";

function checkhorsepos(from, to) {
  if (String.fromCharCode(from.loclet.charCodeAt(0) - 2) == to.loclet) {
    if (from.locnum - 1 == to.locnum || from.locnum + 1 == to.locnum) {
      return !!!to.piece;
    }
  } else if (String.fromCharCode(from.loclet.charCodeAt(0) - 1) == to.loclet) {
    if (from.locnum - 2 == to.locnum || from.locnum + 2 == to.locnum) {
      return !!!to.piece;
    }
  } else if (String.fromCharCode(from.loclet.charCodeAt(0) + 1) == to.loclet) {
    if (from.locnum - 2 == to.locnum || from.locnum + 2 == to.locnum) {
      return !!!to.piece;
    }
  } else if (String.fromCharCode(from.loclet.charCodeAt(0) + 2) == to.loclet) {
    if (from.locnum - 1 == to.locnum || from.locnum + 1 == to.locnum) {
      return !!!to.piece;
    }
  }
}

export default checkhorsepos;
