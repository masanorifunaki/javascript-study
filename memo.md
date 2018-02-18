# JS学習メモ
## 3.11

```js
'use strict';
const obj = {};
obj.color = '黄色';
obj['not an indentifier'] = 3;
console.log(obj['not an indentifier']);
console.log(obj['color']);
// console.log(obj[color]); シンボルとして定義していないため
// エラーとなる
// ReferenceError: color is not defined
// 有効な識別子でないプロパティを使う場合は[...]ブラケット表記を使い
// プロパティ名を文字列で指定。
// このことを、計算値によりメンバーアクセス演算子と呼ぶ

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);

// 3つのプロパティ
// obj.color = '黄色'; 有効な識別子である文字列
// obj['not an indentifier'] = 3; 有効な識別子ではない文字列
// obj[SIZE] = 8; シンボルのキー
// プロパティとしてシンボルSIZEが表示されない
// プロパティがシンボルの場合は、扱いはことなるから。
// このプロパティのキーはシンボルのSIZEであって、文字列の'SIZE'ではない。

// . が使えるのは文字列のプロパティのみ。
obj.SIZE = 12;
console.log(obj.SIZE); // obj[SIZE] = 8; とは無関係
console.log(obj[SIZE]);
console.log(obj); // { SIZE: 12 } シンボルSIZEのプロパティではない
// { color: '黄色', 'not an indentifier': 3, SIZE: 12, [Symbol()]: 8 }
// objはずっと同じオブジェクトを指している。（参照している）
// objの中身（プロパティ）は変化する。
// オブジェクトのプロパティとして使われる関数は「メソッド」と呼ぶ
obj.hello = function () {
  return 'Hello';
};
console.log(obj.hello());
console.log(obj);
// プリミティブとオブジェクトの違い
// objはずっと同じオブジェクトを指している。（参照している）
// objの中身（プロパティ）は変化する
// オブジェクトのプロパティとして使われる関数は「メソッド」と呼ぶ
// オブジェクト型 Number String Booleanの使う目的
// 特殊な値をプロパティとして記憶する
// 関数（メソッド）という形で様々な機能を提供する。
```