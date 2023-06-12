
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
                    hostname: '**.googleusercontent.com',
                    hostname: '**.discordapp.com',
                    hostname: "avatars.githubusercontent.com"

                  },
                ],
              },


}

module.exports = nextConfig



