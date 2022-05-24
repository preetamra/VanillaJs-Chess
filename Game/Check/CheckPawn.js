import { letters } from "../../assignment.js";
import { isTherePiece } from "../MoveHelper/MoveHelper.js";
import { Turn } from "../../assignment.js";

function checkpawnpos(from, to) {
  if (
    (Turn.turn && from.color == "white") ||
    (!Turn.turn && from.color == "black")
  ) {
    return false;
  }

  let isPiece = false;
  if (
    from.locnum == 6 &&
    from.color == "white" &&
    (to.locnum == from.locnum - 1 ||
      (to.locnum == from.locnum - 2 && from.loclet == to.loclet))
  ) {
    Turn.turn = !Turn.turn;
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
    Turn.turn = !Turn.turn;
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
      Turn.turn = !Turn.turn;
      return !isTherePiece(from.locnum + 1, letters.indexOf(from.loclet));
    }
    if (
      from.color == "white" &&
      from.loclet == to.loclet &&
      to.locnum < from.locnum
    ) {
      Turn.turn = !Turn.turn;
      return !isTherePiece(from.locnum - 1, letters.indexOf(from.loclet));
    }
  }
}

export default checkpawnpos;
