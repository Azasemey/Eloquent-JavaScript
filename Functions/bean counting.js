function countChar(str, char) {
  let sumB = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) sumB += 1;
  }
  return sumB;
}
console.log(countChar("BumBleBee", "B"));
