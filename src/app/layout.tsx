import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import CursorLoader from '@/components/CursorLoader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Suvaditya Roy | Cyber Security Engineer',
  description:
    'Cyber Security Engineer specializing in AWS and Azure cloud security, IAM and privileged access management, CyberArk PAM/EPM exposure, vulnerability assessment support, security monitoring, and automation with Python and AWS tooling.',
  openGraph: {
    title: 'Suvaditya Roy | Cyber Security Engineer',
    description:
      'Cyber Security Engineer specializing in AWS and Azure cloud security, IAM and privileged access management, CyberArk PAM/EPM exposure, vulnerability assessment support, security monitoring, and automation with Python and AWS tooling.',
    url: 'https://suvadityaroy.tech',
    siteName: 'Suvaditya Roy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Suvaditya Roy — Cyber Security Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suvaditya Roy | Cyber Security Engineer',
    description:
      'Cyber Security Engineer specializing in AWS and Azure cloud security, IAM and privileged access management, CyberArk PAM/EPM exposure, vulnerability assessment support, security monitoring, and automation with Python and AWS tooling.',
    creator: '@suvadityaroy',
  },
  metadataBase: new URL('https://suvadityaroy.tech'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
        }}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ThemeProvider>
            {children}
            <CursorLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
