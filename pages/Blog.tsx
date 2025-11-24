import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-screen-xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">Auto<span className="text-red-600">Motive</span> News</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Latest trends, maintenance tips, and industry insights from our experts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 overflow-hidden relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-2">{post.date}</div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-red-600 cursor-pointer">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {post.summary}
              </p>
              <button className="text-red-600 font-bold text-sm hover:underline">Read Article &rarr;</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;