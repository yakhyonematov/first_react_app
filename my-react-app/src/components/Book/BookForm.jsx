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
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 mb-10"
    >
      <input
        type="text"
        placeholder="Book name"
        value={nomi}
        onChange={(e) => setNomi(e.target.value)}
        className="border p-3 rounded-lg"
      />
      <input
        type="text"
        placeholder="Author"
        value={muallif}
        onChange={(e) => setMuallif(e.target.value)}
        className="border p-3 rounded-lg" // Klass qo'shildi
      />
      <input
        type="number"
        placeholder="Pages"
        value={sahifasi}
        onChange={(e) => setSahifasi(e.target.value)}
        className="border p-3 rounded-lg" // Klass qo'shildi
      />
      <input
        type="text"
        placeholder="Genre"
        value={janr}
        onChange={(e) => setJanr(e.target.value)}
        className="border p-3 rounded-lg" // Klass qo'shildi
      />

      <button
        type="submit"
        className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        {editingId ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
} 

export default BookForm;
