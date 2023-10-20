var numRows = FT_reference(numRows);
var frequency = k * sampleRate / numRows;

function continuousFT(sampleRate,FT,FFT) {
  function continuousFT(sampleRate,FFT) {
  
  // 新しいシートを作成して結果を保存
  var outputSheet = spreadsheet.insertSheet("Continuous_FFT_Result");
  outputSheet.appendRow(["Frequency", "Amplitude", "Phase"]);

    for (var k = 0; k < numRows; k++) {
      
      var fftData = fft(values, k); // データをFFT(高速フーリエ変換)にかける

      // アンプリチュードと位相を計算
      //var amplitude = Math.sqrt(fftData.real * fftData.real + fftData.imag * fftData.imag);
      var amplitude = Math.hypot(fftData.real,fftData.imag);
      var phase = Math.atan2(fftData.imag, fftData.real);

      // 結果を新しいシートに保存
      continuousFT(FFT(outputSheet)).appendRow([frequency, amplitude, phase]);
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
  function continuousFT(sampleRate,FT){
    // 新しいシートを作成して結果を保存
    var outputSheet = spreadsheet.insertSheet("Continuous_Fourier_Result");
    outputSheet.appendRow(["Frequency", "Amplitude", "Phase"]);

    for (var k = 0; k < numRows; k++) {
      // フーリエ変換を計算
      var realPart = 0;
      var imagPart = 0;

      for (var n = 0; n < numRows; n++) {
        var angle = (2 * Math.PI * k * n) / numRows;
        realPart += values[n][0] * Math.cos(angle);
        imagPart -= values[n][0] * Math.sin(angle);
      }

      
      var amplitude = Math.hypot(realPart,imagPart); // アンプリチュードと位相を計算
      //var amplitude = Math.sqrt(realPart * realPart + imagPart * imagPart);
      var phase = Math.atan2(imagPart, realPart);
      continuousFT(FT(outputSheet)).appendRow([frequency, amplitude, phase]); // 結果を新しいシートに保存
    }
  }
}