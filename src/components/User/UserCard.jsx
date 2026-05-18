import { User as UserIcon, Mail, Edit2, Trash2 } from "lucide-react";

function UserCard({ user, editUser, deleteUser }) {
  return (
    <div className="bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-700 hover:border-blue-400/50 transition-all group">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-blue-400/10 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all">
          <UserIcon size={28} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white line-clamp-1">
            {user.ism} {user.familiya}
          </h2>
          <p className="text-sm text-gray-400">{user.yosh} yoshda</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-400 mb-6 bg-gray-700/30 p-3 rounded-xl">
        <Mail size={16} />
        <span className="text-sm truncate">{user.email}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => editUser(user)}
          className="flex items-center justify-center gap-2 bg-gray-700 text-gray-200 py-2.5 rounded-xl hover:bg-blue-500 hover:text-white transition-all text-sm font-medium"
        >
          <Edit2 size={16} /> Tahrirlash
        </button>
        <button
          onClick={() => deleteUser(user._id || user.id)}
          className="flex items-center justify-center gap-2 bg-gray-700 text-gray-200 py-2.5 rounded-xl hover:bg-red-500 hover:text-white transition-all text-sm font-medium"
        >
          <Trash2 size={16} /> O'chirish
        </button>
      </div>
    </div>
  );
}

export default UserCard;
