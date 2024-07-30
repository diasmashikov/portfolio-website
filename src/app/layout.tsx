import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dias Mashikov | Web Developer & Designer",
  description:
    "Aspiring SWE in Full-Stack Development specializing in modern, responsive web applications. View my portfolio and recent projects.",
  openGraph: {
    title: "Dias Mashikov - SWE Full-Stack Portfolio",
    description:
      "Discover my latest experience and projects. Specializing in React, Next.js, Tailwind CSS, FastAPI, and more.",
    images: [
      {
        url: "/dias_mashikov_portfolio_preview.png",
        width: 1200,
        height: 630,
        alt: "Dias Mashikov Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="public/favicon.ico" />
      </Head> */}

      <body className={`${inter.className} `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
