"use strict";

let arr = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};
function getBestStudent(obj) {
  let avg = 0;
  let studentName="";
  for (let key in obj) {
    const res = obj[key].reduce((aggr, val) => aggr + val) / obj[key].length;
    if (res > avg) {
      avg = res;
      studentName=key;
    }
  }
  return studentName;
}

console.log(getBestStudent(arr));
