import checkbishoppos from "../Check/CheckBishop.js";
import checkhorsepos from "../Check/CheckHorse.js";
import checkrockpos from "../Check/CheckRock.js";
import { Turn } from "../../assignment.js";

function checkqueenpos(from, to) {
  if (
    (Turn.turn && from.color == "white") ||
    (!Turn.turn && from.color == "black")
  ) {
    return false;
  }
  let rock;
  if (from.loclet == to.loclet) {
    rock = checkrockpos(from, to);
  } else if (from.locnum == to.locnum) {
    rock = checkrockpos(from, to);
  }

  return (
    checkbishoppos(from, to) || checkhorsepos(from, to) || rock || temp(Turn)
  );
}

function temp(Turn) {
  Turn.turn = !Turn.turn;
}

export default checkqueenpos;
