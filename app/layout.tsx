import type { Metadata } from "next";
import { inter, satoshi } from "./styles/font";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  icons: {
    icon: "/logo.svg",
  },
  title: "algo arena",
  description:
    "Master algorithms, ace interviews, and level up your coding skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(satoshi.variable, inter.variable)}
      suppressHydrationWarning
    >
      <body>
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <NextTopLoader color="var(--color-primary)" showSpinner={false} />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
