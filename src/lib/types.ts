export type EnquiryStatus = "new" | "read" | "replied" | "archived";

export interface Enquiry {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
  status: EnquiryStatus;
  notes?: string;
  createdAt: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  imageUrl?: string;
  href?: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  capacity?: string;
  category: string;
  imageUrl: string;
  description?: string;
  year?: number;
  order: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  publishedAt: string;
  category?: string;
  href?: string;
}

export interface CrmBlogPost {
  id: string;
  slug: string;
  tag: string;
  date: string;
  isoDate: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  youtubeId?: string;
  sections: { heading: string; body: string }[];
  order: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company?: string;
  avatarUrl?: string;
  imageUrl?: string;
}

export interface SiteSettings {
  address: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
  href?: string;
  order: number;
}

export interface FeaturedHighlight {
  eyebrow: string;
  title: string;
  description: string;
  badgeLabel: string;
  badgeValue: string;
  badgeSuffix: string;
  gaugePercent: number;
  imageUrl?: string;
}

export interface FeaturesSection {
  highlight: FeaturedHighlight;
  cards: FeatureCard[];
}
