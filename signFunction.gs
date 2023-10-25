function signFunction(number) {
  if (number > 0) {
    return 1;
  } else if (number < 0) {
    return -1;
  } else {
    return 0;
  }
}

function testSignFunction() {
  // テスト用の数値を指定して符号関数をテスト
  var testNumber1 = 5;
  var testNumber2 = -3;
  var testNumber3 = 0;
  
  var result1 = signFunction(testNumber1);
  var result2 = signFunction(testNumber2);
  var result3 = signFunction(testNumber3);
  
  // 結果をログに出力
  Logger.log(testNumber1 + " の符号関数の結果: " + result1);
  Logger.log(testNumber2 + " の符号関数の結果: " + result2);
  Logger.log(testNumber3 + " の符号関数の結果: " + result3);
}
