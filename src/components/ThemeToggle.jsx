import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-gray-900 dark:text-white" />
      ) : (
        <Moon className="h-6 w-6 text-gray-900 dark:text-white" />
      )}
    </button>
  )
}

