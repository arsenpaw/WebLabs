import path from 'node:path';
import  webpack from 'webpack';
export default {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve('public'),
    },
      mode: 'development',
   resolve: {
    extensions: ['.ts', '.js'],
  },
 module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
         'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'http://localhost:5097'),
    }),
  ],
};