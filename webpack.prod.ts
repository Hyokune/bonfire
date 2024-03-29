import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { electronConfig, preloadConfig } from './webpack.electron';
import reactConfig from './webpack.react';

const config: Configuration = {
  mode: 'production',
};

export default [
  merge<Configuration>(config, preloadConfig),
  merge<Configuration>(config, electronConfig),
  merge<Configuration>(config, reactConfig),
];
