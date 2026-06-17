function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-5 text-white">
        <h2 className="text-xl sm:text-2xl font-bold">
          📖 {book.title}
        </h2>

        <p className="mt-1 opacity-90">
          ✍️ {book.author}
        </p>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Genre */}
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {book.genre}
          </span>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <p className="text-yellow-500 text-lg">
            {"⭐".repeat(Number(book.rating))}
          </p>
        </div>

        {/* Status */}
        <div className="mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              book.status === "Read"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {book.status === "Read"
              ? "✅ Read"
              : "📚 Unread"}
          </span>
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-xl p-4 mb-5">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {book.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            onClick={() => onEdit(book)}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => onDelete(book.id)}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            🗑 Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default BookCard;