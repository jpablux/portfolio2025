import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website with cart functionality and payment integration.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Vue.js', 'Firebase', 'Vuex'],
  },
  {
    title: 'Fitness Tracker',
    description: 'A mobile app for tracking workouts, nutrition, and progress with data visualization.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React Native', 'GraphQL', 'D3.js'],
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media managers with customizable widgets and reports.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Angular', 'TypeScript', 'Chart.js'],
  },
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

export default function Projects() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Recent Projects
      </motion.h1>
      <motion.div
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                View Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View All Projects
        </button>
      </motion.div>
    </motion.div>
  )
}



