import { letters } from "../../assignment.js";
import { isTherePiece } from "../MoveHelper/MoveHelper.js";

function checkbishoppos(from, to) {
  let a = { ...from };
  let b = { ...from };
  let c = { ...from };
  let d = { ...from };
  for (const item of letters) {
    a.loclet = String.fromCharCode(a.loclet.charCodeAt(0) - 1);
    a.locnum = a.locnum - 1;
    b.loclet = String.fromCharCode(b.loclet.charCodeAt(0) + 1);
    b.locnum = b.locnum - 1;
    c.loclet = String.fromCharCode(c.loclet.charCodeAt(0) - 1);
    c.locnum = c.locnum + 1;
    d.loclet = String.fromCharCode(d.loclet.charCodeAt(0) + 1);
    d.locnum = d.locnum + 1;
    if (
      (to.locnum == a.locnum ||
        to.locnum == b.locnum ||
        to.locnum == c.locnum ||
        to.locnum == d.locnum) &&
      (to.loclet == a.loclet ||
        to.loclet == b.loclet ||
        to.loclet == c.loclet ||
        to.loclet == d.loclet)
    ) {
      let isPiece = false;
      let temp = { ...from };
      if (to.loclet == a.loclet) {
        for (const item of letters) {
          temp.loclet = String.fromCharCode(temp.loclet.charCodeAt(0) - 1);
          temp.locnum = temp.locnum - 1;
          if (temp.loclet == to.loclet && temp.locnum == temp.locnum) {
            break;
          }
          if (
            isTherePiece(temp.locnum, letters.indexOf(temp.loclet))
              ? true
              : false
          ) {
            isPiece = true;
          }
        }
      } else if (to.loclet == b.loclet) {
        for (const item of letters) {
          temp.loclet = String.fromCharCode(temp.loclet.charCodeAt(0) + 1);
          temp.locnum = temp.locnum - 1;
          if (temp.loclet == to.loclet && temp.locnum == temp.locnum) {
            break;
          }
          if (
            isTherePiece(temp.locnum, letters.indexOf(temp.loclet))
              ? true
              : false
          ) {
            isPiece = true;
          }
        }
      } else if (to.loclet == c.loclet) {
        for (const item of letters) {
          temp.loclet = String.fromCharCode(temp.loclet.charCodeAt(0) - 1);
          temp.locnum = temp.locnum + 1;
          if (temp.loclet == to.loclet && temp.locnum == temp.locnum) {
            break;
          }
          if (
            isTherePiece(temp.locnum, letters.indexOf(temp.loclet))
              ? true
              : false
          ) {
            isPiece = true;
          }
        }
      } else {
        for (const item of letters) {
          temp.loclet = String.fromCharCode(temp.loclet.charCodeAt(0) + 1);
          temp.locnum = temp.locnum + 1;
          if (temp.loclet == to.loclet && temp.locnum == temp.locnum) {
            break;
          }
          if (
            isTherePiece(temp.locnum, letters.indexOf(temp.loclet))
              ? true
              : false
          ) {
            isPiece = true;
          }
        }
      }
      return !isPiece;
    }
  }
}

export { checkbishoppos };
