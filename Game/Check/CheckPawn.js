import { letters } from "../../assignment.js";
import { isTherePiece } from "../MoveHelper/MoveHelper.js";

function checkpawnpos(from, to) {
  let isPiece = false;
  if (
    from.locnum == 6 &&
    from.color == "white" &&
    (to.locnum == from.locnum - 1 ||
      (to.locnum == from.locnum - 2 && from.loclet == to.loclet))
  ) {
    return !(
      isTherePiece(from.locnum - 1, letters.indexOf(from.loclet)) &&
      isTherePiece(from.locnum - 2, letters.indexOf(from.loclet))
    );
  } else if (
    from.locnum == 1 &&
    from.color == "black" &&
    (to.locnum == from.locnum + 1 ||
      (to.locnum == from.locnum + 2 && from.loclet == to.loclet))
  ) {
    return !(
      isTherePiece(from.locnum + 1, letters.indexOf(from.loclet)) &&
      isTherePiece(from.locnum + 2, letters.indexOf(from.loclet))
    );
  } else {
    if (
      from.color == "black" &&
      from.loclet == to.loclet &&
      to.locnum > from.locnum
    ) {
      return !isTherePiece(from.locnum + 1, letters.indexOf(from.loclet));
    }
    if (
      from.color == "white" &&
      from.loclet == to.loclet &&
      to.locnum < from.locnum
    ) {
      return !isTherePiece(from.locnum - 1, letters.indexOf(from.loclet));
    }
  }
}

export default checkpawnpos;
