function BookCard({ book, editBook, deleteBook }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-3">{book.nomi}</h2>
      <p className="mb-2">
        <span className="font-bold">Muallif:</span> {book.muallif}
      </p>
      <p className="mb-2">
        <span className="font-bold">Sahifasi:</span> {book.sahifasi}
      </p>
      <p className="mb-5">
        <span className="font-bold">Janr:</span> {book.janr}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => editBook(book)}
          className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Edit
        </button>

        <button
          onClick={() => deleteBook(book._id || book.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
} 

export default BookCard;
