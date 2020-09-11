module.exports = {
  presets: ["vca-jsx", "@vue/cli-plugin-babel/preset"],
  plugins: [
    "jsx-v-model",
    "transform-vue-jsx",
    "@babel/plugin-proposal-optional-chaining", //可选链运算符
    "@babel/plugin-proposal-nullish-coalescing-operator" //空位合并运算符
  ]
};
