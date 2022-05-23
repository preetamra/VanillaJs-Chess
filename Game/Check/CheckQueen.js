import checkbishoppos from "../Check/CheckBishop.js";
import checkhorsepos from "../Check/CheckHorse.js";
import checkrockpos from "../Check/CheckRock.js";

function checkqueenpos(from, to) {
  let rock;
  if (from.loclet == to.loclet) {
    rock = checkrockpos(from, to);
  } else if (from.locnum == to.locnum) {
    rock = checkrockpos(from, to);
  }

  return checkbishoppos(from, to) || checkhorsepos(from, to) || rock;
}

export default checkqueenpos;
