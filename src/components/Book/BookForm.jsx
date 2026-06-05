import { useLanguage } from "../Language/hooks";

function BookForm({
  nomi,
  setNomi,
  muallif,
  setMuallif,
  sahifasi,
  setSahifasi,
  janr,
  setJanr,
  handleSubmit,
  editingId,
}) {
  const { t } = useLanguage();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col gap-6 mb-12 border border-gray-700"
    >
      <h3 className="text-2xl font-bold text-white mb-2">
        {editingId ? t("bookForm.edit_title") : t("bookForm.add_title")}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("bookForm.labels.name")}</label>
          <input
            type="text"
            placeholder={t("bookForm.placeholders.name")}
            value={nomi}
            onChange={(e) => setNomi(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
            required
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("bookForm.labels.author")}</label>
          <input
            type="text"
            placeholder={t("bookForm.placeholders.author")}
            value={muallif}
            onChange={(e) => setMuallif(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("bookForm.labels.pages")}</label>
          <input
            type="number"
            placeholder={t("bookForm.placeholders.pages")}
            value={sahifasi}
            onChange={(e) => setSahifasi(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400 ml-1">{t("bookForm.labels.genre")}</label>
          <input
            type="text"
            placeholder={t("bookForm.placeholders.genre")}
            value={janr}
            onChange={(e) => setJanr(e.target.value)}
            className="bg-gray-700 border border-gray-600 p-4 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/10 active:scale-95"
      >
        {editingId ? t("bookForm.buttons.save") : t("bookForm.buttons.add")}
      </button>
    </form>
  );
}

export default BookForm;
