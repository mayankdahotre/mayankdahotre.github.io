import { motion } from "framer-motion";
import { blogPosts } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Blog({ blogRef }) {
  const { theme } = useTheme();

  return (
    <section
      ref={blogRef}
      className="relative px-6 py-20 sm:px-10 lg:px-20"
      id="blog"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className={`mb-10 font-display text-5xl tracking-wider sm:text-6xl ${theme.heading}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </motion.h2>

        <div className="space-y-5">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className={theme.projectCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className={`text-lg ${theme.projectTitle}`}>{post.title}</h3>
                <span className={`text-xs ${theme.muted}`}>{post.date}</span>
              </div>
              <p className={`mb-3 text-sm leading-relaxed ${theme.muted}`}>
                {post.excerpt}
              </p>
              <a href={post.link} className={`text-sm font-emphasis ${theme.projectLink}`}>
                Read more →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
