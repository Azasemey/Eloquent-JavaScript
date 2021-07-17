function reverseArray(arr) {
  const newArr = [];
  arr.forEach((v) => newArr.unshift(v));
  return newArr;
}
