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
