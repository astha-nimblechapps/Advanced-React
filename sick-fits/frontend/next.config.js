const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withFonts = require("next-fonts");
//const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config");
module.exports = withImages(
  withSass(
    withCss(
      //       {
      //     webpack(config) {
      //       config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
      //       return config;
      //     }
      //   }
      withFonts()
    )
  )
);
