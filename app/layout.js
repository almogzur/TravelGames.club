import '../styles/globals.css'

export const  metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  icons:{
    icon: [{ url: '../public/metadata.png' }],
   
  }
};

export default function RootLayout({ children }) {

    return (
      <html>
      <body>
        {children}=
        </body>
      </html>
    )
  }