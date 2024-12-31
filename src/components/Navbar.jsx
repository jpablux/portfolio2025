import { Menu } from 'lucide-react'

export default function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">
          pabluxdev.
        </h1>
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </div>
    </nav>
  )
}




