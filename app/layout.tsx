import { Nunito } from 'next/font/google';

import './globals.css';
import {Metadata} from "next";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'GAME RECORDS',
    description:'рекорды турниры гонки ставки игры'
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        {/*<link data-rh="true" rel="icon" href="/logo.png" />*/}
      </head>
      <body className={nunito.className}>
      {children}
      </body>
      </html>
  );
}
