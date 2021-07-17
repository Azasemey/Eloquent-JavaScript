function range(start, end, step = 1) {
  const result = [];
  while (start <= end) {
    console.log(start);
    result.push(start);
    start += step;
  }
  return result;
}
console.log(range(1, 10, 5));

function sum(arr) {
  let result = 0;
  for (let entry of arr) {
    result += entry;
  }
  return result;
}
console.log(sum(range(1, 10)));
