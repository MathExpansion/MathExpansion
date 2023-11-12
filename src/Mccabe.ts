class McCabeThiele {
  // McCabe-Thiele法による蒸留カラムの設計
  public static designColumn(alpha: number, beta: number): { theoreticalPlates: number, distillateComposition: number, refluxRatio: number } {
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

// サンプルデータ
const alpha = 0.7; // ボトムスプリット（下留め）組成
const beta = 0.1;  // トップスプリット（上留め）組成

// McCabe-Thiele法による蒸留カラムの設計
const result = McCabeThiele.designColumn(alpha, beta);

// 結果をコンソールに表示
console.log(result);
