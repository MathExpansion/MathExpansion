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
function MULTINOMIAL() {
  const sum = args.reduce((acc, val) => {
    return acc + val;
  }, 0); // 引数の合計を計算

  if (sum <= 0) {
    return '#NUM!'; // エラー処理：合計が非正の場合
  }

  let result = fact(sum);

  for (let i = 0; i < args.length; i++) {
    if (args[i] <= 0) {
      return '#NUM!'; // エラー処理：非正の引数がある場合
    }
    result /= fact(args[i]);
  }

  return result;
}
