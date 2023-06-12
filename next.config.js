
const nextConfig = {
    reactStrictMode: true,
    experimental: {
         appDir: true,
              },
    images:{
      remotePatterns: [
           {
              protocol:'https',
              hostname:'**.builder.io',
            },
            {
              protocol:'https',
              hostname:'**.googleusercontent.com',
            },
            {     
               protocol:'https',
               hostname:'**.discordapp.com',
             },
             {
               protocol:'https',
               hostname:"**.githußbusercontent.com"
             }
                ],
            }
}

module.exports = nextConfig



