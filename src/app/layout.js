import { Playfair_Display, Lato, IBM_Plex_Serif } from 'next/font/google';
import './globals.css'
import Navbar from '../components/Navbar/page'

export const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const ibm = IBM_Plex_Serif({
  variable: '--font-ibm',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'], // Lato is not variable; weights must be specified
  display: 'swap',
});

export const metadata = {
  title: "Sip n' Go",
  icons: '/icons/coffee-bean.svg',
  description: "Website created by Ajibola Jacobs",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${ibm.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col items-center overflow-x-hidden">
          <Navbar />

          {children}
        </body>
    </html>
  );
}
