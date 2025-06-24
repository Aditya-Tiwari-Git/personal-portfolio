import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { myBlogs } from "../constants";
import BlogCard from "../components/BlogCard";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    // Update URL without page reload
    window.history.pushState({}, "", `#blog/${blog.slug}`);
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
    window.history.pushState({}, "", "#blog");
  };

  // Handle browser back/forward buttons and initial URL
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#blog/")) {
        const slug = hash.replace("#blog/", "");
        const blog = myBlogs.find((b) => b.slug === slug);
        if (blog) {
          setSelectedBlog(blog);
        } else {
          setSelectedBlog(null);
        }
      } else if (hash === "#blog") {
        setSelectedBlog(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    // Check initial URL
    const hash = window.location.hash;
    if (hash.startsWith("#blog/")) {
      const slug = hash.replace("#blog/", "");
      const blog = myBlogs.find((b) => b.slug === slug);
      if (blog) {
        setSelectedBlog(blog);
      }
    }

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <section id="blog" className="c-space section-spacing">
      <AnimatePresence mode="wait">
        {selectedBlog ? (
          <BlogPost
            key="blog-post"
            blog={selectedBlog}
            onBack={handleBackClick}
          />
        ) : (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-heading mb-4">My Blog</h2>
            <p className="subtext mb-8">
              Insights, tutorials, and thoughts on modern web development, AI
              automation, and technology trends.
            </p>

            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-12 h-[1px] w-full" />

            {/* Horizontal Scrolling Container */}
            <div className="blog-scroll-container">
              <div className="blog-scroll-wrapper">
                {myBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="blog-card-wrapper"
                  >
                    <BlogCard blog={blog} onClick={handleBlogClick} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll Hint */}
            <div className="flex items-center justify-center mt-4 text-neutral-500">
              <span className="text-sm">
                ← Scroll horizontally to see more blogs →
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
