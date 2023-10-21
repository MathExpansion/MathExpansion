function Piecewise_quadrature(n,k,stepSize,callbackFn) {
    function minute_interval_(n,stepSize,k) {
    const arr = [n];
    for (var x = 0; x <= k; k++){
      arr.push( n + stepSize );
    }
    console.log (stepSize * arr.length); //代入してチェックする用の値
    return arr;
  }

  function mapping_() {
    const map = minute_interval_.map(callbackFn);
    return map;
  }

  function reduce_() {
    const reduce = mapping_.reduce((previousValue,currentValue) => previousValue + currentValue);
    return reduce;
  }
}
