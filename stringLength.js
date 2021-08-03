function stringLength(string) {
  if (string.length < 1 ) {
    return "String too short";
  }
  if (string.length > 10) {
    return "String too big";
  }
  return string.length;
}


//console.log(stringLength("Hello"));
module.exports = stringLength;