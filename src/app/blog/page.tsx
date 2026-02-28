import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { sortedBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog | Rely Tech Serve",
  description:
    "Insights on AI, eCommerce, marketplaces, product management, and digital transformation from Rely Tech Serve.",
};

const POSTS_PER_PAGE = 12;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const totalPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const displayedPosts = sortedBlogPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Insights on AI, eCommerce, marketplaces, product management, and digital
            transformation.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {displayedPosts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <Link
                  href={post.external ? post.externalUrl! : `/blog/${post.slug}`}
                  target={post.external ? "_blank" : undefined}
                  rel={post.external ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                      <DocumentTextIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {post.topic}
                        </span>
                        {post.external && (
                          <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary-100 text-primary-700">
                            LinkedIn
                          </span>
                        )}
                      </div>
                      <h2 className="mt-2 text-xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-slate-600">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                        <span>{post.author}</span>
                        <span>•</span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        {post.external && (
                          <span className="text-primary-600 font-medium">→ Read on LinkedIn</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="mt-12 flex flex-wrap justify-center gap-2">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  ← Previous
                </Link>
              )}
              <span className="px-4 py-2 text-slate-600">
                Page {currentPage} of {totalPages}
              </span>
              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Next →
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}
