function Navbar({ darkMode, setDarkMode, totalBooks }) {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">
            📚 BookVault
          </h1>

          <span className="bg-white text-indigo-600 px-3 py-1 rounded-full font-bold shadow">
            {totalBooks}
          </span>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white text-gray-800 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-md"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;