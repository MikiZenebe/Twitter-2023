import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import FollowBar from "./components/layout/FollowBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="h-screen bg-primary">
          <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Navbar />
              <div className="col-span-3 lg:col-span-2 border-x-[1px] border-[#24313b] ">
                {children}
              </div>

              <FollowBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
