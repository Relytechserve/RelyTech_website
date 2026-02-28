import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Placeholder - replace with CMS/database
const posts: Record<
  string,
  { title: string; content: string; date: string; author: string }
> = {
  welcome: {
    title: "Welcome to the Rely Tech Serve Blog",
    date: "2025-02-28",
    author: "Rely Tech Serve",
    content: `
      <p>Welcome to the Rely Tech Serve blog. Here we'll share insights on:</p>
      <ul>
        <li>Technology consulting best practices</li>
        <li>Automation and AI solutions</li>
        <li>eCommerce and digital transformation</li>
        <li>Industry trends and updates</li>
      </ul>
      <p>Stay tuned for more content. In the future, we'll add an admin interface to manage blog posts with titles, content, featured images, author, date, and SEO metadata.</p>
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found | Rely Tech Serve" };
  return { title: `${post.title} | Rely Tech Serve Blog` };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-300 hover:text-white mb-6"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-slate-400">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg prose-slate max-w-none prose-headings:text-navy-900 prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </div>
  );
}
