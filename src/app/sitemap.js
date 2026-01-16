export const dynamic = 'force-static';

export default function sitemap() {
    const baseUrl = 'https://your-domain.com'; // User needs to update this

    // Static routes
    const routes = [
        '',
        '/about',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    }));

    return routes;
}
