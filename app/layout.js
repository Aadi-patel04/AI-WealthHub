import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "WealthHub",
  description: "One stop solution for all your financial needs",
};



export default function RootLayout({ children }) {
  return (

    <ClerkProvider>

    <html lang="en">
      <body
        className={`${inter.variable} ${geist.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {/*header*/}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        {/*footer*/}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
              made by god
            </p>
          </div></footer>
      </body>
    </html>
    
    </ClerkProvider>

  );
}
