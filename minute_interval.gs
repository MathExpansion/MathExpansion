function minute_interval(n,stepSize,k) {
  const arr = [n];
  for (var x = 0; x <= k; k++){
    arr.push( n + stepSize );
  }
  return stepSize * k //代入してチェックする用の値
}
