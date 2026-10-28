import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'IP Address Tracker',
  description: 'Track IP addresses with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${rubik.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
