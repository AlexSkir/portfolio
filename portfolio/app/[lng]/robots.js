export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://nextjs-portfolio-ydgz.onrender.com/sitemap.xml',
  };
}
