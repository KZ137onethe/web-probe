// ArrayBuffer 基础知识 可以参考下面
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
// 红宝书（第四版）第六章第三小节：定型数组
// 询问AI

const buf = new ArrayBuffer(4); // 初始化4个字节（一个字节=八位二进制零）
const view = new DataView(buf);
console.log(view.buffer === buf);

// 0 -> 从第0个字节写
// 258 -> 要写入的整数
// false -> 大端序
view.setUint16(0, 258, false); // = 0 1 0 2

// console.log(view); // 只改了前面两个字节，所以是（Uint8） 01 02 00 00
const bytes = new Uint8Array(buf);
console.log(bytes);
console.log(view.getUint16(0, false), view.getUint16(1, false));

// ------------------------------------------------------------------------
const _buf = new ArrayBuffer(12);
// 创建定型数组视图，共用 buffer 中的数据
const _bytes = new Uint8Array(_buf);

// 通过数组下标写入数据
_bytes[0] = 1;
_bytes[1] = 2;
_bytes[2] = 100;
_bytes[3] = 255;

// 读取数据
console.log(_bytes[2]); // 100
console.log(_bytes); // Uint8Array(4) [1, 2, 100, 255]

console.log(_bytes.buffer === _buf); // true

// ------------------------------------------------------------------------
// 将 ArrayBuffer 转化为Blob数据类型
const blob1 = new Blob([buf], {
  type: "application/octet-stream",
});
// 将 ArrayBuffer 转化为File数据类型
const file1 = new File([buf], "data.bin", {
  type: "application/octet-stream",
  lastModified: Date.now(),
});
// 将 DataView 转化为Blob数据类型
const blob2 = new Blob([view], {
  type: "application/octet-stream",
});
// 将 DataView 转化为File数据类型
const file2 = new File([view], "data.bin", {
  type: "application/octet-stream",
  lastModified: Date.now(),
});
// 将 定型数组 转化为Blob数据类型
const blob3 = new Blob([bytes]);
// 将 定型数组 转化为File数据类型
const file3 = new File([bytes], "data.bin");
