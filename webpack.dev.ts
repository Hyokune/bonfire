import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';

import electronConfig from './webpack.electron';
import reactConfig from './webpack.react';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'build/index.js'),
    compress: true,
    port: 3000,
  },
};

export default merge(electronConfig, reactConfig, config);
