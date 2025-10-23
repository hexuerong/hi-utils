module.exports = {
  experimentalTernaries: true, // 使用实验性的三元表达式
  singleQuote: true, // 使用单引号
  semi: false, // 使用分号
  trailingComma: 'all', // 不使用尾随逗号
  arrowParens: 'avoid', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  printWidth: 80, // 每行最大字符数
  tabWidth: 2, // 缩进字符数
  useTabs: false, // 使用空格缩进
  jsxSingleQuote: true, // jsx中使用单引号
  jsxBracketSameLine: false, // 在jsx中，将>多行JSX元素的放在另起一行
  vueIndentScriptAndStyle: false, // 在Vue文件中，缩进<template>、<script>和<style>标签内的代码
  endOfLine: 'auto', // 自动检测换行符
  quoteProps: 'as-needed', // 对象属性仅在必要时使用引号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  bracketSameLine: false, // 将多行HTML (HTML、JSX、Vue、Angular)元素的>单独放在下一行(不适用于自闭元素)
  singleAttributePerLine: true,
}
