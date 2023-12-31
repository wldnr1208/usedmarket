import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";
import Script from "next/script";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        <ToastProvider />
        {children}
        <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=09acd59bb4298e0a6a4c1406087c3d1b&libraries=services,clusterer&autoload=false" />
      </body>
    </html>
  );
}
