import { Link, Outlet, useLocation } from 'react-router-dom';
import { Leaf, Map, Home, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Start', icon: Home, color: 'bg-green-500' },
    { path: '/amazone', label: 'Amazonewoud', icon: Leaf, color: 'bg-emerald-600' },
    { path: '/congo', label: 'Congoregenwoud', icon: Leaf, color: 'bg-teal-600' },
    { path: '/borneo', label: 'Borneo', icon: Leaf, color: 'bg-lime-600' },
    { path: '/codeslot', label: 'Codeslot', icon: Lock, color: 'bg-indigo-600' },
  ];

  return (
    <div className="min-h-screen bg-[#e6f4ea] font-sans">
      {/* Header */}
      <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="text-3xl">🌴</span>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-green-50 tracking-wide">
                Dieren van het Oerwoud
              </h1>
              <span className="text-3xl">🐒</span>
            </Link>
            
            <nav className="flex flex-wrap justify-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                      isActive 
                        ? `${item.color} text-white shadow-md scale-105` 
                        : 'bg-green-700/50 text-green-100 hover:bg-green-600 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-24">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-200 py-8 text-center mt-12">
        <p className="font-display text-lg">Gemaakt voor leerlingen van het 4de leerjaar 🌍</p>
        <div className="flex justify-center gap-4 mt-4 text-2xl">
          <span>🦜</span>
          <span>🐆</span>
          <span>🐸</span>
          <span>🦋</span>
          <span>🕷️</span>
        </div>
      </footer>
    </div>
  );
}
