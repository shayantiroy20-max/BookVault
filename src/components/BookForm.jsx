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
      className="bg-white p-6 rounded-xl shadow-md mb-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className="border p-2 rounded"
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
          className="border p-2 rounded"
        />
        <select
          name="status"
          value={book.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Read</option>
          <option>Unread</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={book.description}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}
export default BookForm;