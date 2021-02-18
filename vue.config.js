// vue.config.js
module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.vue$/,
      use: [{
        loader: 'vue-windicss-preprocess',
        options: {
          config: "tailwind.config.js",  // tailwind config file path OR config object (optional)
          compile: false,                // false: interpretation mode; true: compilation mode
          globalPreflight: true,         // set preflight style is global or scoped
          globalUtility: true,           // set utility style is global or scoped
          prefix: 'windi-'               // set compilation mode style prefix
        }
      }]
    })
  }
}