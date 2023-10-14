function continuousFastFourierTransform() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var numRows = values.length;

  // 新しいシートを作成して結果を保存
  var outputSheet = spreadsheet.insertSheet("Continuous_FFT_Result");
  outputSheet.appendRow(["Frequency", "Amplitude", "Phase"]);

  // サンプリング周波数
  //var sampleRate = 1.0; // サンプリング周波数を設定（適切な値に変更）
  var sampleRate = numRows;

  for (var k = 0; k < numRows; k++) {
    // FFTを計算
    var frequency = k * sampleRate / numRows;

    // データをFFTにかける
    var fftData = fft(values, k);

    // アンプリチュードと位相を計算
    //var amplitude = Math.sqrt(fftData.real * fftData.real + fftData.imag * fftData.imag);
    var amplitude = Math.hypot(fftData.real,fftData.imag);
    var phase = Math.atan2(fftData.imag, fftData.real);

    // 結果を新しいシートに保存
    outputSheet.appendRow([frequency, amplitude, phase]);
  }
}

// 高速フーリエ変換を実行する関数
function fft(data, k) {
  var n = data.length;
  var realPart = 0;
  var imagPart = 0;

  for (var t = 0; t < n; t++) {
    var angle = (2 * Math.PI * k * t) / n;
    realPart += data[t][0] * Math.cos(angle);
    imagPart -= data[t][0] * Math.sin(angle);
  }

  return { real: realPart, imag: imagPart };
}