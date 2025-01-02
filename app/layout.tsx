"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            totalEarnings={totalEarnings}
          />
          <div className="flex flex-1">
            <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
