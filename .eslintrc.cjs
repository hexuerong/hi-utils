module.exports = {
  plugins: ['@typescript-eslint', 'prettier'], // 注册插件
  rules: {
    'prettier/perttier': 'error', // 加入prettier规则
  },
  extends: ['plugin:prettier/recommended'],
}
