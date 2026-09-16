import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  Share2,
  ChevronRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import {
  getPostBySlug,
  getRelatedPosts,
  getPosts,
  formatDate,
  getReadingTime,
  stripHtml,
  extractFeaturedImageUrl,
  extractCategoryName,
  extractAuthorName,
} from '@/lib/wordpress';
import EmergencyBanner from '@/components/EmergencyBanner';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | GSHSB Blog',
      description: 'The requested article could not be located.',
    };
  }

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 160);
  const imageUrl = extractFeaturedImageUrl(post);

  return {
    title: `${title} | GSHSB Blog`,
    description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(params.slug);
  const categoryName = extractCategoryName(post);
  const authorName = extractAuthorName(post);
  const featuredImage = extractFeaturedImageUrl(post);
  const readingTime = getReadingTime(post.content.rendered);
  const formattedDate = formatDate(post.date);
  const cleanTitle = stripHtml(post.title.rendered);
  const cleanExcerpt = stripHtml(post.excerpt.rendered);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cleanTitle,
    description: cleanExcerpt,
    image: [featuredImage],
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: 'Senior Gas Safe Engineer',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GSHSB Birmingham',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gshsb.co.uk/logo%20for%20dark%20theme.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gshsb.co.uk/blog/${params.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://gshsb.co.uk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://gshsb.co.uk/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cleanTitle,
        item: `https://gshsb.co.uk/blog/${params.slug}`,
      },
    ],
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${cleanTitle} - Read on GSHSB: https://gshsb.co.uk/blog/${params.slug}`
  )}`;

  return (
    <article className="space-y-16 pb-20 site-container">
      {/* Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Top Breadcrumb & Navigation */}
      <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400 border-b border-white/10 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2">
          <Link href="/" className="hover:text-[#e46222] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          <Link href="/blog" className="hover:text-[#e46222] transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-[#e46222] truncate max-w-[200px] sm:max-w-xs">
            {cleanTitle}
          </span>
        </nav>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#e46222] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto space-y-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#520701]/90 border border-[#e46222]/50 text-[#e46222] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(228,98,34,0.3)]">
          <Flame className="w-3.5 h-3.5 animate-pulse" />
          <span>{categoryName}</span>
        </div>

        <h1 className="font-epic text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
          {cleanTitle}
        </h1>

        {cleanExcerpt && (
          <p className="text-base sm:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            {cleanExcerpt}
          </p>
        )}

        {/* Metadata Bar (Author, Date, Read Time, Share) */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-gray-400 font-mono border-y border-white/10 py-3.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#520701] border border-[#e46222]/40 flex items-center justify-center text-xs text-[#e46222]">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="text-white font-medium">{authorName}</span>
          </div>

          <span>•</span>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#e46222]" />
            <span>{formattedDate}</span>
          </div>

          <span>•</span>

          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#e46222]" />
            <span>{readingTime}</span>
          </div>

          <span>•</span>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </a>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="max-w-5xl mx-auto">
        <div className="relative h-[320px] sm:h-[480px] lg:h-[560px] rounded-24 overflow-hidden border border-white/10 shadow-2xl shadow-black/90">
          <Image
            src={featuredImage}
            alt={cleanTitle}
            fill
            className="object-cover contrast-110 brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Post Content Layout */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Rendered HTML Content from Headless WordPress */}
        <div
          className="prose-gshsb"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* In-Article Action Box */}
        <div className="p-8 rounded-24 bg-gradient-to-r from-[#520701] to-[#120506] border border-[#e46222]/50 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#e46222] uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>BIRMINGHAM HEATING SPECIALISTS</span>
          </div>

          <h3 className="font-epic text-2xl font-bold text-white">
            Need Professional Assistance With Your Heating or Plumbing?
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed font-light">
            Our Gas Safe registered engineers (#948123) are available 24/7 across Birmingham for emergency leak repair, new boiler installations, and free quotes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="tel:07900401035"
              className="btn-emergency-pill text-xs flex items-center gap-2 uppercase tracking-wider"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              <span>Call +44 7900 401035</span>
            </a>

            <Link
              href="/contact-us"
              className="glass-card px-6 py-3 text-xs font-semibold text-white border border-white/10 hover:border-[#e46222] transition-colors"
            >
              Book Inspection Online
            </Link>
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-white/10">
          <div className="relative w-20 h-20 rounded-24 overflow-hidden border-2 border-[#e46222] shrink-0 bg-[#520701]">
            <Image
              src="/boiler-repair-tech.webp"
              alt={authorName}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h4 className="font-epic text-lg font-bold text-white">
                {authorName}
              </h4>
              <span className="text-[11px] font-mono text-[#e46222] px-2 py-0.5 rounded bg-[#520701]/80 border border-[#e46222]/30">
                Gas Safe #948123
              </span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Senior Gas and Heating Engineer at GSHSB with over 10 years of diagnostic experience across residential and commercial boiler systems in Birmingham and the West Midlands.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto space-y-6 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="font-epic text-2xl sm:text-3xl font-bold text-white tracking-tight">
              RELATED ARTICLES
            </h2>
            <Link
              href="/blog"
              className="text-xs font-semibold text-[#e46222] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="glass-card p-5 flex flex-col justify-between group hover:border-[#e46222]/60 transition-all h-full"
              >
                <div className="space-y-3">
                  <div className="relative h-40 rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={extractFeaturedImageUrl(rel)}
                      alt={stripHtml(rel.title.rendered)}
                      fill
                      className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <span className="text-[10px] font-mono text-[#e46222] uppercase block">
                    {extractCategoryName(rel)}
                  </span>

                  <h3 className="font-epic text-base font-bold text-white group-hover:text-[#e46222] transition-colors leading-snug line-clamp-2">
                    {stripHtml(rel.title.rendered)}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {stripHtml(rel.excerpt.rendered)}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/5 text-xs font-semibold text-[#e46222] flex items-center justify-between">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Emergency Callout Banner */}
      <EmergencyBanner />
    </article>
  );
}
