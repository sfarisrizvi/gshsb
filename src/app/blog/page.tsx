import React from 'react';
import type { Metadata } from 'next';
import { getPosts, getCategories } from '@/lib/wordpress';
import BlogListingClient from './BlogListingClient';

export const metadata: Metadata = {
  title: 'Heating, Boiler & Plumbing Blog Birmingham | GSHSB Insights',
  description: 'Expert advice on new boiler installations, central heating diagnostics, emergency leak repairs, Gas Safe regulations, and bathroom design in Birmingham.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'GSHSB Heating & Plumbing Blog Birmingham',
    description: 'Practical guides and expert articles written by certified Gas Safe engineers in Birmingham.',
    url: '/blog',
    type: 'website',
  },
};

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts({ perPage: 20 }),
    getCategories(),
  ]);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GSHSB Heating, Boiler & Plumbing Blog',
    description: 'Expert advice and practical homeowner guides on heating systems, boiler installations, plumbing emergencies, and bathroom renovations in Birmingham.',
    url: 'https://gshsb.co.uk/blog',
    publisher: {
      '@type': 'HVACBusiness',
      name: 'GSHSB Birmingham',
      telephone: '+447900401035',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogListingClient initialPosts={posts} categories={categories} />
    </>
  );
}
