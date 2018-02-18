'use strict';
const obj = {};
obj.color = '黄色';
console.log(obj.color);

const obj2 = {};
obj2.color = '緑';
obj2['not an indentifier'] = 3;
console.log(obj2['not an indentifier']);
console.log(obj2['color']);
// console.log(obj[color]); シングルコーテーションがないためプロパティにアクセスできずエラーとなる。
// ReferenceError: color is not defined
// 有効な識別子でないプロパティを使う場合は[...]ブラケット表記を使い
// プロパティ名を文字列で指定。
// このことを、計算値によりメンバーアクセス演算子と呼ぶ