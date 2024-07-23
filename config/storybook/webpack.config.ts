import path from "path";
import webpack, { DefinePlugin } from "webpack";
import { BuildPaths } from "../build/types/config";
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
  if (config.module) {
    config.module.rules = config.module?.rules?.map((rule: any) => {//Обязательно исправлю, извините
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
