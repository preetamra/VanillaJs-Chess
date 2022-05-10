import { letters } from "../../assignment.js";
import { isTherePiece } from "../MoveHelper/MoveHelper.js";

function checkrockpos(from, to) {
  let isPiece = false;
  if (from.loclet == to.loclet) {
    if (from.locnum > to.locnum) {
      for (let i = from.locnum - 1; i >= 0; i--) {
        if (isTherePiece(i, letters.indexOf(to.loclet)) ? true : false) {
          isPiece = true;
          break;
        }
        return !isPiece;
      }
    } else {
      for (let i = from.locnum + 1; i <= to.locnum; i++) {
        if (isTherePiece(i, letters.indexOf(to.loclet)) ? true : false) {
          isPiece = true;
          break;
        }
        return !isPiece;
      }
    }
  }
}

export { checkrockpos };
