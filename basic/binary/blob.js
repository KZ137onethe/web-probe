// Blob 基础知识可以参考：
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/API/Blob

const blob1 = new Blob(["Hello", " ", "world!"], {
  type: "text/plain",
});
// 字节大小 类型
console.log(blob1.size, blob1.type);
const text = await blob1.text();
console.log(text);
const part = blob1.slice(6, 12); // 通过字节分割
console.log(await part.text());
const stream = blob1.stream();
const reader = stream.getReader();
reader.read().then(function processText({ done, value }) {
  // Result 对象包含了两个属性：
  // done  - 当 stream 传完所有数据时则变成 true
  // value - 数据片段，是一个定型数组。当 done 为 true 时始终为 undefined

  if (done) {
    console.log("stream done!");
    return;
  }

  const text = new TextDecoder("utf-8").decode(value);
  console.log("定型数组：", value, "utf-8编码：", text);

  return reader.read().then(processText);
});

// ------------------------------------------------------------------------
// 将 Blob 转成 ArrayBuffer
const buf1 = await blob1.arrayBuffer();
console.log(buf1);
// 将 Blob 转成 File
const file1 = new File([blob1], "hello.txt", {
  type: blob1.type,
  lastModified: Date.now(),
});
