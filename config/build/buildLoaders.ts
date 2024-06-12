import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [ '@svgr/webpack' ],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [ '@babel/preset-env' ],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: [ 'ru', 'en' ],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
    const cssLoader = buildCssLoaders(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [ fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader ];
}
