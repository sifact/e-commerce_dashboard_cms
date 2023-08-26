import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import prismadb from "@/lib/prismadb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Dashboard",
  description: "E-commerce Dashboard root page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
