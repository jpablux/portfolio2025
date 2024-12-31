import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the cutting-edge technologies and methodologies shaping the future of web development...',
    date: 'June 15, 2023',
    readTime: '5 min read',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Web Development', 'Trends'],
  },
  {
    id: 2,
    title: 'Mastering React: Advanced Patterns and Best Practices',
    excerpt: 'Dive deep into advanced React concepts and learn how to write more efficient and maintainable code...',
    date: 'July 1, 2023',
    readTime: '8 min read',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'JavaScript'],
  },
  // Add more blog posts here
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Blog() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl font-bold text-foreground"
      >
        Blog
      </motion.h1>
      <motion.div
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-2"
      >
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            className="bg-card text-card-foreground rounded-2xl shadow-sm overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-primary hover:underline">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-center">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          View All Posts
        </button>
      </motion.div>
    </motion.div>
  )
}

