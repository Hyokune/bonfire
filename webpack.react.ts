import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

const reactConfig: webpack.Configuration = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/index.js'),
    },
    compress: true,
    port: 3000,
  },
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

export default reactConfig;
