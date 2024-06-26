/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://shuffle.dev',
            port: '',
            pathname: '/vendia-assets/**',
          },
        ],
      },
};

export default nextConfig;
