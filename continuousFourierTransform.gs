function continuousDFT(sampleRate) {
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var numRows = values.length;

  // 新しいシートを作成して結果を保存
  var outputSheet = spreadsheet.insertSheet("Continuous_Fourier_Result");
  outputSheet.appendRow(["Frequency", "Amplitude", "Phase"]);

  var sampleRate = numRows;

  for (var k = 0; k < numRows; k++) {
    // フーリエ変換を計算
    var frequency = k * sampleRate / numRows;
    var realPart = 0;
    var imagPart = 0;

    for (var n = 0; n < numRows; n++) {
      var angle = (2 * Math.PI * k * n) / numRows;
      realPart += values[n][0] * Math.cos(angle);
      imagPart -= values[n][0] * Math.sin(angle);
    }

    // アンプリチュードと位相を計算
    //var amplitude = Math.sqrt(realPart * realPart + imagPart * imagPart);
    var amplitude = Math.hypot(realPart,imagPart);
    var phase = Math.atan2(imagPart, realPart);

    // 結果を新しいシートに保存
    outputSheet.appendRow([frequency, amplitude, phase]);
  }
}
