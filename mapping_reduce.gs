function mapping() {
  const map = arr.map(callbackFn);
  return map;
}

function reduce() {
  const reduce = map.reduce((previousValue,currentValue) => previousValue + currentValue);
  return reduce;
}