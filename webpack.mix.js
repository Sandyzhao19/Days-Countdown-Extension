const mix = require("laravel-mix");

mix
  .setPublicPath("./")
  .sass("src/sass/popup.scss", "dist/css")
  .js("src/js/popup.js", "dist/js")
  .vue()
  .copy("src/images/", "dist/images")
  .copyDirectory("node_modules/@mdi/font/fonts/", "dist/fonts")
  .options({
    processCssUrls: false,
  });
