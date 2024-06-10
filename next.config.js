const { server } = require('typescript');

/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.tsx"
);

module.exports = withNextIntl({
  images: {
    domains: ['images.unsplash.com', 'www.3i.com.vn', 'github.com', 'cv-git-main-sunharry198.vercel.app'],
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  webpack: (config, { isServer }) => {
    // Cấu hình xử lý tệp video
    // if (!isServer) {
    //   config.resolve.fallback = { fs: false, module: false };
    // }
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'media/[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
  server:{
    port: 2001,
  }
});
