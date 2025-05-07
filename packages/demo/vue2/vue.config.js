const { defineConfig } = require("@vue/cli-service");
const { join } = require("path");
console.log(join(__dirname, "../../vue-catalog/src/index"));

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@shilim-developer/vue-catalog": join(
          __dirname,
          "../../vue-catalog/lib/vue-catalog.es.js"
        ),
        "@": join(__dirname, "src"),
      },
    },
  },
});
