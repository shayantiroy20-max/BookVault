import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load Books
  useEffect(() => {
    const savedBooks =
      JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
  }, []);

  // Save Books
  useEffect(() => {
    localStorage.setItem(
      "books",
      JSON.stringify(books)
    );
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) =>
        book.id === updatedBook.id
          ? updatedBook
          : book
      )
    );

    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(
      books.filter((book) => book.id !== id)
    );
  };

  const readBooks = books.filter(
    (book) => book.status === "Read"
  ).length;

  const unreadBooks = books.filter(
    (book) => book.status === "Unread"
  ).length;

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-black"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        totalBooks={books.length}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
            📚 Welcome to BookVault
          </h1>

          <p className="text-base sm:text-lg opacity-95">
            Organize, track and manage your personal library
            with a beautiful and modern dashboard.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-gray-500">
              Total Books
            </h3>

            <p className="text-4xl font-bold text-indigo-600">
              {books.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-gray-500">
              Read Books
            </h3>

            <p className="text-4xl font-bold text-green-600">
              {readBooks}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all">
            <h3 className="text-gray-500">
              Unread Books
            </h3>

            <p className="text-4xl font-bold text-red-600">
              {unreadBooks}
            </p>
          </div>

        </div>

        {/* Form */}
        <BookForm
          addBook={addBook}
          updateBook={updateBook}
          editingBook={editingBook}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {books.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <h2
                className={`text-3xl font-bold ${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                📚 No Books Yet
              </h2>

              <p
                className={`mt-2 ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                }`}
              >
                Add your first book and start building
                your personal library.
              </p>
            </div>
          ) : (
            books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onEdit={setEditingBook}
                onDelete={deleteBook}
              />
            ))
          )}

        </div>

        {/* Footer */}
        <footer
          className={`text-center mt-12 py-6 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-500"
          }`}
        >
          © 2026 BookVault • Built with React, Vite &
          Tailwind CSS
        </footer>

      </div>
    </div>
  );
}
export default Home;