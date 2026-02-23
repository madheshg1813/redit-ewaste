import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { getPostBySlug, markdownToHtml } from '@/lib/blog';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = getPostBySlug(slug, ['title', 'meta_description']);

    if (!post) {
        return {
            title: 'Blog Post Not Found | Redit E-Waste Recycling',
        }
    }

    return {
        title: `${post.title} | Redit E-Waste Recycling`,
        description: post.meta_description || `Read about ${post.title} on Redit E-Waste Recycling blog.`,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = getPostBySlug(slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'image',
        'category',
    ]);

    if (!post) {
        notFound();
    }

    const content = await markdownToHtml(post.content || '');

    return (
        <main className="min-h-screen font-sans bg-bg-light">
            <Header />

            <article>
                {/* Header Area */}
                <div className="bg-[#064E3B] text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors mb-8 text-sm font-semibold">
                            <ArrowLeft size={16} />
                            Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-green-200 mb-6">
                            <span className="bg-white/10 px-3 py-1 rounded-full text-white font-medium">{post.category}</span>
                            <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <User size={14} />
                                {post.author}
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 -mt-10 relative z-20">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                        {post.image && (
                            <div className="aspect-video mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-50">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <div
                            className="prose prose-lg prose-green max-w-none text-gray-700 font-sans"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />

                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <div className="text-sm text-gray-500 font-medium">
                                Share this article:
                            </div>
                            <button className="flex items-center gap-2 text-primary font-bold hover:text-green-800 transition-colors">
                                <Share2 size={18} />
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer showCta={true} />
        </main>
    );
}
