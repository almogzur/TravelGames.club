
const nextConfig = {
  reactStrictMode: true,
   experimental: {
         appDir: true,
              },
              images: {
                remotePatterns: [
                  {
                    protocol: 'https',
                    hostname: '**.builder.io',
                  },
                ],
              },


}

module.exports = nextConfig



