import { User, Briefcase, Calendar } from "lucide-react";

function About({ name, yosh, kasb }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
        <div className="md:flex">
          <div className="md:shrink-0 bg-yellow-400 flex items-center justify-center p-12">
            <User size={120} className="text-gray-900" />
          </div>
          <div className="p-12">
            <div className="uppercase tracking-wide text-sm text-yellow-400 font-semibold mb-2">
              Profil Ma'lumotlari
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Assalomu alaykum, men {name}
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 bg-gray-700/50 p-4 rounded-xl border border-gray-600">
                <Calendar className="text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Yosh</p>
                  <p className="text-lg font-medium">{yosh} yoshda</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 bg-gray-700/50 p-4 rounded-xl border border-gray-600">
                <Briefcase className="text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Kasb / Yo'nalish</p>
                  <p className="text-lg font-medium">{kasb}</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-gray-400 leading-relaxed italic">
              "Ushbu loyiha React va Tailwind CSS yordamida yaratilgan bo'lib, 
              kutubxona tizimini samarali boshqarish uchun mo'ljallangan."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
