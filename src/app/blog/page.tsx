import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Blog | Redit E-Waste Recycling Chennai',
    description: 'Insights, updates, and news about e-waste management, sustainable recycling practices, and environmental protection in Chennai.',
};

import { getAllPosts } from '@/lib/blog';

const blogPosts = getAllPosts(['title', 'date', 'slug', 'author', 'image', 'excerpt', 'category']);

export default function BlogPage() {
    return (
        <main className="min-h-screen font-sans bg-bg-light">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#064E3B] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Blog</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Latest news, insights, and guides on eco-friendly e-waste management.
                    </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[100px]"></div>
            </section>

            {/* Blog Listings */}
            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                                <div className="aspect-[16/10] bg-gray-200 relative overflow-hidden">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                            <span className="text-sm font-medium">No Image</span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            {post.author}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                        Read Article
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination / Load More (Static for now) */}
                    <div className="mt-16 text-center">
                        <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            <Footer showCta={false} />
        </main>
    );
}
