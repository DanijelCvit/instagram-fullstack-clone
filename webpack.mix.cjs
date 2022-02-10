let mix = require("laravel-mix");
let path = require("path");

mix.options({
  legacyNodePolyfills: true,
});

mix
  .js("resources/assets/js/main.js", "js")
  .setPublicPath("public")
  .vue({ version: 2 })
  .sourceMaps();

mix.options({
  hmrOptions: {
    host: "localhost",
    port: "8079",
  },
});

mix.webpackConfig({
  devServer: {
    port: "8079",
  },
});

mix.alias({
  "@": path.join(__dirname, "resources/assets/js"),
});
