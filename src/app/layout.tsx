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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gshsb.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'GSHSB | Gas Safe Heating Engineers & Emergency Plumbers Birmingham',
    template: '%s | GSHSB Birmingham',
  },
  description: 'Birmingham’s premier Gas Safe registered heating and plumbing engineers (#948123). 24/7 emergency plumbing, boiler installation, gas cooker fitting, and luxury bathroom installations.',
  keywords: [
    'Gas Safe Engineer Birmingham',
    'Boiler Installation Birmingham',
    'Emergency Plumber Birmingham',
    'Cooker Installation Birmingham',
    'Radiator Installation Birmingham',
    'Bathroom Fitting Birmingham',
    'GSHSB Heating Birmingham',
    'Combi Boiler Replacement Birmingham',
    'Gas Safety Certificate Birmingham'
  ],
  authors: [{ name: 'GSHSB Engineers', url: baseUrl }],
  creator: 'GSHSB (Gas Services & Heating Solutions Birmingham)',
  publisher: 'GSHSB',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GSHSB | Gas Safe Heating Engineers & Emergency Plumbers Birmingham',
    description: 'Birmingham’s premier Gas Safe registered heating and plumbing engineers. 24/7 rapid emergency plumbing, boiler replacement, and luxury bathrooms.',
    url: baseUrl,
    siteName: 'GSHSB Birmingham',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/boiler-repair-tech.webp',
        width: 1200,
        height: 630,
        alt: 'GSHSB Gas Safe Heating Engineers Birmingham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSHSB | Gas Safe Heating Engineers & Emergency Plumbers Birmingham',
    description: 'Premier Gas Safe registered heating and plumbing engineers in Birmingham. 24/7 emergency response.',
    images: ['/boiler-repair-tech.webp'],
  },
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

        {/* LocalBusiness / HVACBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'HVACBusiness',
                  '@id': `${baseUrl}/#business`,
                  name: 'GSHSB - Gas Services & Heating Solutions Birmingham',
                  alternateName: 'GSHSB Birmingham',
                  url: baseUrl,
                  logo: `${baseUrl}/logo%20for%20dark%20theme.svg`,
                  image: `${baseUrl}/boiler-repair-tech.webp`,
                  telephone: '+447900401035',
                  priceRange: '££',
                  description: 'Birmingham’s premier Gas Safe registered (#948123) heating and plumbing engineers. Specialist boiler installations, emergency repairs, gas cooker fittings, and luxury bathroom fitting.',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Birmingham',
                    addressRegion: 'West Midlands',
                    addressCountry: 'GB',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 52.4862,
                    longitude: -1.8904,
                  },
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                      ],
                      opens: '00:00',
                      closes: '23:59',
                    },
                  ],
                  areaServed: [
                    { '@type': 'City', name: 'Birmingham' },
                    { '@type': 'AdministrativeArea', name: 'West Midlands' },
                    { '@type': 'City', name: 'Solihull' },
                    { '@type': 'City', name: 'Sutton Coldfield' },
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Heating, Gas & Plumbing Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Boiler Installation & Replacement',
                          url: `${baseUrl}/boiler-installation`,
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: '24/7 Emergency Domestic Plumbing',
                          url: `${baseUrl}/domestic-plumbing`,
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Gas Cooker & Hob Installation',
                          url: `${baseUrl}/cooker-installation`,
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Radiator Installation & Power Flushing',
                          url: `${baseUrl}/radiator-installation`,
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Luxury Bathroom Installations',
                          url: `${baseUrl}/new-bathroom-installations`,
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
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

