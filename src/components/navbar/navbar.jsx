import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, User, Home, Info, LogIn, IceCream } from "lucide-react";
import { useLanguage } from "../Language/hooks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const { t, i18n, changeLanguage } = useLanguage();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);

  const navLinks = [
    { name: t("navbar.asosiy"), path: "/", icon: Home },
    { name: t("navbar.kitoblar"), path: "/books", icon: BookOpen },
    { name: t("navbar.foydalanuvchilar"), path: "/users", icon: User },
    { name: t("navbar.haqida"), path: "/about", icon: Info },
    { name: t("navbar.ice cream"), path: "/icecream", icon: IceCream },
  ];

  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'tr', label: 'TR' },
    { code: 'arabic', label: 'AR' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-black text-yellow-400 flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <span className="tracking-tighter">{t("navbar.logo")}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
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
          
          <div className="flex bg-gray-800 p-1 rounded-xl gap-0.5">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => changeLanguage(l.code)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  i18n.language === l.code ? 'bg-yellow-400 text-black shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-800 mx-2"></div>

          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-red-600 transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-red-500/20"
            >
              <LogIn size={18} /> {t("login.logout_link") || "Logout"}
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="bg-gray-800 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-700 transition-all flex items-center gap-2 active:scale-95 border border-gray-700"
              >
                {t("navbar.kirish")}
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-yellow-400/20"
              >
                {t("register.title")}
              </Link>
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-xl transition-colors"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 flex flex-col p-6 gap-3 animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-5 bg-gray-800 p-1.5 rounded-2xl gap-1 mb-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  changeLanguage(l.code);
                  setOpen(false);
                }}
                className={`py-2 rounded-xl font-bold text-xs transition-all ${
                  i18n.language === l.code ? 'bg-yellow-400 text-black' : 'text-gray-400'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          
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
          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="mt-4 bg-red-500 text-white p-5 rounded-2xl font-bold text-center text-lg flex items-center justify-center gap-2"
            >
               {t("login.logout_link") || "Logout"}
            </button>
          ) : (
            <div className="flex flex-col gap-2 mt-4">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-gray-800 text-white p-5 rounded-2xl font-bold text-center text-lg border border-gray-700"
              >
                {t("navbar.kirish")}
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="bg-yellow-400 text-black p-5 rounded-2xl font-bold text-center text-lg shadow-lg shadow-yellow-400/20"
              >
                {t("register.title")}
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
