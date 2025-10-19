export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auot px-4 py-3 text-center text-gray-500 text-sm">
        <p>
          Built with{" "}
          <span className="text-blue-400">React</span> +{" "}
          <span className="text-sky-400">TailwindCSS</span> +{" "}
          <span className="text-pink-400">Motion</span> - @{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}