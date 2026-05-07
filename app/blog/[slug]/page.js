import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPost, getPosts } from '../../../lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — NeuralHub`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="article-layout">
      <header className="article-header">
        <Link href="/blog" className="article-back">← Volver a artículos</Link>
        <h1 className="article-title">{post.title}</h1>
        <div className="article-info">
          <span className="article-tag">{post.category || 'IA Tools'}</span>
          <span>{post.date}</span>
          <span>{post.readTime || '5 min de lectura'}</span>
        </div>
      </header>

      <div className="article-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
