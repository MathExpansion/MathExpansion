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

class McCabeThiele {
  // McCabe-Thiele法による蒸留カラムの設計
  static designColumn(alpha: number, beta: number): { theoreticalPlates: number, distillateComposition: number, refluxRatio: number } {
    // 操作ラインの勾配
    const m = (alpha - beta) / (beta * (1 - alpha));

    // 理論段数
    const theoreticalPlates = 1 / (m - 1);

    // 反流比
    const refluxRatio = m * theoreticalPlates / (theoreticalPlates - 1);

    // 蒸留液の組成
    const distillateComposition = 1 / (1 + refluxRatio);

    return {
      theoreticalPlates,
      distillateComposition,
      refluxRatio,
    };
  }
}
