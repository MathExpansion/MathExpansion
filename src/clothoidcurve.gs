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
function clothoidCurve(a,b,stepSize) {

  var data = [['x', 'y']];

  for (var t = 0; t <= a * Math.sqrt(b); t += stepSize) {
    var x = Math.cos((a * t * t) / 2);
    var y = Math.sin((a * t * t) / 2);
    data.push([x, y]);
  }

  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}
