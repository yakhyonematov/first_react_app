import { useTranslation } from "react-i18next";

function UserForm({
  ism,
  setIsm,
  familiya,
  setFamiliya,
  yosh,
  setYosh,
  email,
  setEmail,
  handleSubmit,
  editingId,
}) {
  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col gap-6 mb-12 border border-gray-700"
    >
      <h3 className="text-2xl font-bold text-white mb-2">
        {editingId ? t("users.form.editTitle") : t("users.form.addTitle")}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("users.form.name")}</label>
          <input
            type="text"
            placeholder={t("users.form.name")}
            value={ism}
            onChange={(e) => setIsm(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            required
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("users.form.surname")}</label>
          <input
            type="text"
            placeholder={t("users.form.surname")}
            value={familiya}
            onChange={(e) => setFamiliya(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("users.form.age")}</label>
          <input
            type="number"
            placeholder={t("users.form.age")}
            value={yosh}
            onChange={(e) => setYosh(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("users.form.email")}</label>
          <input
            type="email"
            placeholder={t("users.form.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/10 active:scale-95"
      >
        {editingId ? t("users.form.saveBtn") : t("users.form.addBtn")}
      </button>
    </form>
  );
}

export default UserForm;
