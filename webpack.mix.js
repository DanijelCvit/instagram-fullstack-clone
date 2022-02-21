// const mix = require('laravel-mix');
//
// /*
//  |--------------------------------------------------------------------------
//  | Mix Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Mix provides a clean, fluent API for defining some Webpack build steps
//  | for your Laravel applications. By default, we are compiling the CSS
//  | file for the application as well as bundling up all the JS files.
//  |
//  */
//
// mix.js('resources/js/main.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

let mix = require("laravel-mix");
let path = require("path");

mix.options({
    legacyNodePolyfills: true,
});

mix
    .js("resources/js/main.js", "js")
    .setPublicPath("public")
    .vue({ version: 2 })
    .sourceMaps();

mix.options({
    hmrOptions: {
        host: "localhost",
        port: "8081",
    },
});

mix.webpackConfig({
    devServer: {
        port: "8081",
    },
});

mix.alias({
    "@": path.join(__dirname, "resources/js"),
});
