export async function GET() {
  try {
    const now = new Date().toISOString();

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://caritakip.net.tr</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>https://caritakip.net.tr/indir</loc>
          <lastmod>${now}</lastmod>
          <changefreq>yearly</changefreq>
          <priority>0.4</priority>
        </url>
        <url>
          <loc>https://caritakip.net.tr/hakkimizda</loc>
          <lastmod>${now}</lastmod>
          <changefreq>yearly</changefreq>
          <priority>0.4</priority>
        </url>
        <url>
          <loc>https://caritakip.net.tr/iletisim</loc>
          <lastmod>${now}</lastmod>
          <changefreq>yearly</changefreq>
          <priority>0.4</priority>
        </url>
      </urlset>`;

    return new Response(sitemapXml, {
      headers: { 'Content-Type': 'application/xml' },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap.', { status: 500 });
  }
}
