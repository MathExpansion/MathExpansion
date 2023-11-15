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
//配列(など)をJSONで厳密に比較
function JSON_equal(x: number[], y: any) {
  return JSON.stringify(x) === JSON.stringify(y);
}

//行列として扱えるか？扱えないならfalse, 扱えるなら[row, col]を返す。
function is_matrix(array: string[]) {
  const row = array.length;
  const col = array[0].length;
  if (col === undefined) {
    return false;
  }
  for (const i in array) {
    if (array[i].length !== col) {
      return false;
    }
  }
  return [row, col];
}
//零行列
function zeros(row: number, col: number ) {
  if (row < 1 || col < 1) {
    throw new Error('IndexError');
  }
  const zeros = [];
  for (let i = 0; i < row; i++) {
    const tmp = [];
    for (let j = 0; j < col; j++) {
      tmp.push(0);
    }
    zeros.push(tmp);
  }
  return zeros;
}
//単位行列
function eye(row: number, col: number) {
  if (row < 1 || col < 1) {
    throw new Error('IndexError');
  }
  const eye = [];
  for (let i = 0; i < row; i++) {
    const tmp = [];
    for (let j = 0; j < col; j++) {
      tmp.push(Number(i === j));
    }
    eye.push(tmp);
  }
  return eye;
}
//対角行列
function diag(...c: string[]) {
  const diag = [];
  for (let i = 0; i < c.length; i++) {
    const tmp = [];
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
function add_asmatrix(A: { [x: string]: { [x: string]: string; }; }, B: { [x: string]: { [x: string]: number; }; }) {
  const Amn = is_matrix(A);
  const Bmn = is_matrix(B);
  if (Amn === false || Bmn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (!JSON_equal(Amn, Bmn)) {
    throw new Error('row or column does not match.');
  }
  const tmp = zeros(...mn);
  for (const i in A) {
    for (const j in A[i]) {
      tmp[i][j] = A[i][j] + B[i][j];
    }
  }
  return tmp;
}
//行列の差 A-B
function sub_asmatrix(A: { [x: string]: { [x: string]: number; }; }, B: { [x: string]: { [x: string]: number; }; }) {
  const Amn = is_matrix(A);
  const Bmn = is_matrix(B);
  if (Amn === false || Bmn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (!JSON_equal(Amn, Bmn)) {
    throw new Error('row or column does not match.');
  }
  const tmp = zeros(...mn);
  for (const i in A) {
    for (const j in A[i]) {
      tmp[i][j] = A[i][j] - B[i][j];
    }
  }
  return tmp;
}
//行列のスカラー倍 xA
function scalar_mul(A: { [x: string]: { [x: string]: number; }; }, x: number) {
  const mn = is_matrix(A);
  if (mn === false) {
    throw new Error('Array is not matrixlike.');
  }
  const tmp = zeros(...mn);
  for (const i in A) {
    for (const j in A[i]) {
      tmp[i][j] = A[i][j] * x;
    }
  }
  return tmp;
}
//行列の転置 A^t
function T(A: { [x: string]: { [x: string]: number; }; }) {
  const mn = is_matrix(A);
  if (mn === false) {
    throw new Error('Array is not matrixlike.');
  }
  const tmp = zeros(mn[1], mn[0]);
  for (const i in A) {
    for (const j in A[i]) {
      tmp[j][i] = A[i][j];
    }
  }
  return tmp;
}
//行列の乗算 AB
function mul_asmatrix(A: { [x: string]: number; }[], B: { [x: string]: number; }[]) {
  const Amn = is_matrix(A);
  const Bmn = is_matrix(B);
  if (Amn === false || Bmn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (Amn[1] !== Bmn[0]) {
    throw new Error('multiplication is not defined.');
  }
  const tmp = zeros(Amn[0], Bmn[1]);
  for (const i in tmp) {
    for (const j in tmp[i]) {
      for (let k = 0; k < Amn[1]; k++) {
        tmp[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return tmp;
}
//行列の対角成分を抽出する
function extract_diag(A: { [x: string]: { [x: string]: any; }; }[]) {
  const mn = is_matrix(A);
  if (mn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (mn[0] !== mn[1]) {
    throw new Error('square matrix only');
  }
  const tmp = [];
  for (const i in A) {
    tmp.push(A[i][i]);
  }
  return diag(...tmp);
}
//行列Aの下三角行列
function lower(A: { [x: string]: number[]; }[]) {
  const mn = is_matrix(A);
  if (mn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (mn[0] !== mn[1]) {
    throw new Error('square matrix only');
  }
  const tmp = zeros(...mn);
  for (const i in A) {
    for (let j = 0; j <= i; j++) {
      tmp[i][j] = A[i][j];
    }
  }
  return tmp;
}
//行列Aの上三角行列
function upper(A: { [x: string]: { [x: string]: number; }; }[]) {
  const mn = is_matrix(A);
  if (mn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (mn[0] !== mn[1]) {
    throw new Error('square matrix only');
  }
  const tmp = zeros(...mn);
  for (const i in A) {
    for (let j = i; j < mn[0]; j++) {
      tmp[i][j] = A[i][j];
    }
  }
  return tmp;
}
//行列のトレース(対角和)
function tr(A: { [x: string]: { [x: string]: number; }; }) {
  const mn = is_matrix(A);
  if (mn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (mn[0] !== mn[1]) {
    throw new Error('square matrix only');
  }
  let tmp = 0;
  for (const i in A) {
    tmp += A[i][i];
  }
  return tmp;
}
//行列の内積 <A,B>
function inner_prod(A: { [x: string]: { [x: string]: number; }; }[], B: { [x: string]: { [x: string]: number; }; }[]) {
  const Amn = is_matrix(A);
  const Bmn = is_matrix(B);
  if (Amn === false || Bmn === false) {
    throw new Error('Array is not matrixlike.');
  }
  if (!JSON_equal(Amn, Bmn)) {
    throw new Error('inner product is not defined.');
  }
  let tmp = 0;
  for (const i in A) {
    for (const j in A) {
      tmp += A[i][j] * B[i][j];
    }
  }
  return tmp;
}

//matrixA = [[1, 2, 3], [4, 5, 6]];

// 行列の足し算
function matrixAddition(matrixA: string[][], matrixB: string[][]) {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    result.push([]);
    for (let j = 0; j < matrixA[i].length; j++) {
      result[i].push(matrixA[i][j] + matrixB[i][j]);
    }
  }
  return result;
}

// 行列の引き算
function matrixSubtraction(matrixA: string[][], matrixB: string[][]) {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    result.push([]);
    for (let j = 0; j < matrixA[i].length; j++) {
      result[i].push(matrixA[i][j] - matrixB[i][j]);
    }
  }
  return result;
}

// 行列の掛け算
function matrixMultiplication(matrixA: number[][], matrixB: number[][]) {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    result.push([]);
    for (let j = 0; j < matrixB[0].length; j++) {
      result[i].push(0);
      for (let k = 0; k < matrixA[0].length; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
}

// 行列の転置
function matrixTranspose(matrix: string[][]) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
}
