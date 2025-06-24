import React from "react";
import { motion } from "motion/react";

const BlogCard = ({ blog, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer group h-full"
      onClick={() => onClick(blog)}
    >
      <div className="grid-default-color hover-animation h-full flex flex-col">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm">
              {blog.readTime}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/10 px-2 py-1 rounded-full text-xs text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-aqua transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="subtext mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-neutral-400">{blog.date}</span>
          <button className="text-aqua hover:text-mint transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
