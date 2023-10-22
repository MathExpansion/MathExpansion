function func(x) {
  return Math.exp(x);
}

function integral(start, end, r) {
  let dx = 0.00001; 
  if (start > end) {
    [start, end] = [end, start];
  }
  for (var x = start; x < end; x += dx) {
    r += func(x) * dx;
  }
  return r;
}