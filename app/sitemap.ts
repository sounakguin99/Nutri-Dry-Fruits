import { MetadataRoute } from 'next';
import { products } from '../components/data/products/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://naturesharvest.com'; // Adjust to your actual domain

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contactus',
    '/enquiry',
    '/faqs',
    '/privacy',
    '/products',
    '/store',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product pages
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...productPages];
}
