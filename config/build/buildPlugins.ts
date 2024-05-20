import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
