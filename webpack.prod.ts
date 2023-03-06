import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import electronConfig from './webpack.electron';
import reactConfig from './webpack.react';

const config: Configuration = {
  mode: 'production',
};

export default merge<Configuration>(electronConfig, reactConfig, config);
