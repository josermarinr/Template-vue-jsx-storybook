const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  "framework": "@storybook/vue3",
  modules: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
        }],
        include: path.resolve(__dirname, '../'),
      }, {
        test: /\.(js|ts)x/,
        loader: "ts-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
}
