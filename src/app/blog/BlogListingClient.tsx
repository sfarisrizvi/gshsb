'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  BookOpen,
  User,
  ChevronRight,
  Filter,
} from 'lucide-react';
import {
  WPPost,
  WPCategory,
  formatDate,
  getReadingTime,
  stripHtml,
  extractFeaturedImageUrl,
  extractCategoryName,
  extractAuthorName,
} from '@/lib/wordpress';
import EmergencyBanner from '@/components/EmergencyBanner';

interface BlogListingClientProps {
  initialPosts: WPPost[];
  categories: WPCategory[];
}

export default function BlogListingClient({
  initialPosts,
  categories,
}: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter posts based on category and search query
  const filteredPosts = initialPosts.filter((post) => {
    // Category match
    const categoryTerms = post._embedded?.['wp:term']?.[0] || [];
    const matchesCategory =
      selectedCategory === 'all' ||
      categoryTerms.some((cat) => cat.slug === selectedCategory);

    // Search query match
    const titleText = post.title?.rendered || '';
    const excerptText = post.excerpt?.rendered || '';
    const matchesSearch =
      !searchQuery.trim() ||
      titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerptText.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const standardPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="space-y-16 pb-20 site-container">
      {/* Hero Header Section */}
      <section className="relative pt-8 overflow-hidden">
        <div className="glass-card-flame p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#520701] border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222]">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>GSHSB KNOWLEDGE BASE & UPDATES</span>
            </div>

            <h1 className="font-epic text-4xl sm:text-6xl font-black text-white leading-tight">
              BIRMINGHAM HEATING, GAS <br />
              <span className="text-gradient-flame">& PLUMBING INSIGHTS</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Expert advice, Gas Safe regulatory updates, boiler maintenance tips, and luxury bathroom design guides curated by senior heating engineers.
            </p>

            {/* Search Input Bar */}
            <div className="pt-2 max-w-xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search boiler tips, plumbing leaks, cooker guides..."
                  className="w-full bg-[#0d0d12]/90 border border-white/10 rounded-24 pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#e46222] transition-colors shadow-lg shadow-black/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs font-mono text-gray-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="flex flex-wrap items-center gap-2.5 pt-2">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5 text-[#e46222]" />
          Topics:
        </span>

        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
            selectedCategory === 'all'
              ? 'bg-[#e46222] text-white shadow-[0_0_15px_rgba(228,98,34,0.5)]'
              : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
          }`}
        >
          All Articles ({initialPosts.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === cat.slug
                ? 'bg-[#e46222] text-white shadow-[0_0_15px_rgba(228,98,34,0.5)]'
                : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </section>

      {/* Zero Results State */}
      {filteredPosts.length === 0 && (
        <div className="glass-card p-12 text-center space-y-4 max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-[#e46222] mx-auto opacity-75" />
          <h3 className="font-epic text-xl font-bold text-white">No Articles Found</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            No articles match your search query "{searchQuery}". Try selecting another category or clear your search filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="btn-emergency-pill text-xs inline-block"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Featured Article Card */}
      {featuredPost && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e46222] animate-pulse" />
            <span className="text-xs font-mono text-[#e46222] uppercase tracking-widest font-bold">
              FEATURED STORY
            </span>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="glass-card-flame p-6 sm:p-10 block group hover:border-[#e46222] transition-all overflow-hidden relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Featured Image */}
              <div className="lg:col-span-6 relative h-64 sm:h-96 rounded-24 overflow-hidden border border-white/10">
                <Image
                  src={extractFeaturedImageUrl(featuredPost)}
                  alt={stripHtml(featuredPost.title.rendered)}
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#520701]/90 border border-[#e46222]/50 text-[#e46222] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    {extractCategoryName(featuredPost)}
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#e46222]" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e46222]" />
                    {getReadingTime(featuredPost.content.rendered)}
                  </span>
                </div>

                <h2 className="font-epic text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#e46222] transition-colors leading-snug">
                  {stripHtml(featuredPost.title.rendered)}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base line-clamp-3 leading-relaxed font-light">
                  {stripHtml(featuredPost.excerpt.rendered)}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#520701] border border-[#e46222]/40 flex items-center justify-center text-xs text-[#e46222]">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-300 font-medium">
                      {extractAuthorName(featuredPost)}
                    </span>
                  </div>

                  <span className="btn-emergency-pill text-xs flex items-center gap-2 uppercase tracking-wider">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Standard Articles Grid */}
      {standardPosts.length > 0 && (
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-epic text-2xl font-bold text-white tracking-tight">
              LATEST ARTICLES
            </h2>
            <span className="text-xs text-gray-400 font-mono">
              Showing {standardPosts.length} post{standardPosts.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="glass-card p-6 flex flex-col justify-between group hover:border-[#e46222]/60 transition-all h-full"
              >
                <div className="space-y-4">
                  {/* Thumbnail */}
                  <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={extractFeaturedImageUrl(post)}
                      alt={stripHtml(post.title.rendered)}
                      fill
                      className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0f0f13]/90 border border-white/10 text-gray-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md">
                        {extractCategoryName(post)}
                      </span>
                    </div>
                  </div>

                  {/* Date & Read Time */}
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 font-mono pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#e46222]" />
                      {formatDate(post.date)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#e46222]" />
                      {getReadingTime(post.content.rendered)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-epic text-lg font-bold text-white group-hover:text-[#e46222] transition-colors leading-snug line-clamp-2">
                    {stripHtml(post.title.rendered)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {stripHtml(post.excerpt.rendered)}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#e46222]">
                  <span className="group-hover:underline underline-offset-4">
                    Read Article
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Emergency Callout Banner */}
      <EmergencyBanner />
    </div>
  );
}
