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

const vectors = [
  { force: 0.2, position: 100 }, // 成分1
  { force: 0.3, position: 150 }, // 成分2
  { force: 0.5, position: 200 }, // 成分3
];

function moment() {
  let totalmoment = 0;
  for (let i = 0; i < vectors.length; i++) {
    let force = vectors[i].force;
    let position = vectors[i].position;

    // 各ベクトルの重みつき合計(つまりモーメント)を計算
    totalmoment += force * position;
  }
  return totalmoment;
}
