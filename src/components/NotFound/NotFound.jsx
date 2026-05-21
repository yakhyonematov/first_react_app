import { Link } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="bg-yellow-400 p-6 rounded-3xl text-black mb-8 shadow-2xl shadow-yellow-400/20 animate-bounce">
        <AlertCircle size={64} />
      </div>
      <h1 className="text-9xl font-black text-white mb-2">404</h1>
      <h2 className="text-3xl font-bold mb-6 text-gray-400">Sahifa topilmadi</h2>
      <p className="text-center text-gray-500 max-w-md mb-10">
        Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan bo'lishi mumkin.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-black transition-all shadow-lg shadow-yellow-400/20 active:scale-95"
      >
        <Home size={20} /> Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
