import { Edit3, Trash2, Book as BookIcon } from "lucide-react";
import { useLanguage } from "../Language/hooks";

function BookCard({ book, editBook, deleteBook }) {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-700 hover:border-yellow-400/50 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-yellow-400/10 p-3 rounded-2xl text-yellow-400 group-hover:scale-110 transition-transform">
          <BookIcon size={24} />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => editBook(book)}
            className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-700 rounded-lg transition-all"
            title={t("bookCard.tooltips.edit")}
          >
            <Edit3 size={20} />
          </button>
          <button
            onClick={() => deleteUser(book._id || book.id)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-700 rounded-lg transition-all"
            title={t("bookCard.tooltips.delete")}
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4 line-clamp-1">{book.nomi}</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{t("bookCard.labels.author")}</span>
          <span className="text-gray-200 font-medium">{book.muallif}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{t("bookCard.labels.pages")}</span>
          <span className="text-gray-200 font-medium">{book.sahifasi} {t("bookCard.page_unit")}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{t("bookCard.labels.genre")}</span>
          <span className="bg-gray-700 px-2 py-0.5 rounded text-yellow-400 text-xs uppercase font-bold tracking-wider">
            {book.janr}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
