import { useState, useEffect } from "react";
import "./App.css";
import BookForm from "./components/Book/BookForm";
import BookCard from "./components/Book/BookCard";
import UserForm from "./components/User/UserForm";
import UserCard from "./components/User/UserCard";
import {
  getBooks,
  createBook,
  deleteBook as apiDeleteBook,
  updateBook as apiUpdateBook,
} from "./components/services/bookService";
import {
  getUsers,
  createUser,
  deleteUser as apiDeleteUser,
  updateUser as apiUpdateUser,
} from "./components/services/userService";

function App() {
  // Books state
  const [books, setBooks] = useState([]);
  const [nomi, setNomi] = useState("");
  const [muallif, setMuallif] = useState("");
  const [sahifasi, setSahifasi] = useState("");
  const [janr, setJanr] = useState("");
  const [editingBookId, setEditingBookId] = useState(null);

  // Users state
  const [users, setUsers] = useState([]);
  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [yosh, setYosh] = useState("");
  const [email, setEmail] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);

  // Other UI state
  const [isDark, setIsDark] = useState(false);

  // Fetch data
  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchBooks();
      await fetchUsers();
    };
    loadData();
  }, []);

  // Book CRUD Handlers
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
  };

  const handleDeleteBook = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await apiDeleteBook(id);
        fetchBooks();
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  // User CRUD Handlers
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const userData = { ism, familiya, yosh: Number(yosh), email };
    try {
      if (editingUserId) {
        await apiUpdateUser(editingUserId, userData);
        setEditingUserId(null);
      } else {
        await createUser({ ...userData, parol: "default123" });
      }
      setIsm("");
      setFamiliya("");
      setYosh("");
      setEmail("");
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEditUser = (user) => {
    setIsm(user.ism);
    setFamiliya(user.familiya);
    setYosh(user.yosh);
    setEmail(user.email);
    setEditingUserId(user._id || user.id);
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await apiDeleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>
      <header className="bg-indigo-700 py-6 shadow-lg mb-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Book & User Management
          </h1>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Books Section */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl font-bold">Books CRUD</h2>
              <div className="h-1 grow bg-indigo-200 rounded"></div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-gray-500 italic">No books found.</p>
              )}
            </div>
          </section>

          {/* Users Section */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl font-bold">Users CRUD</h2>
              <div className="h-1 grow bg-blue-200 rounded"></div>
            </div>

            <UserForm
              ism={ism}
              setIsm={setIsm}
              familiya={familiya}
              setFamiliya={setFamiliya}
              yosh={yosh}
              setYosh={setYosh}
              email={email}
              setEmail={setEmail}
              handleSubmit={handleUserSubmit}
              editingId={editingUserId}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {users.length > 0 ? (
                users.map((user) => (
                  <UserCard 
                    key={user._id || user.id} 
                    user={user} 
                    editUser={handleEditUser} 
                    deleteUser={handleDeleteUser} 
                  />
                ))
              ) : (
                <p className="text-gray-500 italic">No users found.</p>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
