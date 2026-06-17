function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100">

      {/* Top Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-5 text-white">
        <h2 className="text-2xl font-bold truncate">
          📚 {book.title}
        </h2>

        <p className="opacity-90 mt-1">
          ✍️ {book.author}
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Genre */}
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {book.genre}
          </span>
        </div>
        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-xl">
            {"⭐".repeat(Number(book.rating))}
          </span>
        </div>
        {/* Status */}
        <div className="mb-4">
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              book.status === "Read"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {book.status === "Read"
              ? "✅ Read"
              : "📖 Unread"}
          </span>
        </div>
        {/* Description */}
        <div className="bg-gray-50 p-4 rounded-xl mb-5">
          <p className="text-gray-600 text-sm leading-relaxed">
            {book.description}
          </p>
        </div>
        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(book)}
            className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            🗑 Delete
          </button>

        </div>

      </div>
    </div>
  );
}
export default BookCard;