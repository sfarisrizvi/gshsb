import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getPosts } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    try {
      const headersList = headers();
      const host = headersList.get('host');
      if (host) {
        const protocol = headersList.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
        baseUrl = `${protocol}://${host}`;
      }
    } catch (e) {
      // Fallback if headers not available
    }
  }

  if (!baseUrl) {
    baseUrl = 'https://gshsb.co.uk';
  }

  const lastModified = new Date();

  // Fetch WordPress blog posts for dynamic sitemap inclusion
  let blogPostRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPosts({ perPage: 100 });
    blogPostRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.modified ? new Date(post.modified) : lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (e) {
    // If WP API is unreachable during build, proceed with static routes
  }

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // Core Services
    {
      url: `${baseUrl}/domestic-plumbing`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/boiler-installation`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cooker-installation`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/radiator-installation`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/new-bathroom-installations`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Informational Guides & Articles
    {
      url: `${baseUrl}/new-boiler-installation-birmingham-guide`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/top-7-things-to-consider-before-a-new-bathroom-installation-in-birmingham`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/step-by-step-guide-to-cooker-installation`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Blog Hub
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    // Contact & Booking
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    ...blogPostRoutes,
  ];

  return routes;
}
