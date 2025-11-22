import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes' // Import the Dark Theme


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduPlatform | Learn from the Best",
  description: "A premium educational platform for future leaders.",
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
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}