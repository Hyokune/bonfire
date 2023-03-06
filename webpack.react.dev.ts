import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';

import reactConfig from './webpack.react';

const config: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'build/index.js'),
    compress: true,
    port: 3000,
  },
};

export default merge<Configuration>(reactConfig, config);
