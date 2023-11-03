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
function mixtureEntropy() {
  // 各成分の分子数
  var n1 = 100; // 成分1の分子数
  var n2 = 200; // 成分2の分子数
  var n3 = 50;  // 成分3の分子数

  // 各成分のエントロピー (J/mol*K)
  var entropy1 = 30; // 成分1のエントロピー
  var entropy2 = 40; // 成分2のエントロピー
  var entropy3 = 20; // 成分3のエントロピー

  // エントロピーの計算
  var totalMoles = n1 + n2 + n3;
  return ((n1 / totalMoles) * entropy1 + (n2 / totalMoles) * entropy2 + (n3 / totalMoles) * entropy3);
}

// 混合物内の成分ごとの情報を指定
var components = [
  { moles: 0.2, entropy: 100 }, // 成分1
  { moles: 0.3, entropy: 150 }, // 成分2
  { moles: 0.5, entropy: 200 }, // 成分3
];

function mixture_Entropy_array() {

  // 混合物全体のエントロピーを計算
  var totalEntropy = 0;

  for (var i = 0; i < components.length; i++) {
    var moles = components[i].moles;
    var entropy = components[i].entropy;

    // 各成分のエントロピーの重みつき合計を計算
    totalEntropy += moles * entropy;
  }
return totalEntropy;
}
