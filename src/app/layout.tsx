import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FireEmbersCanvas from '@/components/FireEmbersCanvas';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Consent Mode v2 Initialization (must precede gtag.js) */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            var initialConsent = {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            };

            try {
              var saved = localStorage.getItem('gshsb_cookie_consent');
              if (saved) {
                var parsed = JSON.parse(saved);
                if (parsed.analytics) {
                  initialConsent.analytics_storage = 'granted';
                }
                if (parsed.marketing) {
                  initialConsent.ad_storage = 'granted';
                  initialConsent.ad_user_data = 'granted';
                  initialConsent.ad_personalization = 'granted';
                }
              }
            } catch (e) {}

            gtag('consent', 'default', initialConsent);
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RQBL2ZEL35"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQBL2ZEL35');
          `}
        </Script>
      </head>
      <body className="bg-[#000000] text-white min-h-screen flex flex-col relative antialiased">
        <SmoothScroll />
        <FireEmbersCanvas />
        <Navbar />
        <main className="flex-grow relative z-10 pt-24">
          {children}
        </main>
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}

