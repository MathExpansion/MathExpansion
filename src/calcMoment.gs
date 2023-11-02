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
function moment() {
  // 力の情報
  var force1 = 10; // 力1 (N)
  var force2 = 20; // 力2 (N)

  // 力の位置情報
  var position1 = 2; // 力1の位置 (m)
  var position2 = 5; // 力2の位置 (m)

  // モーメント計算
  var moment1 = force1 * position1;
  var moment2 = force2 * position2;

  // 総モーメント計算
  return moment1 + moment2;
}
