// 関数
function func(x) {
  return Math.exp(x); // => x**2
}

// 積分
function integral(start, end) {
  let r = 0.0;
  let dx = 0.00001; // 間隔を小さくすると精度が向上する
  if (start > end) {
    [start, end] = [end, start];
  }
  for (var x = start; x < end; x += dx) {
    r += func(x) * dx;
  }
  return r;
}