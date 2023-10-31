function continuousFFT(sampleRate) {
  
  // 新しいシートを作成して結果を保存
  var outputSheet = spreadsheet.insertSheet("Continuous_FFT_Result");
  outputSheet.appendRow(["Frequency", "Amplitude", "Phase"]);

  var numRows = numRows;

  for (var k = 0; k < numRows; k++) {
    // FFTを計算
    var frequency = k * sampleRate / numRows;

    // データをFFT(高速フーリエ変換)にかける
    var fftData = fft(values, k);

    // アンプリチュードと位相を計算
    //var amplitude = Math.sqrt(fftData.real * fftData.real + fftData.imag * fftData.imag);
    var amplitude = Math.hypot(fftData.real,fftData.imag);
    var phase = Math.atan2(fftData.imag, fftData.real);

    // 結果を新しいシートに保存
    continuousFFT(outputSheet).appendRow([frequency, amplitude, phase]);
  }
}