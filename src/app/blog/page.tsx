import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

// Placeholder posts - can be replaced with CMS/database later
const placeholderPosts = [
  {
    slug: "welcome",
    title: "Welcome to the Rely Tech Serve Blog",
    excerpt:
      "Stay updated with insights on technology consulting, automation, and digital transformation.",
    date: "2025-02-28",
    author: "Rely Tech Serve",
  },
];

export const metadata = {
  title: "Blog | Rely Tech Serve",
  description:
    "Insights on technology consulting, automation, AI solutions, and digital transformation.",
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Insights on technology, automation, and digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {placeholderPosts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                      <DocumentTextIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-slate-600">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
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
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-slate-500">
            More posts coming soon. Admin interface for adding blog posts can be added later.
          </p>
        </div>
      </section>
    </div>
  );
}
