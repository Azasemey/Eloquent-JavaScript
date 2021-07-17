const isEven = (a) => {
  if (a === 0) return true;
  else if (a === 1 || a < 0) return false;
  else {
    console.log(a);
    return isEven(a - 2);
  }
};
console.log(isEven(10));
