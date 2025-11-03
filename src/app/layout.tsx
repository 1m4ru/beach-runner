import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/header";
import { QueryProvider } from "./providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beach Runner",
  description: "Rastreie seus treinos e domine seu desempenho com o Beach Runner.",
  icons: {
    icon: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/web-app-manifest-192x192.png",
  },
  manifest: "/site.webmanifest",
  applicationName: "Beach Runner",
  appleWebApp: {
    capable: true,
    title: "Beach Runner",
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <head>
          <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#f97316" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <QueryProvider>
            <Header />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
