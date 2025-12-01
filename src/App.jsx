import { useState, useEffect } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-indigo-50 p-4 sm:p-8 lg:p-16 xl:p-24 font-sans overflow-hidden relative"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
      }}
    >
      {/* 3D 浮动装饰 - 简化版 */}
      <div className="fixed top-16 left-12 w-28 h-28 bg-gradient-to-br from-amber-400/80 via-orange-400/80 to-rose-400/80 backdrop-blur-xl border-4 border-white/70 rounded-3xl shadow-2xl flex items-center justify-center z-20 rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-700 hover:-translate-y-2">
        <span className="text-4xl font-black text-white drop-shadow-2xl">💻</span>
      </div>
      
      <div className="fixed top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-400/80 via-teal-400/80 to-cyan-400/80 backdrop-blur-xl border-4 border-white/70 rounded-2xl shadow-2xl flex items-center justify-center z-20 -rotate-8 hover:rotate-0 hover:scale-125 transition-all duration-700 hover:-translate-y-2">
        <span className="text-3xl text-white drop-shadow-xl">📈</span>
      </div>

      {/* 语言切换按钮 */}
      <button 
        className="fixed top-6 right-8 text-sm bg-white/90 backdrop-blur-xl border-2 border-black/10 px-6 py-3 rounded-2xl hover:bg-black/95 hover:text-white hover:border-white/50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl font-medium z-50 text-gray-800"
        onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      >
        {lang === "zh" ? "🇺🇸 EN" : "🇨🇳 中文"}
      </button>

      {/* 主标题 */}
      <div className="relative z-30 max-w-6xl mx-auto text-center pt-28 pb-40">
        <h1 
          className="text-[clamp(4.5rem,16vw,15rem)] font-black bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 bg-clip-text text-transparent mb-12 lg:mb-20 drop-shadow-4xl leading-none tracking-[-0.05em]"
          style={{
            transform: `translate(${((mousePos.x / window.innerWidth) - 0.5) * 8}px, ${((mousePos.y / window.innerHeight) - 0.5) * 6}px)`
          }}
        >
          WEB3投机空投
        </h1>

        {/* 标签 */}
        <div className="mb-20 lg:mb-32">
          <h2 className="inline-block text-3xl lg:text-5xl xl:text-6xl font-black uppercase tracking-[0.25em] bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent drop-shadow-xl rotate-[-0.5deg] hover:rotate-0 transition-all duration-500">
            实战玩家
          </h2>
          <div className="text-xl lg:text-2xl font-bold text-slate-600 uppercase tracking-wider opacity-80 mt-4 rotate-[0.5deg]">
            （破产版）
          </div>
        </div>

        {/* 双卡片 */}
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 mb-32 lg:mb-40 max-w-7xl mx-auto">
          {/* 战绩卡 */}
          <div className="group bg-gradient-to-br from-emerald-50/95 via-green-50/95 to-teal-50/95 backdrop-blur-2xl border-4 border-white/80 shadow-2xl rounded-[2.5rem] p-10 lg:p-14 xl:p-16 hover:shadow-emerald-500/25 hover:shadow-4xl transform rotate-[2deg] hover:rotate-0 hover:scale-[1.025] hover:border-emerald-300/80 transition-all duration-800 hover:-translate-y-2 overflow-hidden">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-emerald-900 to-slate-900 bg-clip-text text-transparent mb-10 lg:mb-12 drop-shadow-2xl group-hover:scale-105 transition-all duration-500">
              空投战绩
            </h3>
            <ul className="text-xl lg:text-2xl xl:text-3xl space-y-5 text-slate-800 leading-relaxed max-w-lg mx-auto">
              <li className="group-hover:translate-x-3 transition-transform duration-400 flex items-center gap-4 hover:text-emerald-900">
                <div className="w-4 h-4 lg:w-5 lg:h-5 bg-emerald-500 rounded-full shadow-lg scale-110 group-hover:scale-125 transition-all duration-300" />
                <span>2022 OP Airdrop</span>
                <span className="text-emerald-600 font-black text-2xl lg:text-3xl ml-auto drop-shadow-md scale-110">✅</span>
              </li>
              <li className="group-hover:translate-x-3 transition-transform duration-400 flex items-center gap-4 hover:text-emerald-900">
                <div className="w-4 h-4 lg:w-5 lg:h-5 bg-emerald-500 rounded-full shadow-lg scale-110 group-hover:scale-125 transition-all duration-300" />
                <span>2023 ARB Airdrop</span>
                <span className="text-emerald-600 font-black text-2xl lg:text-3xl ml-auto drop-shadow-md scale-110">✅</span>
              </li>
              <li className="group-hover:translate-x-3 transition-transform duration-400 flex
