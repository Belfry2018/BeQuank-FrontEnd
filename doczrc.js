import { css } from "docz-plugin-css";

export default {
  plugins: [
    css({
      preprocessor: "less",
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
        javascriptEnabled: true
      }
    })
  ],
  indexHtml: "./docz_config/docz.config.html"
};
