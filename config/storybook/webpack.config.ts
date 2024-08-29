import path from "path";
import webpack, { DefinePlugin } from "webpack";
import type { BuildPaths } from "../build/types/config";
import { buildCssLoaders } from "../build/loaders/buildCssLoader";
import { RuleSetRule } from "webpack";
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, "..", "..", "src"),
    build: "",
    html: "",
    entry: "",
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push("ts", "tsx");
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
}; 
config.module?.rules?.push({
  test: /\.tsx?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      },
    },
  ],
  exclude: /node_modules/,
});
  if (config.module) {
    config.module.rules = config.module?.rules?.map((rule: any) => {
      if (/svg/.test(rule.test as string)) {
        return {...rule, exclude: /\.svg$/}
      }
      return rule; 
    });
  }
  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [ '@svgr/webpack' ],
})
  config.module?.rules?.push(buildCssLoaders(true));
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify("storybook"),
  }))
  return config;
};
