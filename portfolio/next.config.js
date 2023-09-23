module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[path][name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]',
        },
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
};
