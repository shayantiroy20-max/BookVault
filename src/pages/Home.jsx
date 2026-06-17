import { useState } from "react";
import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import BookCard from "../components/BookCard";
function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const addBook = (book) => {
    setBooks([...books, book]);
  };
  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
    setEditingBook(null);
  };
  const deleteBook = (id) => {
    setBooks(
      books.filter((book) => book.id !== id)
    );
  };
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    <Navbar search={search} setSearch={setSearch} />
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 mb-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-3">
          📚 Welcome to BookVault
        </h1>
        <p className="text-lg opacity-90">
          Manage, organize and track your favorite books in one place.
        </p>
      </div>
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-gray-500">Total Books</h3>
          <p className="text-4xl font-bold text-blue-600">
            {books.length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-gray-500">Read Books</h3>
          <p className="text-4xl font-bold text-green-600">
            {books.filter(book => book.status === "Read").length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-gray-500">Unread Books</h3>
          <p className="text-4xl font-bold text-red-600">
            {books.filter(book => book.status === "Unread").length}
          </p>
        </div>
      </div>
      {/* Form */}
      <BookForm
        addBook={addBook}
        updateBook={updateBook}
        editingBook={editingBook}
      />
      {/* Book Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredBooks.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <h2 className="text-2xl font-bold text-gray-600">
              📚 No Books Found
            </h2>
            <p className="text-gray-500 mt-2">
              Add your first book to start building your library.
            </p>
          </div>
        ) : (
          filteredBooks.map((book) => (
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
      <footer className="text-center mt-12 py-6 text-gray-500">
        © 2026 BookVault | Built with React & Tailwind CSS
      </footer>

    </div>
  </div>
);
}
export default Home;