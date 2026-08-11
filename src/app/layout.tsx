import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FireEmbersCanvas from '@/components/FireEmbersCanvas';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GSHSB | Gas Services & Heating Solutions Birmingham',
  description: 'Birmingham’s premier Gas Safe registered heating and plumbing engineers. Specialist boiler installation, emergency plumbing, gas cooker fitting, and luxury bathroom installations.',
  keywords: [
    'Gas Safe Engineer Birmingham',
    'Boiler Installation Birmingham',
    'Emergency Plumber Birmingham',
    'Cooker Installation Birmingham',
    'Bathroom Fitting Birmingham',
    'GSHSB Heating'
  ],
  authors: [{ name: 'GSHSB Team' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'GSHSB | Gas Services & Heating Solutions Birmingham',
    description: 'Cinematic, reliable gas engineering, boiler installations, emergency plumbing, and luxury bathroom fitting in Birmingham.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'GSHSB',
  },
};

import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#000000] text-white min-h-screen flex flex-col relative antialiased">
        <SmoothScroll />
        <FireEmbersCanvas />
        <Navbar />
        <main className="flex-grow relative z-10 pt-24">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
