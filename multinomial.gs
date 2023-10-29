function MULTINOMIAL() {
  var args = Array.prototype.slice.call(arguments); // 引数を配列に変換
  var sum = args.reduce(function(acc, val) {
    return acc + val;
  }, 0); // 引数の合計を計算

  if (sum <= 0) {
    return "#NUM!"; // エラー処理：合計が非正の場合
  }

  var result = fact(sum);

  for (var i = 0; i < args.length; i++) {
    if (args[i] <= 0) {
      return "#NUM!"; // エラー処理：非正の引数がある場合
    }
    result /= fact(args[i]);
  }

  return result;
}