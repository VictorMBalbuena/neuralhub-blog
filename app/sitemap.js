import { getPosts } from '../lib/posts';

export default async function sitemap() {
  const posts = await getPosts();
  const base = 'https://neuralhub-blog.vercel.app';

  const postUrls = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...postUrls,
  ];
}