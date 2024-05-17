import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import MainLayout from "./_components/main-layout";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";
import SessionProvider from "@/components/SessionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KBerkeYilmaz - Portfolio",
  description: "Bits and pieces of my life, projects, and thoughts.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: AppProps;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} transition-colors delay-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <SessionProvider>
            <MainLayout {...pageProps}>{children}</MainLayout>
            </SessionProvider>
          </TRPCReactProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
