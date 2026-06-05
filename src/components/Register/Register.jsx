import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useLanguage } from "../Language/hooks";

export default function Register() {
  const navigate = useNavigate();
  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [yosh, setYosh] = useState("");
  const [email, setEmail] = useState("");
  const [parol, setParol] = useState("");
  const { t } = useLanguage();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await registerUser({
        ism,
        familiya,
        yosh: Number(yosh),
        email,
        parol,
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-2xl rounded-3xl p-10 w-full sm:w-[500px] flex flex-col gap-5 border border-gray-700"
      >
        <h1 className="text-4xl font-black text-center text-white mb-4">{t("register.title")}</h1>
        <input
          type="text"
          placeholder={t("register.placeholders.first_name")}
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
          className="bg-gray-700/50 border border-gray-600 p-4 rounded-2xl outline-none text-white focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <input
          type="text"
          placeholder={t("register.placeholders.last_name")}
          value={familiya}
          onChange={(e) => setFamiliya(e.target.value)}
          className="bg-gray-700/50 border border-gray-600 p-4 rounded-2xl outline-none text-white focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <input
          type="number"
          placeholder={t("register.placeholders.age")}
          value={yosh}
          onChange={(e) => setYosh(e.target.value)}
          className="bg-gray-700/50 border border-gray-600 p-4 rounded-2xl outline-none text-white focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <input
          type="email"
          placeholder={t("register.placeholders.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-700/50 border border-gray-600 p-4 rounded-2xl outline-none text-white focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <input
          type="password"
          placeholder={t("register.placeholders.password")}
          value={parol}
          onChange={(e) => setParol(e.target.value)}
          className="bg-gray-700/50 border border-gray-600 p-4 rounded-2xl outline-none text-white focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <button className="bg-yellow-400 text-black py-4 rounded-2xl font-black hover:bg-yellow-500 duration-300 shadow-lg shadow-yellow-400/20 active:scale-95">
          {t("register.button")}
        </button>
        <p className="text-gray-400 text-center mt-2">
          {t("register.has_account")}{" "}
          <Link to="/login" className="text-yellow-400 font-bold hover:underline">
            {t("register.login_link")}
          </Link>
        </p>
      </form>
    </div>
  );
}
