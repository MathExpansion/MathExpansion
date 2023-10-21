function piecewise_quadrature(n,k,stepSize,callbackFn) {
  let map = minute_interval_(n,stepSize,k).map(callbackFn);
  let reduce = map.reduce((previousValue,currentValue) => previousValue + currentValue);
  return reduce;
}

function minute_interval_(n,stepSize,k) {
    let arr = [n];
    for (var x = 0; x <= k; k++){
      arr.push( n + stepSize );
    }
    console.log (stepSize * arr.length); //代入してチェックする用の値
    return arr;
}
