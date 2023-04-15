// export function getNextAge(age) {
//     return Number.parseInt(age,10)+1 ;

// }

export function getNextAge(age) {
  if (age == "") {
    return 0;
  }
  return parseInt(age) + 1;
}
