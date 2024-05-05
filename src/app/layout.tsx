import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import MainLayout from "./_components/main-layout";
import type { AppProps } from "next/app";

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
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <MainLayout {...pageProps}>{children}</MainLayout>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
