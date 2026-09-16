export interface WPFeaturedMedia {
  source_url: string;
  alt_text?: string;
  media_details?: {
    width?: number;
    height?: number;
  };
}

export interface WPAuthor {
  id?: number;
  name: string;
  avatar_urls?: Record<string, string>;
  description?: string;
  url?: string;
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
}

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPAuthor[];
    'wp:featuredmedia'?: WPFeaturedMedia[];
    'wp:term'?: WPTerm[][];
  };
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

const WP_BASE_URL = process.env.WORDPRESS_API_URL || 'https://blog.gshsb.co.uk/wp-json/wp/v2';

// ---------------------------------------------------------------------------
// High quality fallback articles during DNS propagation / server cold starts
// ---------------------------------------------------------------------------
export const FALLBACK_POSTS: WPPost[] = [
  {
    id: 101,
    date: '2026-02-15T09:00:00',
    modified: '2026-02-15T09:00:00',
    slug: 'prepare-boiler-for-cold-birmingham-winters',
    status: 'publish',
    type: 'post',
    link: 'https://blog.gshsb.co.uk/prepare-boiler-for-cold-birmingham-winters',
    title: {
      rendered: 'How to Prepare Your Boiler for Cold Birmingham Winters (2026 Checklist)',
    },
    excerpt: {
      rendered: 'Ensure your central heating system runs reliably when temperatures plummet across the West Midlands. Key maintenance checks, pressure adjustments, and condensate pipe protection.',
    },
    content: {
      rendered: `
        <p>Winter in Birmingham brings sub-zero temperatures and high heating demands across residential and commercial properties. A sudden boiler breakdown during a freeze is stressful, costly, and uncomfortable. Following our expert checklist will protect your heating system and prevent emergency callouts.</p>

        <h2>1. Check and Regulate Boiler Pressure</h2>
        <p>Your boiler pressure gauge should ideally rest between <strong>1.0 and 1.5 bar</strong> when the heating is cold. If pressure drops below 0.8 bar, your boiler may lockout with an error code (such as F22 on Vaillant or EA on Worcester Bosch). Use the external filling loop beneath your unit to top up cold water slowly until the needle settles at 1.2 bar.</p>

        <h2>2. Prevent Frozen Condensate Pipes</h2>
        <p>Modern high-efficiency condensing boilers discharge acidic wastewater through a plastic condensate pipe outside your property. In freezing weather, this external pipe can freeze solid, causing the boiler to shut down. To prevent this:</p>
        <ul>
          <li>Insulate all external white plastic pipework with waterproof Class-O external lagging.</li>
          <li>If frozen, gently pour warm (never boiling) water over the external pipe to thaw the ice blockage.</li>
        </ul>

        <h2>3. Bleed Radiators to Eliminate Cold Air Pockets</h2>
        <p>If your radiators are hot at the bottom but lukewarm or cold at the top, trapped air is preventing circulation. Use a brass radiator key to release trapped air until a drop of water appears. Always recheck your boiler pressure gauge afterward.</p>

        <blockquote>"Regular seasonal maintenance can cut annual fuel consumption by up to 15% while safeguarding your manufacturer warranty." — GSHSB Senior Gas Engineer</blockquote>

        <h2>4. Schedule an Annual Gas Safe Inspection</h2>
        <p>An annual boiler service by a certified Gas Safe registered technician verifies combustion ratio, tests safety limit thermostats, cleans the burner heat exchanger, and tests for carbon monoxide leaks.</p>
      `,
    },
    author: 1,
    featured_media: 1,
    categories: [1],
    tags: [10],
    _embedded: {
      author: [
        {
          name: 'Faris Rizvi',
          description: 'Senior Gas Safe Registered Engineer (#948123) with over a decade of heating diagnostics experience across Birmingham.',
        },
      ],
      'wp:featuredmedia': [
        {
          source_url: '/guide-boiler.jpg',
          alt_text: 'Boiler preparation and maintenance in Birmingham',
        },
      ],
      'wp:term': [
        [
          {
            id: 1,
            name: 'Boiler Advice',
            slug: 'boiler-advice',
          },
        ],
      ],
    },
  },
  {
    id: 102,
    date: '2026-02-08T11:30:00',
    modified: '2026-02-08T11:30:00',
    slug: 'gas-safety-certificates-cp12-landlord-guide-birmingham',
    status: 'publish',
    type: 'post',
    link: 'https://blog.gshsb.co.uk/gas-safety-certificates-cp12-landlord-guide-birmingham',
    title: {
      rendered: 'Gas Safety Certificates (CP12): What Every Landlord in Birmingham Needs to Know',
    },
    excerpt: {
      rendered: 'A complete legal guide for Birmingham and West Midlands landlords regarding annual gas safety inspections, tenant notices, penalties for non-compliance, and boiler checks.',
    },
    content: {
      rendered: `
        <p>Under the UK Gas Safety (Installation and Use) Regulations 1998, landlords have a strict legal duty to ensure all gas appliances, fittings, chimneys, and flues in their rental properties are maintained in a safe condition through an annual gas safety inspection.</p>

        <h2>What is a CP12 Certificate?</h2>
        <p>A Landlord Gas Safety Record (commonly referred to as a CP12) is the official documentation issued by a registered Gas Safe engineer upon completion of a thorough inspection. It certifies that gas appliances have been tested for operational safety, flue flow, ventilation, and combustion pressure.</p>

        <h2>Legal Obligations for Birmingham Landlords</h2>
        <ul>
          <li><strong>Annual Renewal:</strong> Inspections must be carried out every 12 months by a certified Gas Safe engineer.</li>
          <li><strong>Tenant Copy:</strong> Landlords must provide a copy of the current certificate to existing tenants within 28 days of inspection, and to new tenants prior to move-in.</li>
          <li><strong>Record Retention:</strong> Copies of certificates must be retained for at least two years.</li>
        </ul>

        <h2>What Does the Engineer Inspect?</h2>
        <p>During the CP12 inspection, our engineers carry out electronic flue gas analysis, check standing and working gas pressure, inspect safety relief valves, verify stability brackets on gas cookers, and conduct a gas tightness test on the mains gas meter to ensure zero gas leakage.</p>
      `,
    },
    author: 1,
    featured_media: 2,
    categories: [2],
    tags: [11],
    _embedded: {
      author: [
        {
          name: 'Faris Rizvi',
          description: 'Senior Gas Safe Registered Engineer (#948123) with over a decade of heating diagnostics experience across Birmingham.',
        },
      ],
      'wp:featuredmedia': [
        {
          source_url: '/engineer-heating.jpg',
          alt_text: 'Gas Safe engineer issuing CP12 certificate in Birmingham',
        },
      ],
      'wp:term': [
        [
          {
            id: 2,
            name: 'Gas Safety',
            slug: 'gas-safety',
          },
        ],
      ],
    },
  },
  {
    id: 103,
    date: '2026-01-29T14:15:00',
    modified: '2026-01-29T14:15:00',
    slug: 'why-radiators-cold-at-bottom-power-flushing',
    status: 'publish',
    type: 'post',
    link: 'https://blog.gshsb.co.uk/why-radiators-cold-at-bottom-power-flushing',
    title: {
      rendered: 'Why Is My Radiator Cold at the Bottom? Power Flushing vs Bleeding Explained',
    },
    excerpt: {
      rendered: 'Struggling with uneven heating or noisy pipework? Discover why black iron oxide sludge settles in radiators and how MagnaClean power flushing restores full heating efficiency.',
    },
    content: {
      rendered: `
        <p>One of the most frequent winter heating complaints from Birmingham homeowners is radiators that remain cold or lukewarm along the bottom while feeling hot at the top. Bleeding the radiator will not solve this issue. Here is why.</p>

        <h2>Air vs Sludge: The Crucial Difference</h2>
        <ul>
          <li><strong>Cold at the TOP:</strong> Indicates trapped air. Solution: Bleed the radiator using a radiator key.</li>
          <li><strong>Cold at the BOTTOM:</strong> Indicates heavy black magnetite sludge (corroded iron oxide) that has settled at the base of the radiator panel, blocking water circulation. Solution: Chemical power flush.</li>
        </ul>

        <h2>How Does a MagnaCleanse Power Flush Work?</h2>
        <p>A professional power flush connects a high-velocity pumping station directly to your central heating pipework. Using specialized chemical cleaners and powerful neodymium magnetic filters, the system flushes out accumulated sludge, rust, and scale from every single radiator without requiring them to be removed from the wall.</p>

        <blockquote>"Power flushing can restore up to 25% of heating capacity and significantly reduce the strain on your boiler pump and heat exchanger."</blockquote>
      `,
    },
    author: 1,
    featured_media: 3,
    categories: [3],
    tags: [12],
    _embedded: {
      author: [
        {
          name: 'Faris Rizvi',
          description: 'Senior Gas Safe Registered Engineer (#948123) with over a decade of heating diagnostics experience across Birmingham.',
        },
      ],
      'wp:featuredmedia': [
        {
          source_url: '/boiler-repair-tech.webp',
          alt_text: 'Radiator power flushing and magnetic filtration',
        },
      ],
      'wp:term': [
        [
          {
            id: 3,
            name: 'Plumbing & Heating',
            slug: 'plumbing-heating',
          },
        ],
      ],
    },
  },
  {
    id: 104,
    date: '2026-01-18T10:00:00',
    modified: '2026-01-18T10:00:00',
    slug: 'walk-in-wetroom-bathroom-design-birmingham',
    status: 'publish',
    type: 'post',
    link: 'https://blog.gshsb.co.uk/walk-in-wetroom-bathroom-design-birmingham',
    title: {
      rendered: 'The Complete Guide to Modern Walk-in Wetrooms in Birmingham Homes',
    },
    excerpt: {
      rendered: 'Transform small or spacious bathrooms into accessible, luxury wetrooms. Key considerations on tanking membranes, linear drainage, concealed valves, and tile choices.',
    },
    content: {
      rendered: `
        <p>Walk-in wetrooms have surged in popularity across modern Birmingham renovations. Combining seamless aesthetic minimalism with superior accessibility, a well-engineered wetroom adds substantial elegance and property value to your home.</p>

        <h2>1. Tanking: The Foundation of Any Wetroom</h2>
        <p>The most critical element of wetroom construction is waterproofing (tanking). At GSHSB, we install a continuous composite waterproof membrane over both the floor substrate and walls up to ceiling height. This prevents water vapour and moisture penetration from affecting structural timber joists.</p>

        <h2>2. Drainage Slopes & High-Flow Traps</h2>
        <p>A pre-formed gradient shower tray is installed flush with the floorboards to guide water towards a linear or point drain. High-capacity traps capable of clearing 30+ litres of water per minute ensure your shower area never pools water, even with high-pressure rainfall shower heads.</p>

        <h2>3. Choosing the Right Tiles</h2>
        <p>Porcelain tiles with an R10 or R11 slip rating are essential for safety in wet environments. Matte finishes and micro-cement surfaces provide both non-slip security and sleek designer appeal.</p>
      `,
    },
    author: 1,
    featured_media: 4,
    categories: [4],
    tags: [13],
    _embedded: {
      author: [
        {
          name: 'Faris Rizvi',
          description: 'Senior Gas Safe Registered Engineer (#948123) with over a decade of heating diagnostics experience across Birmingham.',
        },
      ],
      'wp:featuredmedia': [
        {
          source_url: '/guide-bathroom.jpg',
          alt_text: 'Luxury walk-in wetroom bathroom in Birmingham',
        },
      ],
      'wp:term': [
        [
          {
            id: 4,
            name: 'Bathroom Renovation',
            slug: 'bathroom-renovation',
          },
        ],
      ],
    },
  },
  {
    id: 105,
    date: '2026-01-05T16:00:00',
    modified: '2026-01-05T16:00:00',
    slug: 'gas-vs-electric-cooker-installation-costs-regulations',
    status: 'publish',
    type: 'post',
    link: 'https://blog.gshsb.co.uk/gas-vs-electric-cooker-installation-costs-regulations',
    title: {
      rendered: 'Electric vs Gas Cooker Installation: Costs, Efficiency & UK Regulations',
    },
    excerpt: {
      rendered: 'Comparing gas hobs and induction cookers for UK homes. Understand connection requirements, Gas Safe certification, electrical amperage, and running costs.',
    },
    content: {
      rendered: `
        <p>Choosing between a gas cooker and an induction or electric model depends on your kitchen layout, culinary preference, and existing utility supplies. Both choices have distinct installation and safety prerequisites under UK law.</p>

        <h2>Gas Cooker Installation Rules</h2>
        <p>In the UK, connecting any gas appliance must legally be carried out by a Gas Safe registered engineer. Freestanding gas cookers must be secured with an anti-tilt stability chain or bracket, and connected via a BS 669 certified flexible hose. The engineer tests the connection for gas tightness to verify that zero gas escapes.</p>

        <h2>Running Costs Comparison</h2>
        <p>Per kilowatt-hour (kWh), gas remains significantly cheaper than standard grid electricity in the UK, making gas hobs and ovens economical for large families who cook frequently. However, modern induction hobs offer superior thermal efficiency and rapid heat adjustment.</p>
      `,
    },
    author: 1,
    featured_media: 5,
    categories: [2],
    tags: [14],
    _embedded: {
      author: [
        {
          name: 'Faris Rizvi',
          description: 'Senior Gas Safe Registered Engineer (#948123) with over a decade of heating diagnostics experience across Birmingham.',
        },
      ],
      'wp:featuredmedia': [
        {
          source_url: '/guide-cooker.jpg',
          alt_text: 'Gas cooker and hob installation comparison',
        },
      ],
      'wp:term': [
        [
          {
            id: 2,
            name: 'Gas Safety',
            slug: 'gas-safety',
          },
        ],
      ],
    },
  },
  {
    id: 106,
    date: '2025-12-20T12:00:00',
    modified: '2025-12-20T12:00:00',
    slug: 'smart-thermostats-nest-vs-hive-vs-tado',
    status: 'publish',
    type: 'post',
    link: 'https://blog.gshsb.co.uk/smart-thermostats-nest-vs-hive-vs-tado',
    title: {
      rendered: 'Smart Thermostats in Birmingham: Nest vs Hive vs Tado Comparison',
    },
    excerpt: {
      rendered: 'Which smart thermostat saves the most energy on Birmingham heating systems? We compare OpenTherm compatibility, multizone control, app usability, and boiler synergy.',
    },
    content: {
      rendered: `
        <p>Upgrading from an old mechanical dial thermostat to a smart thermostat can reduce your annual heating consumption by up to 20%. But which system pairs best with your boiler setup?</p>

        <h2>1. Nest Learning Thermostat (Google)</h2>
        <p>Nest learns your routine automatically within a week and creates an efficient schedule. It supports OpenTherm modulation on compatible boilers (like Viessmann and Baxi), allowing the boiler to modulate flame height rather than simply turning on and off at full blast.</p>

        <h2>2. Hive Active Heating</h2>
        <p>Exceptionally popular in the UK and integrates effortlessly with British Gas smart meters and smart bulbs. Hive offers great scheduling flexibility and geolocation triggers that warm your home as you approach Birmingham.</p>

        <h2>3. Tado° Smart Radiator Valves</h2>
        <p>Tado excels in true room-by-room multizone control. By replacing standard radiator thermostatic valves with Tado Smart TRVs, you can set the spare bedroom to 16°C while keeping the nursery at 20°C and living room at 21°C.</p>
      `,
    },
    author: 1,
    featured_media: 6,
    categories: [1],
    tags: [15],
    _embedded: {
      author: [
        {
          name: 'Faris Rizvi',
          description: 'Senior Gas Safe Registered Engineer (#948123) with over a decade of heating diagnostics experience across Birmingham.',
        },
      ],
      'wp:featuredmedia': [
        {
          source_url: '/engineer-heating.jpg',
          alt_text: 'Smart thermostat installation in Birmingham',
        },
      ],
      'wp:term': [
        [
          {
            id: 1,
            name: 'Boiler Advice',
            slug: 'boiler-advice',
          },
        ],
      ],
    },
  },
];

export const FALLBACK_CATEGORIES: WPCategory[] = [
  { id: 1, name: 'Boiler Advice', slug: 'boiler-advice', count: 2, description: '', link: '', taxonomy: 'category' },
  { id: 2, name: 'Gas Safety', slug: 'gas-safety', count: 2, description: '', link: '', taxonomy: 'category' },
  { id: 3, name: 'Plumbing & Heating', slug: 'plumbing-heating', count: 1, description: '', link: '', taxonomy: 'category' },
  { id: 4, name: 'Bathroom Renovation', slug: 'bathroom-renovation', count: 1, description: '', link: '', taxonomy: 'category' },
];

// ---------------------------------------------------------------------------
// API Helper functions
// ---------------------------------------------------------------------------

async function fetchWP<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 second timeout

    const url = `${WP_BASE_URL}${endpoint}`;
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 }, // Revalidate every 60 seconds (Next.js ISR)
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`[WordPress API] Non-200 status (${res.status}) from ${url}. Using fallback.`);
      return fallback;
    }

    const data = await res.json();
    if (Array.isArray(data) && data.length === 0 && Array.isArray(fallback) && fallback.length > 0) {
      // If live WP exists but has 0 posts yet, provide sample content so UI doesn't look empty
      return fallback;
    }
    return data as T;
  } catch (err: any) {
    // Expected during DNS propagation / network delay
    return fallback;
  }
}

export async function getPosts(params?: {
  page?: number;
  perPage?: number;
  categorySlug?: string;
  search?: string;
}): Promise<WPPost[]> {
  const { page = 1, perPage = 10, categorySlug, search } = params || {};
  let endpoint = `/posts?_embed=1&per_page=${perPage}&page=${page}`;

  if (search) {
    endpoint += `&search=${encodeURIComponent(search)}`;
  }

  let posts = await fetchWP<WPPost[]>(endpoint, FALLBACK_POSTS);

  if (categorySlug && categorySlug !== 'all') {
    posts = posts.filter((post) => {
      const categoryTerms = post._embedded?.['wp:term']?.[0] || [];
      return categoryTerms.some((cat) => cat.slug === categorySlug);
    });
  }

  if (search) {
    const query = search.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.rendered.toLowerCase().includes(query) ||
        post.excerpt.rendered.toLowerCase().includes(query) ||
        post.content.rendered.toLowerCase().includes(query)
    );
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const endpoint = `/posts?slug=${encodeURIComponent(slug)}&_embed=1`;
  const posts = await fetchWP<WPPost[]>(endpoint, []);

  if (posts && posts.length > 0) {
    return posts[0];
  }

  // Check fallback posts
  const fallback = FALLBACK_POSTS.find((p) => p.slug === slug);
  return fallback || null;
}

export async function getCategories(): Promise<WPCategory[]> {
  const categories = await fetchWP<WPCategory[]>('/categories?per_page=100', FALLBACK_CATEGORIES);
  return categories.filter((c) => c.name.toLowerCase() !== 'uncategorized');
}

export async function getRelatedPosts(currentSlug: string, categoryId?: number): Promise<WPPost[]> {
  const allPosts = await getPosts({ perPage: 6 });
  return allPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);
}

// ---------------------------------------------------------------------------
// Text & Presentation formatting helpers
// ---------------------------------------------------------------------------

export function formatDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch (e) {
    return dateString;
  }
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
}

export function getReadingTime(content: string): string {
  const words = stripHtml(content).split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function extractFeaturedImageUrl(post: WPPost, fallbackUrl: string = '/guide-boiler.jpg'): string {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  if (media?.source_url) {
    return media.source_url;
  }
  return fallbackUrl;
}

export function extractCategoryName(post: WPPost): string {
  const categoryTerms = post._embedded?.['wp:term']?.[0];
  if (categoryTerms && categoryTerms.length > 0) {
    return categoryTerms[0].name;
  }
  return 'Heating & Plumbing';
}

export function extractAuthorName(post: WPPost): string {
  const author = post._embedded?.author?.[0];
  if (author?.name) {
    return author.name;
  }
  return 'GSHSB Senior Engineer';
}
