function reverseString(string) {
  let stringArr = string.split("");
  const reversedArr = stringArr.reverse();
  const reversedString = reversedArr.join("");

  if (string.length < 1 ) {
    return "String too short";
  }
  if (string.length > 10) {
    return "String too big";
  }
  
  return reversedString;
}

module.exports = reverseString;