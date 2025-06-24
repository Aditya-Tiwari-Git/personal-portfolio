import React from "react";
import { motion } from "motion/react";

const BlogPost = ({ blog, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-aqua hover:text-mint transition-colors mb-6"
      >
        ← Back to Blog
      </button>

      <article className="grid-default-color">
        <div className="relative overflow-hidden rounded-lg mb-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/10 px-3 py-1 rounded-full text-sm text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex items-center gap-4 mb-6 text-neutral-400">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-neutral-300 leading-relaxed"
          />
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost;
