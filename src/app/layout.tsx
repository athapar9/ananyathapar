import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://ananyathapar.com"; // update to your actual deployed domain
const TITLE = "Ananya Thapar — Software Engineer";
const DESCRIPTION =
  "Software Engineer at Microsoft. Former President of Cal Poly's Society of Women Engineers (650+ members). Building user-facing products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Ananya Thapar",
  },
  description: DESCRIPTION,
  keywords: [
    "Ananya Thapar",
    "Software Engineer",
    "Microsoft",
    "Product Engineer",
    "Cal Poly",
    "Society of Women Engineers",
  ],
  authors: [{ name: "Ananya Thapar" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Ananya Thapar",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ananya Thapar — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/favicon-32.png",
  },
};

export const viewport = {
  themeColor: "#faf8f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
