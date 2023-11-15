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
  const n1 = 100; // 成分1の分子数
  const n2 = 200; // 成分2の分子数
  const n3 = 50; // 成分3の分子数

  // 各成分のエントロピー (J/mol*K)
  const entropy1 = 30; // 成分1のエントロピー
  const entropy2 = 40; // 成分2のエントロピー
  const entropy3 = 20; // 成分3のエントロピー

  // エントロピーの計算
  const totalMoles = n1 + n2 + n3;
  return (
    (n1 / totalMoles) * entropy1 +
    (n2 / totalMoles) * entropy2 +
    (n3 / totalMoles) * entropy3
  );
}

