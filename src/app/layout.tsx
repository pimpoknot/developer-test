import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderContainer from "@/components/home/header/HeaderContainer";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <HeaderContainer />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
