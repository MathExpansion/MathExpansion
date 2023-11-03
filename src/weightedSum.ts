function weightedSum(...args) {
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

// 使用例
const result = weightedSum(2, 0.5, 3, 0.3, 1, 0.2);
console.log(result); // 1.4