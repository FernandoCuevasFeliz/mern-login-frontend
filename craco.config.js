const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@hooks': path.resolve(__dirname, 'src/components/hooks'),
    },
  },
};
