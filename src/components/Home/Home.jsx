import { Link } from "react-router-dom";
import { BookOpen, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Kutubxonangizni oson boshqaring
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Kitoblar va foydalanuvchilarni bir joyda, qulay va tezkor boshqarish imkoniyati. 
            Zamonaviy interfeys va yuqori tezlik.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/books"
              className="rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-all flex items-center gap-2"
            >
              Kitoblar <BookOpen size={20} />
            </Link>
            <Link
              to="/users"
              className="rounded-xl bg-gray-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-all flex items-center gap-2 border border-gray-700"
            >
              Foydalanuvchilar <Users size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-32">
          <div className="flex flex-col gap-y-4 rounded-3xl bg-gray-800/50 p-8 border border-gray-700 backdrop-blur-sm">
            <div className="h-12 w-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
              <BookOpen />
            </div>
            <h3 className="text-xl font-bold text-white">Kitoblar Boshqaruvi</h3>
            <p className="text-gray-400">Yangi kitoblar qo'shing, tahrirlang va o'chirib tashlang.</p>
          </div>
          <div className="flex flex-col gap-y-4 rounded-3xl bg-gray-800/50 p-8 border border-gray-700 backdrop-blur-sm">
            <div className="h-12 w-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400">
              <Users />
            </div>
            <h3 className="text-xl font-bold text-white">Foydalanuvchilar</h3>
            <p className="text-gray-400">A'zolar ro'yxatini shakllantiring va ma'lumotlarini kuzating.</p>
          </div>
          <div className="flex flex-col gap-y-4 rounded-3xl bg-gray-800/50 p-8 border border-gray-700 backdrop-blur-sm">
            <div className="h-12 w-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400">
              <ArrowRight />
            </div>
            <h3 className="text-xl font-bold text-white">Tezkor Interfeys</h3>
            <p className="text-gray-400">Vite va React yordamida yaratilgan tezkor va ravon tizim.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
