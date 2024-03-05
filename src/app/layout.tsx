import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderContainer from "@/components/header/HeaderContainer";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "new frontier  art",
  description: "The forever home of long-form generative art. Create, collect, and connect today. Pioneering the digital art revolution, one hash and group chat at a time.",
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
