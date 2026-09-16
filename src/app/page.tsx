import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Gas Safe Heating Engineers & Emergency Plumbers Birmingham',
  description: 'Birmingham’s premier Gas Safe registered heating and plumbing engineers. 24/7 rapid response, boiler installations, cooker fittings & luxury bathrooms across West Midlands.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GSHSB | Gas Safe Heating Engineers & Emergency Plumbers Birmingham',
    description: 'Premier Gas Safe registered heating and plumbing engineers in Birmingham. 24/7 emergency response, combi boiler installations & luxury bathrooms.',
    url: '/',
    type: 'website',
  },
};

const homeFaqs = [
  {
    question: "Are your heating engineers Gas Safe registered in Birmingham?",
    answer: "Yes, 100%. All GSHSB technicians are fully Gas Safe registered (Registration ID #948123). We carry digital ID cards and issue official Gas Safe certificates upon completion of all boiler, cooker, and pipework installations."
  },
  {
    question: "How quickly can an emergency plumber arrive at my property?",
    answer: "Our average emergency response time across Birmingham and Greater West Midlands is 38 to 45 minutes. Our 24/7 WhatsApp and phone hotline dispatches nearest mobile engineers immediately."
  },
  {
    question: "What boiler brands do you install and service?",
    answer: "We are accredited installers for Worcester Bosch, Baxi, Vaillant, Ideal, and Viessmann systems. We provide up to 12-year manufacturer warranties on selected new A-rated combi and system boiler installations."
  },
  {
    question: "Do you offer free quotes for new bathroom installations?",
    answer: "Yes. We offer complimentary, no-obligation site surveys and 3D layout consultations for complete bathroom suite installations, wetrooms, and plumbing redesigns."
  }
];

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GSHSB Birmingham',
    url: 'https://gshsb.co.uk',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://gshsb.co.uk/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient faqs={homeFaqs} />
    </>
  );
}
