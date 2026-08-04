import type { Metadata } from "next";
import { Oxanium, Merriweather, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kadu.pro"),
  title: {
    default: "KADU | O ecossistema definitivo para criadores e devs",
    template: "%s | KADU",
  },
  description: "Utilitários web rápidos, elegantes e diretos ao ponto. Descubra nossas ferramentas projetadas para economizar seu tempo com um design impecável.",
  keywords: ["utilitários web", "desenvolvimento", "ferramentas", "qr code", "kadu", "tecnologia", "produtividade"],
  authors: [{ name: "KADU", url: "https://kadu.pro" }],
  creator: "KADU",
  publisher: "KADU",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kadu.pro",
    title: "KADU | O ecossistema definitivo para criadores e devs",
    description: "Utilitários web rápidos, elegantes e diretos ao ponto. Descubra nossas ferramentas projetadas para economizar seu tempo com um design impecável.",
    siteName: "KADU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KADU Ecossistema",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KADU | O ecossistema definitivo para criadores e devs",
    description: "Utilitários web rápidos, elegantes e diretos ao ponto. Descubra nossas ferramentas.",
    creator: "@kadu",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${oxanium.variable} ${merriweather.variable} ${firaCode.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
