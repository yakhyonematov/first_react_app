import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";
import { User, Mail, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../Language/hooks";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token)
        .then((res) => setUserData(res.data))
        .catch(() => {
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-700">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-yellow-400 p-4 rounded-full text-black mb-4 shadow-lg">
            <User size={48} />
          </div>
          <h2 className="text-3xl font-bold">{userData.ism} {userData.familiya}</h2>
          <p className="text-gray-400">{t("about.badge")}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-2xl border border-gray-600">
            <Mail className="text-yellow-400" size={24} />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{t("login.labels.email")}</p>
              <p className="font-medium">{userData.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-2xl border border-gray-600">
            <Calendar className="text-yellow-400" size={24} />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{t("about.age_label")}</p>
              <p className="font-medium">{t("about.age_value", { yosh: userData.yosh })}</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 active:scale-95"
        >
          <LogOut size={20} /> {t("login.logout_link") || "Logout"}
        </button>
      </div>
    </div>
  );
}
