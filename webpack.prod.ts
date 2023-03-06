import webpack from 'webpack';
import { merge } from 'webpack-merge';

import electronConfig from './webpack.electron';
import reactConfig from './webpack.react';

const config: webpack.Configuration = {
  mode: 'production',
};

export default merge(electronConfig, reactConfig, config);
