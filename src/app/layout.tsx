import "@/styles/globals.css";

import type { Metadata } from "next";

import { HOMEPAGE_URL, OG_IMAGE, SITE_DESCRIPTION, SITE_TITLE, USERNAME } from "@/constants";

import { onest, pally } from "./fonts/fonts";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: "/favicon.ico",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL(HOMEPAGE_URL),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: HOMEPAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_TITLE }],
    siteName: SITE_TITLE,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: USERNAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} ${pally.variable}`}>
      <body>{children}</body>
    </html>
  );
}
