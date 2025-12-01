import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");

  const t = {
    zh: {
      title: "kk@zhuke.ggff.net",
      subtitle: "Web3 投机 / 空投",
      tagline: "那场暴跌带走了我的梦",
      aboutTitle: "实战玩家",
      aboutContent: "专注二级市场、空投策略、DeFi。偏好早期公链与 Layer2 生态，记录长期盈亏曲线。",
      airdropsTitle: "Past Airdrops",
      email: "kk@zhuke.ggff.net"
    },
    en: {
      title: "kk@zhuke.ggff.net",
      subtitle: "Web3 Investor / Airdrop", 
      tagline: "That crash took away my dream",
      aboutTitle: "Hands-on player",
      aboutContent: "Focusing on secondary market, airdrops and DeFi. Early chain & L2 ecosystem focused.",
      airdropsTitle: "Past Airdrops",
      email: "kk@zhuke.ggff.net"
    }
  };

  const L = t[lang];

  return (
    <main className="min-h-screen bg-white text-black p-8 md:p-12 max-w-4xl mx-auto font-sans leading-relaxed">
      {/* 语言切换 */}
      <button 
        className="fixed top-4 right-4 text-sm border border-black px-3 py-1 hover:bg-black hover:text-white transition-all"
        onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>

      {/* 标题 */}
      <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
        {L.title}
      </h1>

      {/* 副标题 */}
      <p className="text-2xl md:text-3xl font-light mb-12 opacity-80">
        {L.subtitle}
      </p>

      {/* Tagline */}
      <blockquote className="text-xl md:text-2xl italic opacity-70 mb-20 border-l-4 border-black pl-6">
        "{L.tagline}"
      </blockquote>

      {/* About */}
      <section className="mb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{L.aboutTitle}</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
          {L.aboutContent}
        </p>
      </section>

      {/* Airdrops */}
      <section className="mb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-8 uppercase tracking-wider opacity-70">
          {L.airdropsTitle}
        </h2>
        <ul className="text-lg md:text-xl space-y-2 list-disc list-inside max-w-lg">
          <li>2022 OP Airdrop <span className="text-green-600 font-semibold">✅</span></li>
          <li>2023 ARB Airdrop <span className="text-green-600 font-semibold">✅</span></li>
          <li>2024 ZKS Airdrop <span className="text-red-600 font-semibold">❌</span></li>
          <li>2025 Linea Airdrop <span className="text-green-600 font-semibold">✅</span></li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <a 
          href="mailto:kk@zhuke.ggff.net"
          className="block text-2xl md:text-3xl font-mono underline hover:no-underline hover:text-gray-600 transition-colors"
        >
          {L.email}
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-black text-sm opacity-60">
        少即是多，信息本质就是优势。
      </footer>
    </main>
  );
}
