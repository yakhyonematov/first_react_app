import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, User, Home, Info, LogIn } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Asosiy", path: "/", icon: Home },
    { name: "Kitoblar", path: "/books", icon: BookOpen },
    { name: "Foydalanuvchilar", path: "/users", icon: User },
    { name: "Haqida", path: "/about", icon: Info },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-black text-yellow-400 flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <div className="bg-yellow-400 text-black p-1.5 rounded-lg">
            <BookOpen size={24} />
          </div>
          <span className="tracking-tighter">BOOKS APP</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                isActive(link.path)
                  ? "bg-gray-800 text-yellow-400 shadow-inner"
                  : "hover:bg-gray-800 hover:text-gray-200"
              }`}
            >
              <link.icon size={18} />
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-gray-800 mx-2"></div>
          <Link
            to="/login"
            className="bg-yellow-400 text-black px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-yellow-400/20"
          >
            <LogIn size={18} /> Kirish
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 hover:bg-gray-800 rounded-xl transition-colors"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 flex flex-col p-6 gap-3 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`p-4 rounded-2xl flex items-center gap-4 transition-all ${
                isActive(link.path)
                  ? "bg-gray-800 text-yellow-400"
                  : "hover:bg-gray-800"
              }`}
            >
              <link.icon size={22} />
              <span className="font-semibold text-lg">{link.name}</span>
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-4 bg-yellow-400 text-black p-5 rounded-2xl font-bold text-center text-lg flex items-center justify-center gap-2"
          >
            <LogIn size={22} /> Kirish
          </Link>
        </div>
      )}
    </nav>
  );
}
