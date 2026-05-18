import { useState, useEffect, useCallback } from "react";
import BookForm from "./BookForm";
import BookCard from "./BookCard";
import {
  getBooks,
  createBook,
  deleteBook as apiDeleteBook,
  updateBook as apiUpdateBook,
} from "../services/bookService";
import { Loader2, PlusCircle } from "lucide-react";

function Books() {
  const [books, setBooks] = useState([]);
  const [nomi, setNomi] = useState("");
  const [muallif, setMuallif] = useState("");
  const [sahifasi, setSahifasi] = useState("");
  const [janr, setJanr] = useState("");
  const [editingBookId, setEditingBookId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    const bookData = { nomi, muallif, sahifasi, janr };
    try {
      if (editingBookId) {
        await apiUpdateBook(editingBookId, bookData);
        setEditingBookId(null);
      } else {
        await createBook(bookData);
      }
      setNomi("");
      setMuallif("");
      setSahifasi("");
      setJanr("");
      fetchBooks();
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const handleEditBook = (book) => {
    setNomi(book.nomi);
    setMuallif(book.muallif);
    setSahifasi(book.sahifasi);
    setJanr(book.janr);
    setEditingBookId(book._id || book.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteBook = async (id) => {
    if (window.confirm("Rostdan ham ushbu kitobni o'chirmoqchimisiz?")) {
      try {
        await apiDeleteBook(id);
        fetchBooks();
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
            Kitoblar <PlusCircle className="text-yellow-400" />
          </h1>
          <p className="text-gray-400 text-lg">Kutubxonadagi barcha kitoblar ro'yxati</p>
        </div>
        <div className="h-1 flex-grow bg-gray-800 rounded-full hidden md:block mx-8"></div>
      </div>

      <BookForm
        nomi={nomi}
        setNomi={setNomi}
        muallif={muallif}
        setMuallif={setMuallif}
        sahifasi={sahifasi}
        setSahifasi={setSahifasi}
        janr={janr}
        setJanr={setJanr}
        handleSubmit={handleBookSubmit}
        editingId={editingBookId}
      />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-yellow-400" size={48} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.length > 0 ? (
            books.map((book) => (
              <BookCard
                key={book._id || book.id}
                book={book}
                editBook={handleEditBook}
                deleteBook={handleDeleteBook}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-gray-800 rounded-3xl border-2 border-dashed border-gray-700">
              <p className="text-gray-500 text-xl italic">Hozircha kitoblar mavjud emas.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Books;
