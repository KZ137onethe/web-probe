// File 基础知识可以参考
// ! File类型继承与Blob类型
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/API/File
// 询问 AI

const file1 = new File(["foo"], "foo.txt", {
  type: "text/plain",
  lastModified: Date.now(),
});
// Blob对象的方法，File也能用
const text = await file1.text();
console.log(text);
// 其他...

// ------------------------------------------------------------------------
// File 转成 ArrayBuffer
const buf = await file1.arrayBuffer();
// File 转成 Blob（一般都不需要转换, File继承自Blob）
const blob1 = new Blob([file1], {
  type: file1.type,
});
