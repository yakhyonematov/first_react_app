import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Books from "./components/Book/Books";
import Users from "./components/User/Users";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/User/Profile";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./Routes/ProtectedRoute";
import IceCreamContainer from "./components/IceCream/IceCreamContainer";
import "./i18n"



function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-yellow-400/30 selection:text-yellow-400">
      <Navbar />
      <main className="animate-in fade-in duration-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/icecream" element={<IceCreamContainer />} />
          <Route path="/books" element={<Books />} />
          <Route
            path="/about"
            element={<About name="Azizbek" yosh={22} kasb="Full-stack Dasturchi" />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500 bg-gray-900">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Books App. Barcha huquqlar himoyalangan.</p>
          <p className="mt-2 text-sm">Tailwind CSS & React bilan mehr bilan yaratildi.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
