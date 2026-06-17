import { useEffect, useState } from "react";

function BookForm({ addBook, updateBook, editingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    status: "Unread",
    description: "",
  });

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBook) {
      updateBook(book);
    } else {
      addBook({
        ...book,
        id: Date.now(),
      });
    }

    setBook({
      title: "",
      author: "",
      genre: "",
      rating: "",
      status: "Unread",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-white/30 mb-8"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        {editingBook ? "✏️ Update Book" : "➕ Add New Book"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
          className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          required
          className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <select
          name="genre"
          value={book.genre}
          onChange={handleChange}
          required
          className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option value="">Select Genre</option>
          <option>Self Help</option>
          <option>Fiction</option>
          <option>Science</option>
          <option>Biography</option>
          <option>Technology</option>
        </select>

        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={book.rating}
          onChange={handleChange}
          required
          className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <select
          name="status"
          value={book.status}
          onChange={handleChange}
          className="border p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option>Read</option>
          <option>Unread</option>
        </select>

        <textarea
          name="description"
          rows="4"
          placeholder="Write a short description..."
          value={book.description}
          onChange={handleChange}
          className="border p-3 rounded-xl md:col-span-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
      >
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;