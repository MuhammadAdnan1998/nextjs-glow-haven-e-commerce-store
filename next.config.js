/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other Next.js configurations

  // Development Server Proxy Configuration (to resolve CORS issues)
  devServer: {
    proxy: {
      '/api': {
        target: 'https://nextjs-glow-haven-e-commerce-store.vercel.app/',
        changeOrigin: true, // Required for proxying requests
        pathRewrite: {'^/api' : ''} // Remove '/api' prefix from proxied requests
      },
    },
  },

  // Your existing image configuration for remote patterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;