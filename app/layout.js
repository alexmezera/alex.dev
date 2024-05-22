import { 
  Inconsolata
 } from "next/font/google";

import "./globals.css";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer"

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: 'Alex Mezera: Software Engineering',
  description: 'Alex Mezera, Personal Page',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
