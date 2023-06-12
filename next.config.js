
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    experimental: {
         appDir: true,
              },
    images: {
      domains:['travelgame.club'], // for production
      formats:['image/webp','png','jpge','jpg'],
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



