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

const appendrow = appendRow(['Frequency', 'Amplitude', 'Phase']);
const amplitude = Math.hypot(x, y);
//var amplitude = Math.sqrt(fftData.real * fftData.real + fftData.imag * fftData.imag);
const phase = Math.atan2(y, x);

function FFT(sampleRate: number) {
  const outputSheet = spreadsheet
    .insertSheet('Continuous_FFT_Result')
    .appendrow(); // 新しいシートを作成して結果を保存
  for (let k = 0; k < numRows; k++) {
    const fftData = fft(values, k); // データをFFT(高速フーリエ変換)にかける
    const frequency = (k * sampleRate) / numRows;
    const x = fftData.real;
    const y = fftData.imag;
    
    outputSheet([frequency, amplitude, phase]); // 結果を新しいシートに保存
  }
}

function continuousFT(sampleRate: number) {
  const outputSheet = spreadsheet
    .insertSheet('Continuous_Fourier_Result')
    .appendrow();

  for (let k = 0; k < numRows; k++) {
    // フーリエ変換を計算
    let realPart = 0;
    let imagPart = 0;

    for (let n = 0; n < numRows; n++) {
      const angle = (2 * Math.PI * k * n) / numRows;
      realPart += values[n][0] * Math.cos(angle);
      imagPart -= values[n][0] * Math.sin(angle);
    }

    const x = realPart;
    const y = imagPart;
    const frequency = (k * sampleRate) / numRows;
    outputSheet([frequency, amplitude, phase]);
  }
}
