import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import avatar from "./assets/avatar.png";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");

  const t = {
    zh: {
      subtitle: "Web3 投机 / 空投",
      about: "实战玩家，专注二级市场、空投策略、DeFi。",
      email: "邮箱",
    },
    en: {
      subtitle: "Web3 Investor / Airdrop",
      about: "Hands-on player focusing on secondary market, airdrops and DeFi.",
      email: "Email",
    },
  };

  const L = t[lang];

  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      {/* Tech Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />

      {/* Language Switch */}
      <button
        className="absolute top-6 right-6 text-xs px-3 py-1 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 transition"
        onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>

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
              className="w-36 h-36 rounded-full object-cover shadow-[0_0_25px_rgba(168,85,247,0.7)]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <motion.p
            className="text-lg opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {L.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid gap-10 text-left">
          {/* About */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="opacity-80 leading-relaxed">{L.about}</p>
          </section>

          {/* Airdrop List */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition">
            <ul className="opacity-90 space-y-1 list-disc list-inside">
              <li>2022 OP Airdrop ✅</li>
              <li>2023 ARB Airdrop ✅</li>
              <li>2024 ZKS Airdrop ❌</li>
              <li>2025 Linea Airdrop ✅</li>
            </ul>
          </section>

          {/* Contact — Minimal */}
          <section className="py-6 text-center">
            <a
              href="mailto:kk@zhuke.ggff.net"
              className="inline-flex items-center gap-2 text-lg text-purple-200 hover:text-purple-300 transition"
            >
              <Mail size={18} />
              kk@zhuke.ggff.net
              <span className="text-sm opacity-70">↗</span>
            </a>
          </section>
        </div>

        <footer className="pt-4 opacity-60 text-sm text-center">
          少即是多，信息本质就是优势。
        </footer>
      </div>
    </main>
  );
}
