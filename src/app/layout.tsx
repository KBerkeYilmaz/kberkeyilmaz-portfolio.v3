import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import MainLayout from "./_components/main-layout";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KBerke Yilmaz portfolio app.",
  description: "Bits and pieces of my life, projects, and thoughts.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <MainLayout>{children}</MainLayout>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
