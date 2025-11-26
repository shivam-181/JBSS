import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes' // Import the Dark Theme
import { ChatWidget } from "@/components/chat-widget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "JBSS Education | Bihar's Leading Skill Institute",
    template: "%s | JBSS Education"
  },
  description: "Empowering Bihar's youth with industry-ready skills through BSDM-certified programs like KYP & BSCFA. Join JBSS Education for a brighter future.",
  keywords: ["JBSS Education", "Skill Development", "Bihar", "KYP", "BSDM", "Computer Course", "Vocational Training", "Career Institute"],
  authors: [{ name: "JBSS Education" }],
  creator: "JBSS Education",
  publisher: "JBSS Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jbss.org.in",
    title: "JBSS Education | Bihar's Leading Skill Institute",
    description: "Empowering Bihar's youth with industry-ready skills through BSDM-certified programs like KYP & BSCFA.",
    siteName: "JBSS Education",
    images: [
      {
        url: "/hero-final.jpg", // Using our hero image as the OG image
        width: 1200,
        height: 630,
        alt: "JBSS Education Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JBSS Education | Bihar's Leading Skill Institute",
    description: "Empowering Bihar's youth with industry-ready skills through BSDM-certified programs like KYP & BSCFA.",
    images: ["/hero-final.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark, // Force Dark Mode for Clerk Components
        variables: { 
          colorPrimary: "#2563eb", // Matches our Blue-600 primary color
          fontSize: "16px"
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <ChatWidget />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}