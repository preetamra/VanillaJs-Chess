import { letters } from "../../assignment.js";
import { isTherePiece } from "../MoveHelper/MoveHelper.js";

function checkrockpos(from, to) {
  let isPiece = false;
  if (from.loclet == to.loclet) {
    if (from.locnum > to.locnum) {
      for (let i = from.locnum - 1; i >= to.locnum; i--) {
        if (isTherePiece(i, letters.indexOf(to.loclet)) ? true : false) {
          isPiece = true;
          break;
        }
      }
      return !isPiece;
    } else {
      for (let i = from.locnum + 1; i <= to.locnum; i++) {
        if (isTherePiece(i, letters.indexOf(to.loclet)) ? true : false) {
          isPiece = true;
          break;
        }
      }
      return !isPiece;
    }
  } else {
    if (letters.indexOf(from.loclet) > letters.indexOf(to.loclet)) {
      for (
        let i = letters.indexOf(to.loclet) - 1;
        i >= letters.indexOf(to.loclet);
        i--
      ) {
        if (isTherePiece(letters.indexOf(from.loclet) + 1, i) ? true : false) {
          isPiece = true;
          break;
        }
      }
      return !isPiece;
    } else {
      for (
        let i = letters.indexOf(to.loclet) + 1;
        i <= letters.indexOf(to.loclet);
        i++
      ) {
        if (isTherePiece(letters.indexOf(from.loclet), i)) {
          isPiece = true;
          break;
        }
      }
      return !isPiece;
    }
  }
}

export default checkrockpos;
