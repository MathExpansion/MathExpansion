/*
Copyright 2023 MathExpansion

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
