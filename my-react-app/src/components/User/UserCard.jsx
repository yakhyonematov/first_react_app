function UserCard({ user, editUser, deleteUser }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{user.ism} {user.familiya}</h2>
      <p className="mb-2 text-gray-600">
        <span className="font-bold">Yosh:</span> {user.yosh}
      </p>
      <p className="mb-5 text-gray-600">
        <span className="font-bold">Email:</span> {user.email}
      </p>

      <div className="flex gap-3 mt-auto">
        <button
          onClick={() => editUser(user)}
          className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
        >
          Edit
        </button>

        <button
          onClick={() => deleteUser(user._id || user.id)}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
