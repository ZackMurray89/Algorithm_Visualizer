export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Algorithm Visualizer
        </h1>

        {/* Navigation Placeholder */}
        <nav className="hidden sm:flex gap-4 text-sm">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            About
          </a>
        </nav>
      </div>
    </header>
  )
}