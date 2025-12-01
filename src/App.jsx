import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import avatar from "./assets/avatar.png";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");
  const [theme, setTheme] = useState("dark");

  const t = {
    zh: {
      subtitle: "Web3 投机 / 空投",
      edition: "（破产版）",
      tagline: "那场暴跌带走了我的梦",
      about: "实战玩家，专注二级市场、空投策略、DeFi。",
      email: "邮箱",
    },
    en: {
      subtitle: "Web3 Investor / Airdrop",
      edition: "(Bankrupt ver.)",
      tagline: "That crash took away my dream",
      about: "Hands-on player focusing on secondary market, airdrops and DeFi.",
      email: "Email",
    },
  };

  const L = t[lang];

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  return (
    <main
      className={`relative min-h-screen ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      } flex items-center justify-center px-6 py-20 transition-colors duration-300`}
    >
      {/* Tech Background - only dark mode */}
      {theme === "dark" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />
        </>
      )}

      {/* Controls */}
      <div className="absolute top-6 right-6 flex gap-2">
        <button
          className={`text-xs px-3 py-1 rounded-md border transition-all ${
            theme === "dark"
              ? "border-white/20 bg-white/10 hover:bg-white/20"
              : "border-gray-300 bg-white/50 hover:bg-white shadow-sm"
          }`}
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          whileTap={{ scale: 0.95 }}
        >
          {lang === "zh" ? "EN" : "中文"}
        </button>
        <button
          className={`text-xs px-3 py-1 rounded-md border transition-all ${
            theme === "dark"
              ? "border-white/20 bg-white/10 hover:bg-white/20"
              : "border-gray-300 bg-white/50 hover:bg-white shadow-sm"
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileTap={{ scale: 0.95 }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-10">
        {/* Avatar + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <motion.img
              src={avatar}
              alt="avatar"
              className={`w-36 h-36 rounded-full object-cover hover:scale-105 transition-transform ${
                theme === "dark"
                  ? "shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                  : "shadow-lg shadow-gray-300/50"
              }`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {L.subtitle}
            <span className={`ml-2 text-sm ${
              theme === "dark" ? "opacity-60" : "text-gray-500"
            }`}>
              {L.edition}
            </span>
          </motion.p>

          <motion.p
            className={`mt-2 text-sm ${
              theme === "dark" ? "opacity-60" : "text-gray-500"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {L.tagline}
          </motion.p>
        </motion.div>

        <div className="grid gap-10 text-left">
          {/* About */}
          <motion.section
            className={`border rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/5 border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                : "bg-white/80 border-gray-200 shadow-lg backdrop-blur-sm"
            }`}
            whileHover={{ y: -4 }}
          >
            <h2 className={`text-xl font-semibold mb-2 ${
              theme === "dark" ? "" : "text-gray-800"
            }`}>
              About
            </h2>
            <p className={`leading-relaxed ${
              theme === "dark" 
                ? "opacity-80" 
                : "text-gray-700"
            }`}>
              {L.about}
            </p>
          </motion.section>

          {/* Airdrop List */}
          <motion.section
            className={`border rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/5 border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                : "bg-white/80 border-gray-200 shadow-lg backdrop-blur-sm"
            }`}
            whileHover={{ y: -4 }}
          >
            <ul className={`space-y-1 list-disc list-inside ${
              theme === "dark" 
                ? "opacity-90" 
                : "text-gray-800"
            }`}>
              <li>2022 OP Airdrop ✅</li>
              <li>2023 ARB Airdrop ✅</li>
              <li>2024 ZKS Airdrop ❌</li>
              <li>2025 Linea Airdrop ✅</li>
            </ul>
          </motion.section>

          {/* Contact */}
          <section className="py-6 text-center">
            <a
              href="mailto:kk@zhuke.ggff.net"
              className={`inline-flex items-center gap-2 text-lg transition-all hover:scale-105 ${
                theme === "dark"
                  ? "text-purple-200 hover:text-purple-300"
                  : "text-purple-600 hover:text-purple-700"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={18} />
              kk@zhuke.ggff.net
              <span className={`text-sm ${
                theme === "dark" ? "opacity-70" : "text-gray-500"
              }`}>
                ↗
              </span>
            </a>
          </section>
        </div>

        <footer className={`pt-4 text-sm text-center ${
          theme === "dark" ? "opacity-60" : "text-gray-500"
        }`}>
          少即是多，信息本质就是优势。
        </footer>
      </div>
    </main>
  );
}
