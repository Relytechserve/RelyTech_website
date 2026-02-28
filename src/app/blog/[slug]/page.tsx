import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { getPostBySlug } from "@/data/blog";

export async function generateStaticParams() {
  const { blogPosts } = await import("@/data/blog");
  return blogPosts
    .filter((p) => !p.external)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Rely Tech Serve" };
  return { title: `${post.title} | Rely Tech Serve Blog` };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // External posts (LinkedIn) - redirect to LinkedIn
  if (post.external && post.externalUrl) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl font-bold text-navy-900">{post.title}</h1>
          <p className="mt-4 text-slate-600">{post.excerpt}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Read on LinkedIn
              <ArrowTopRightOnSquareIcon className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              <ArrowLeftIcon className="mr-2 w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Internal posts - show placeholder content (no full content in data yet)
  const content = post.content || `
    <p>${post.excerpt}</p>
    <p>Full article coming soon. For more insights on ${post.topic}, <a href="/contact">contact us</a> or explore our <a href="/services">services</a>.</p>
  `;

  return (
    <div>
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-300 hover:text-white mb-6"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          <span className="text-xs font-medium px-2 py-1 rounded bg-white/10 text-slate-300">
            {post.topic}
          </span>
          <h1 className="text-4xl font-bold text-white mt-4">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-slate-400">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg prose-slate max-w-none prose-headings:text-navy-900 prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </div>
  );
}
