module.exports = {
  presets: ["@vue/app"],
  plugins: [
    // 按需加载插件
        [
         "import",
         { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
       ]
     ]
};
