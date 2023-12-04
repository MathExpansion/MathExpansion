/**
 * Copyright 2023 MathExpansion
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function weightedSum(...args: number[]) {
  if (args.length % 2 !== 0) {
    throw new Error('引数の数は偶数でなければなりません。');
  }

  let sum = 0;

  for (let i = 0; i < args.length; i += 2) {
    const value = args[i];
    const weight = args[i + 1];

    if (typeof value !== 'number' || typeof weight !== 'number') {
      throw new Error('値と重みは数値でなければなりません。');
    }

    sum += value * weight;
  }
  return sum;
}
