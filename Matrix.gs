//配列(など)をJSONで厳密に比較
function JSON_equal(x, y) {
    return JSON.stringify(x) === JSON.stringify(y);
}

//行列として扱えるか？扱えないならfalse, 扱えるなら[row, col]を返す。
function is_matrix(array) {
    let row = array.length;
    let col = array[0].length;
    if (col === undefined) { return false }
    for (i in array) {
        if (array[i].length !== col) { return false }
    }
    return [row, col];
}
//零行列
function zeros(row, col) {
    if ((row < 1) || (col < 1)) { throw new Error('IndexError'); }
    let zeros = [];
    for (let i = 0; i < row; i++) {
        let tmp = [];
        for (let j = 0; j < col; j++) {
            tmp.push(0);
        }
        zeros.push(tmp);
    }
    return zeros;
}
//単位行列
function eye(row, col) {
    if ((row < 1) || (col < 1)) { throw new Error('IndexError'); }
    let eye = [];
    for (let i = 0; i < row; i++) {
        let tmp = [];
        for (let j = 0; j < col; j++) {
            tmp.push(Number(i === j));
        }
        eye.push(tmp);
    }
    return eye;
}
//対角行列
function diag(...c) {
    let diag = [];
    for (let i = 0; i < c.length; i++) {
        let tmp = [];
        for (let j = 0; j < c.length; j++) {
            if (i !== j) {
                tmp.push(0);
            } else {
                tmp.push(c[i]);
            }
        }
        diag.push(tmp);
    }
    return diag;
}
//行列の和 A+B
function add_asmatrix(A, B) {
    let Amn = is_matrix(A); Bmn = is_matrix(B);
    if (Amn === false || Bmn === false) { throw new Error('Array is not matrixlike.'); }
    if (!JSON_equal(Amn, Bmn)) { throw new Error('row or column does not match.'); }
    let tmp = zeros(...mn);
    for (i in A) {
        for (j in A[i]) {
            tmp[i][j] = A[i][j] + B[i][j];
        }
    }
    return tmp;
}
//行列の差 A-B
function sub_asmatrix(A, B) {
    let Amn = is_matrix(A); Bmn = is_matrix(B);
    if (Amn === false || Bmn === false) { throw new Error('Array is not matrixlike.'); }
    if (!JSON_equal(Amn, Bmn)) { throw new Error('row or column does not match.'); }
    let tmp = zeros(...mn);
    for (i in A) {
        for (j in A[i]) {
            tmp[i][j] = A[i][j] - B[i][j];
        }
    }
    return tmp;
}
//行列のスカラー倍 xA
function scalar_mul(A, x) {
    let mn = is_matrix(A);
    if (mn === false) { throw new Error('Array is not matrixlike.'); }
    let tmp = zeros(...mn);
    for (i in A) {
        for (j in A[i]) {
            tmp[i][j] = A[i][j] * x;
        }
    }
    return tmp;
}
//行列の転置 A^t
function T(A) {
    let mn = is_matrix(A);
    if (mn === false) { throw new Error('Array is not matrixlike.') }
    let tmp = zeros(mn[1], mn[0]);
    for (i in A) {
        for (j in A[i]) {
            tmp[j][i] = A[i][j];
        }
    }
    return tmp;
}
//行列の乗算 AB
function mul_asmatrix(A, B) {
    let Amn = is_matrix(A); Bmn = is_matrix(B);
    if (Amn === false || Bmn === false) { throw new Error('Array is not matrixlike.'); }
    if (Amn[1] !== Bmn[0]) { throw new Error('multiplication is not defined.') }
    let tmp = zeros(Amn[0], Bmn[1]);
    for (i in tmp) {
        for (j in tmp[i]) {
            for (let k = 0; k < Amn[1]; k++) {
                tmp[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return tmp;
}
//行列の対角成分を抽出する
function extract_diag(A) {
    let mn = is_matrix(A);
    if (mn === false) { throw new Error('Array is not matrixlike.') }
    if (mn[0] !== mn[1]) { throw new Error('square matrix only')}
    let tmp = []
    for (i in A) {
        tmp.push(A[i][i]);
    }
    return diag(...tmp);
}
//行列Aの下三角行列
function lower(A) {
    let mn = is_matrix(A);
    if (mn === false) { throw new Error('Array is not matrixlike.') }
    if (mn[0] !== mn[1]) { throw new Error('square matrix only')}
    let tmp = zeros(...mn);
    for (i in A) {
        for (let j = 0; j <= i; j++) {
            tmp[i][j] = A[i][j];
        }
    }
    return tmp;
}
//行列Aの上三角行列
function upper(A) {
    let mn = is_matrix(A);
    if (mn === false) { throw new Error('Array is not matrixlike.') }
    if (mn[0] !== mn[1]) { throw new Error('square matrix only')}
    let tmp = zeros(...mn);
    for (i in A) {
        for (let j = i; j < mn[0]; j++) {
            tmp[i][j] = A[i][j];
        }
    }
    return tmp;
}
//行列のトレース(対角和)
function tr(A) {
    let mn = is_matrix(A);
    if (mn === false) { throw new Error('Array is not matrixlike.') }
    if (mn[0] !== mn[1]) { throw new Error('square matrix only')}
    let tmp = 0;
    for (i in A) {
        tmp += A[i][i];
    }
    return tmp;
}
//行列の内積 <A,B>
function inner_prod(A, B) {
    let Amn = is_matrix(A); Bmn = is_matrix(B);
    if (Amn === false || Bmn === false) { throw new Error('Array is not matrixlike.'); }
    if (!JSON_equal(Amn, Bmn)) { throw new Error('inner product is not defined.') }
    let tmp = 0;
    for (i in A) {
        for (j in A) {
            tmp += A[i][j] * B[i][j]
        }
    }
    return tmp;
}

function main() {
  // 2つの行列を作成
  var matrixA = [[1, 2, 3], [4, 5, 6]];
  var matrixB = [[7, 8], [9, 10], [11, 12]];

  // 行列の足し算
  var resultAddition = matrixAddition(matrixA, matrixB);

  // 行列の引き算
  var resultSubtraction = matrixSubtraction(matrixA, matrixB);

  // 行列の掛け算
  var resultMultiplication = matrixMultiplication(matrixA, matrixB);

  // 行列の転置
  var resultTranspose = matrixTranspose(matrixA);

  // 結果をログに表示
  Logger.log("行列A: " + JSON.stringify(matrixA));
  Logger.log("行列B: " + JSON.stringify(matrixB));
  Logger.log("行列の足し算: " + JSON.stringify(resultAddition));
  Logger.log("行列の引き算: " + JSON.stringify(resultSubtraction));
  Logger.log("行列の掛け算: " + JSON.stringify(resultMultiplication));
  Logger.log("行列の転置: " + JSON.stringify(resultTranspose));
}

// 行列の足し算
function matrixAddition(matrixA, matrixB) {
  var result = [];
  for (var i = 0; i < matrixA.length; i++) {
    result.push([]);
    for (var j = 0; j < matrixA[i].length; j++) {
      result[i].push(matrixA[i][j] + matrixB[i][j]);
    }
  }
  return result;
}

// 行列の引き算
function matrixSubtraction(matrixA, matrixB) {
  var result = [];
  for (var i = 0; i < matrixA.length; i++) {
    result.push([]);
    for (var j = 0; j < matrixA[i].length; j++) {
      result[i].push(matrixA[i][j] - matrixB[i][j]);
    }
  }
  return result;
}

// 行列の掛け算
function matrixMultiplication(matrixA, matrixB) {
  var result = [];
  for (var i = 0; i < matrixA.length; i++) {
    result.push([]);
    for (var j = 0; j < matrixB[0].length; j++) {
      result[i].push(0);
      for (var k = 0; k < matrixA[0].length; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
}

// 行列の転置
function matrixTranspose(matrix) {
  var result = [];
  for (var i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (var j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
}

// メイン関数を実行
main();
