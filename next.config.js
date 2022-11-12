/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: '/admin(.*)',
          destination: '/api/admin',
        },
        {
          source: '/__webpack_hmr',
          destination: '/api/__webpack_hmr',
        },
      ];
    } else {
      return [
        {
          source: '/admin(.*)',
          destination: '/admin/index.html',
        },
      ];
    }
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });

    cfg.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|mp3|pdf|webm|txt)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    return cfg;
  },
};

module.exports = nextConfig;
