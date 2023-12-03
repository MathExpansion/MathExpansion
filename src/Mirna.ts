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

class GumowskiMira {
  private a: number;
  private b: number;
  private c: number;
  private d: number;

  constructor(a: number, b: number, c: number, d: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  // グモウスキー・ミラの写像関数
  private g(x: number, y: number): { x: number, y: number } {
    const newX = this.a * x + 2 * this.b * x * y + this.c * y;
    const newY = this.d * x + y - x * x;
    return { x: newX, y: newY };
  }

  // グモウスキー・ミラの写像を実行するメソッド
  public run(iterations: number, initialX: number, initialY: number): { x: number, y: number }[] {
    const points: { x: number, y: number }[] = [];

    let x = initialX;
    let y = initialY;

    for (let i = 0; i < iterations; i++) {
      const result = this.g(x, y);
      x = result.x;
      y = result.y;
      points.push({ x, y });
    }

    return points;
  }
}

// グモウスキー・ミラのパラメータ
const a = 0.1;
const b = 0.2;
const c = 0.3;
const d = 0.4;

// グモウスキー・ミラのインスタンスを生成
const gumowskiMira = new GumowskiMira(a, b, c, d);

// 実行パラメータ
const iterations = 1000;
const initialX = 0.1;
const initialY = 0.1;

// グモウスキー・ミラの写像を実行
const result = gumowskiMira.run(iterations, initialX, initialY);
