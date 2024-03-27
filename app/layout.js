
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "DigitalP",
  description: "Hii i am Prathmesh. these is my portfolio web-app and these web-app name is DigitalP",
  icons: {
    icon: '/favicon.png',
  },

};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
