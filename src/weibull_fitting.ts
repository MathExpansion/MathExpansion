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

function weibull_fitting() {
  const sheetrange = sheet.getActiveRange();
  const data = sheetrange.getValues();

  const sort = Array.from(data).sort(order);
  sheetrange.setValues(sort);

  function order(numbers: number[]): number[] {
    return numbers.slice().sort(data);
  }

  function order1(val1: number, val2: number) {
    if (val1 > val2) {
      return 1; //val1>val2の場合、val2をval1の前に配置
    } else if (val1 < val2) {
      return -1; //val1<val2の場合、val2をval1の後に配置
    } else {
      return 0; //配置変更なし
    }
  }

  const n = sheetrange.length;
  if (n > 30) {
    const i_03 = sheetrange
      .offset(0, -1)
      .getValues()
      .map((x: number) => x - 0.3);
    const f_median = i_03 / n + 0.4;
    sheetrange.offset(0, 1).setValues([f_median]);
<<<<<<< HEAD
  } else {
=======
  }
  {
>>>>>>> feature/81_1_3
    const f_average = sheetrange
      .offset(0, -1)
      .getValues()
      .map((x: number) => x / n + 1);
    sheetrange.offset(0, 1).setValues([f_average]);
  }
}
