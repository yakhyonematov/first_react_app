import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock, Loader2 } from "lucide-react";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser({ email, parol: password });
      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (error) {
      alert("Xatolik yuz berdi. Iltimos qaytadan urunib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-900 px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-gray-800 rounded-3xl shadow-2xl p-10 border border-gray-700 backdrop-blur-xl bg-opacity-80">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-yellow-400 p-4 rounded-2xl text-black mb-4 shadow-lg shadow-yellow-400/20">
              <LogIn size={32} />
            </div>
            <h2 className="text-3xl font-black text-center text-white">
              Xush kelibsiz
            </h2>
            <p className="text-gray-400 mt-2">Tizimga kirish uchun ma'lumotlarni kiriting</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Email manzil
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all placeholder:text-gray-600"
                  placeholder="admin@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Parol
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all placeholder:text-gray-600"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-2xl transition-all shadow-lg shadow-yellow-400/20 active:scale-95 disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Tekshirilmoqda...
                </>
              ) : (
                "Kirish"
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              Hisobingiz yo'qmi?{" "}
              <a href="/register" className="text-yellow-400 font-bold hover:underline">
                Ro'yxatdan o'tish
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
