
const nextConfig = {
    reactStrictMode: true,
    experimental: {
         appDir: true,
              },
    images: {
      domains:['travelgame.club'], // for production
      formats:['image/webp','image/avif'],
      remotePatterns: [
                  {
                    protocol: 'https',
                    hostname: '**.builder.io',
                    hostname: '**.googleusercontent.com',
                    hostname: '**.discordapp.com',
                    hostname: "avatars.githußbusercontent.com"
                  },
                ],
            },


}

module.exports = nextConfig



