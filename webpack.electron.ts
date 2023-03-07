import path from 'path';
import { Configuration } from 'webpack';

const commonConfig: Configuration = {
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },
};

export const electronConfig: Configuration = {
  ...commonConfig,
  entry: './src/main.ts',
  target: 'electron-main',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
  },
};

export const preloadConfig: Configuration = {
  ...commonConfig,
  entry: './src/preload.ts',
  target: 'electron-preload',
  output: {
    path: __dirname + '/dist',
    filename: 'preload.js',
  },
};
