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
function rungeKuttaMethod(f, y0, t0, tn, h) {
  let t = t0;
  let y = y0;

  const data = [];
  data.push([t, y]);

  while (t < tn) {
    const k1 = h * f(t, y);
    const k2 = h * f(t + h / 2, y + k1 / 2);
    const k3 = h * f(t + h / 2, y + k2 / 2);
    const k4 = h * f(t + h, y + k3);

    y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    t = t + h;

    data.push([t, y]);
  }
  return data;
}
