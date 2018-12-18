const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use:
          'react-native-web-image-loader?name=[name].[ext]&scalings[@2x]=2&scalings[-3x]=3',
      },
      {
        include: [
          path.join(__dirname, '../node_modules/react-datepicker/dist/'),
        ],
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    // Maps the 'react-native' import to 'react-native-web'.
    alias: {
      'react-native': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
    },
    extensions: ['.web.js', '.js'],
  },
};
