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
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 mb-10"
    >
      <h3 className="text-xl font-bold">{editingId ? "Edit User" : "Add User"}</h3>
      <input
        type="text"
        placeholder="Ism"
        value={ism}
        onChange={(e) => setIsm(e.target.value)}
        className="border p-3 rounded-lg"
        required
      />
      <input
        type="text"
        placeholder="Familiya"
        value={familiya}
        onChange={(e) => setFamiliya(e.target.value)}
        className="border p-3 rounded-lg"
        required
      />
      <input
        type="number"
        placeholder="Yosh"
        value={yosh}
        onChange={(e) => setYosh(e.target.value)}
        className="border p-3 rounded-lg"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 rounded-lg"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {editingId ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;
