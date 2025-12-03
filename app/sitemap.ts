import { MetadataRoute } from 'next'
import { SERVICES, BLOG_POSTS } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://next-health-demo.com'

    const routes = [
        '',
        '/about',
        '/services',
        '/blog',
        '/contact',
        '/pricing',
        '/schedule',
        '/newsletter',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const serviceRoutes = SERVICES.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...serviceRoutes, ...blogRoutes]
}
