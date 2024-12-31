import { motion } from 'framer-motion'
import { X, Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar({ isOpen, onClose, isDark, onThemeToggle }) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-50"
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-gray-900 dark:text-white" />
        </button>
        <nav className="mt-8">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-8 left-4 right-4">
          <button
            onClick={onThemeToggle}
            className="w-full px-4 py-2 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg transition-colors"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-gray-900 dark:text-white" />
            ) : (
              <Moon className="h-5 w-5 text-gray-900 dark:text-white" />
            )}
            <span className="text-gray-900 dark:text-white">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

