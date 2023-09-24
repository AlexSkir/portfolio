const path = require('path');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(pdf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/files/[name][ext][query]',
        },
      },
    );

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
