import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';

import electronConfig from './webpack.electron';

const config: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'build/index.js'),
    compress: true,
    port: 3000,
  },
};

export default merge<Configuration>(electronConfig, config);
