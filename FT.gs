function FFT(sampleRate) {
  // 新しいシートを作成して結果を保存
  var outputSheet = spreadsheet.insertSheet("Continuous_FFT_Result").appendrow();
    for (var k = 0; k < numRows; k++) {
      var fftData = fft(values, k); // データをFFT(高速フーリエ変換)にかける

      var x = fftData.real;
      var y = fftData.imag;
      
      // 結果を新しいシートに保存
      outputSheet([frequency, amplitude, phase]);
    }
  }

function continuousFT(sampleRate) {
    // 新しいシートを作成して結果を保存
    var outputSheet = spreadsheet.insertSheet("Continuous_Fourier_Result").appendrow();

    for (var k = 0; k < numRows; k++) {
      // フーリエ変換を計算
      var realPart = 0;
      var imagPart = 0;

      for (var n = 0; n < numRows; n++) {
        var angle = (2 * Math.PI * k * n) / numRows;
        realPart += values[n][0] * Math.cos(angle);
        imagPart -= values[n][0] * Math.sin(angle);
      }

      var x = realPart;
      var y = imagPart;
      outputSheet([frequency, amplitude, phase]);
    }
  }