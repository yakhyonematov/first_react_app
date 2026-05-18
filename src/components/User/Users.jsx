import { useState, useEffect, useCallback } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import {
  getUsers,
  createUser,
  deleteUser as apiDeleteUser,
  updateUser as apiUpdateUser,
} from "../services/userService";
import { Loader2, Users as UsersIcon } from "lucide-react";

function Users() {
  const [users, setUsers] = useState([]);
  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [yosh, setYosh] = useState("");
  const [email, setEmail] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const userData = { ism, familiya, yosh: Number(yosh), email };
    try {
      if (editingUserId) {
        await apiUpdateUser(editingUserId, userData);
        setEditingUserId(null);
      } else {
        await createUser({ ...userData, parol: "default123" });
      }
      setIsm("");
      setFamiliya("");
      setYosh("");
      setEmail("");
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEditUser = (user) => {
    setIsm(user.ism);
    setFamiliya(user.familiya);
    setYosh(user.yosh);
    setEmail(user.email);
    setEditingUserId(user._id || user.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Rostdan ham ushbu foydalanuvchini o'chirmoqchimisiz?")) {
      try {
        await apiDeleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
            Foydalanuvchilar <UsersIcon className="text-blue-400" />
          </h1>
          <p className="text-gray-400 text-lg">Tizimdagi barcha a'zolar ro'yxati</p>
        </div>
        <div className="h-1 flex-grow bg-gray-800 rounded-full hidden md:block mx-8 border-b border-blue-400/20"></div>
      </div>

      <UserForm
        ism={ism}
        setIsm={setIsm}
        familiya={familiya}
        setFamiliya={setFamiliya}
        yosh={yosh}
        setYosh={setYosh}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleUserSubmit}
        editingId={editingUserId}
      />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-blue-400" size={48} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.length > 0 ? (
            users.map((user) => (
              <UserCard
                key={user._id || user.id}
                user={user}
                editUser={handleEditUser}
                deleteUser={handleDeleteUser}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-gray-800 rounded-3xl border-2 border-dashed border-gray-700">
              <p className="text-gray-500 text-xl italic">Hozircha foydalanuvchilar mavjud emas.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Users;
