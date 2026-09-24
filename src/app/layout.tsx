import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "R. Akilanethran | Full Stack Developer & CS Engineer",
  description: "Computer Science Engineering student passionate about software development, AI/ML, and building intelligent, scalable digital experiences.",
  keywords: ["R. Akilanethran", "Akilanethran", "Full Stack Developer", "Computer Science Engineer", "NEC", "Portfolio"],
  authors: [{ name: "R. Akilanethran" }],
  openGraph: {
    title: "R. Akilanethran | Full Stack Developer",
    description: "Computer Science Engineering student passionate about software development, AI/ML, and building intelligent, scalable digital experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Akilanethran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "R. Akilanethran | Full Stack Developer",
    description: "Computer Science Engineering student passionate about software development, AI/ML, and building intelligent, scalable digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-[var(--text)] selection:bg-cyan-500/30 selection:text-cyan-200">
        <ThemeProvider>
          <ParticleBackground />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
