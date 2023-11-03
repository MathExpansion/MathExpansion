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
function FFT(sampleRate) {
  var outputSheet = spreadsheet.insertSheet("Continuous_FFT_Result").appendrow(); // 新しいシートを作成して結果を保存
    for (var k = 0; k < numRows; k++) {
      var fftData = fft(values, k); // データをFFT(高速フーリエ変換)にかける

      var x = fftData.real;
      var y = fftData.imag;
      
      outputSheet([frequency, amplitude, phase]); // 結果を新しいシートに保存
    }
  }

function continuousFT(sampleRate) {
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