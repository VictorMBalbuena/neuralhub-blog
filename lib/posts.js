import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content/posts');

export async function getPosts() {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(raw);
    return {
      slug: file.replace('.md', ''),
      title: data.title || 'Sin título',
      excerpt: data.excerpt || '',
      date: data.date || '',
      category: data.category || 'IA Tools',
      emoji: data.emoji || '🤖',
      readTime: data.readTime || '5 min',
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt || '',
    date: data.date || '',
    category: data.category || 'IA Tools',
    emoji: data.emoji || '🤖',
    readTime: data.readTime || '5 min',
    content,
  };
}
