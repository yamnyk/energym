import webpack from "webpack"
import { merge } from "webpack-merge"
import baseWebpackConfig from "./webpack.base.js"

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 3000,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
})

export default new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
