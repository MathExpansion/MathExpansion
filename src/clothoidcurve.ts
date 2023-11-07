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
function clothoidCurve(a: number, b: number, stepSize: number) {
  let data = [[, ]];

  for (let t = 0; t <= a * Math.sqrt(b); t += stepSize) {
    let x = Math.cos((a * t * t) / 2);
    let y = Math.sin((a * t * t) / 2);
    data.push([, ]);
  }

  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}
