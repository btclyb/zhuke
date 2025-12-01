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
      className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-indigo-50 p-4 sm:p-8 lg:p-16 xl:p-24 font-['Inter_Variable'] overflow-hidden relative"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
      }}
    >
      {/* 智能跟随鼠标的彩色光斑 */}
      <div 
        className="fixed w-96 h-96 opacity-20 blur-3xl rounded-full pointer-events-none z-0 transition-all duration-300"
        style={{
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
          background: `radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(59,130,246,0.4) 50%, transparent 70%)`,
        }}
      />

      {/* 3D 浮动装饰 */}
      <div className="fixed top-16 left-12 w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-amber-400/80 via-orange-400/80 to-rose-400/80 backdrop-blur-xl border-4 border-white/70 rounded-3xl shadow-2xl flex items-center justify-center z-20 rotate-12 hover:rotate-0 hover:scale-125 transition-all duration-700 translate-y-0 hover:-translate-y-2">
        <span className="text-4xl font-black text-white/95 drop-shadow-2xl">💻</span>
      </div>
      
      <div className="fixed top-40 right-20 w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-emerald-400/80 via-teal-400/80 to-cyan-400/80 backdrop-blur-xl border-4 border-white/70 rounded-2xl shadow-2xl flex items-center justify-center z-20 -rotate-8 hover:rotate-0 hover:scale-125 transition-all duration-700 translate-y-0 hover:-translate-y-2">
        <span className="text-3xl text-white/95 drop-shadow-xl">📈</span>
      </div>

      <div className="fixed bottom-24 left-1/4 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-tr from-violet-400/80 via-purple-400/80 to-pink-400/80 backdrop-blur-xl border-4 border-white/70 rounded-full shadow-xl flex items-center justify-center z-20 rotate-[20deg] hover:rotate-0 hover:scale-125 transition-all duration-700 translate-y-0 hover:-translate-y-2">
        <span className="text-2xl text-white/95 drop-shadow-lg">☕</span>
      </div>

      {/* 智能语言切换按钮 */}
      <button 
        className="fixed top-6 right-8 text-sm bg-white/90 backdrop-blur-xl border-2 border-black/10 px-6 py-3 rounded-2xl hover:bg-black/95 hover:text-white hover:border-white/50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl font-medium z-50 text-gray-800 backdrop-saturate-150"
        onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      >
        {lang === "zh" ? "🇺🇸 EN" : "🇨🇳 中文"}
      </button>

      {/* 主视觉区 */}
      <div className="relative z-30 max-w-6xl mx-auto text-center pt-28 pb-40">
        {/* 神级动态标题 - 跟随鼠标微动 */}
        <h1 
          className="text-[clamp(4.5rem,16vw,15rem)] font-black bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 bg-clip-text text-transparent mb-12 lg:mb-20 drop-shadow-4xl leading-none tracking-[-0.05em] select-none cursor-default hover:scale-[1.02] transition-transform duration-500"
          style={{
            transform: `translate(${((mousePos.x / window.innerWidth) - 0.5) * 8}px, ${((mousePos.y / window.innerHeight) - 0.5) * 6}px)`
          }}
        >
          WEB3投机空投
        </h1>

        {/* 品牌标签 */}
        <div className="mb-20 lg:mb-32">
          <h2 className="inline-block text-3xl lg:text-5xl xl:text-6xl font-black uppercase tracking-[0.25em] bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent drop-shadow-xl rotate-[-0.5deg] hover:rotate-0 transition-all duration-500">
            实战玩家
          </h2>
          <div className="text-xl lg:text-2xl font-bold text-slate-600 uppercase tracking-wider opacity-80 mt-4 rotate-[0.5deg]">
            （破产版）
          </div>
        </div>

        {/* 极致卡片组 */}
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 mb-32 lg:mb-40 max-w-7xl mx-auto">
          {/* 战绩卡 - 翡翠绿 */}
          <motion.div 
            className="group relative bg-gradient-to-br from-emerald-50/95 via-green-50/95 to-teal-50/95 backdrop-blur-2xl border-4 border-white/80 shadow-2xl rounded-[2.5rem] p-10 lg:p-14 xl:p-16 hover:shadow-emerald-500/25 hover:shadow-4xl transform rotate-[2deg] hover:rotate-0 hover:scale-[1.025] hover:border-emerald-300/80 transition-all duration-800 cursor-pointer overflow-hidden hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.025 }}
          >
            {/* 卡片光晕 */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />
            
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
              <li className="group-hover:translate-x-3 transition-transform duration-400 flex items-center gap-4 hover:text-rose-900">
                <div className="w-4 h-4 lg:w-5 lg:h-5 bg-rose-500 rounded-full shadow-lg scale-110 group-hover:scale-125 transition-all duration-300" />
                <span>2024 ZKS Airdrop</span>
                <span className="text-rose-600 font-black text-2xl lg:text-3xl ml-auto drop-shadow-md scale-110">❌</span>
              </li>
              <li className="group-hover:translate-x-3 transition-transform duration-400 flex items-center gap-4 hover:text-emerald-900">
                <div className="w-4 h-4 lg:w-5 lg:h-5 bg-emerald-500 rounded-full shadow-lg scale-110 group-hover:scale-125 transition-all duration-300" />
                <span>2025 Linea Airdrop</span>
                <span className="text-emerald-600 font-black text-2xl lg:text-3xl ml-auto drop-shadow-md scale-110">✅</span>
              </li>
            </ul>
          </motion.div>

          {/* 领域+金句卡 - 紫罗兰 */}
          <motion.div 
            className="group relative bg-gradient-to-br from-violet-50/95 via-purple-50/95 to-indigo-50/95 backdrop-blur-2xl border-4 border-white/80 shadow-2xl rounded-[2.5rem] p-10 lg:p-14 xl:p-16 hover:shadow-purple-500/25 hover:shadow-4xl transform rotate-[-2deg] hover:rotate-0 hover:scale-[1.025] hover:border-purple-300/80 transition-all duration-800 cursor-pointer overflow-hidden hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.025 }}
          >
            {/* 卡片光晕 */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />
            
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-violet-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-10 lg:mb-12 drop-shadow-2xl group-hover:scale-105 transition-all duration-500">
              专注领域
            </h3>
            
            <div className="text-xl lg:text-2xl xl:text-3xl text-slate-800 mb-12 lg:mb-16 space-y-3 leading-relaxed">
              <p className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 hover:text-violet-900">
                <span className="w-3 h-3 bg-violet-500 rounded-full shadow-md scale-110" /> 
                二级市场趋势交易
              </p>
              <p className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 hover:text-violet-900">
                <span className="w-3 h-3 bg-violet-500 rounded-full shadow-md scale-110" /> 
                空投策略设计
              </p>
              <p className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 hover:text-violet-900">
                <span className="w-3 h-3 bg-violet-500 rounded-full shadow-md scale-110" /> 
                DeFi收益优化
              </p>
              <p className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 hover:text-violet-900">
                <span className="w-3 h-3 bg-violet-500 rounded-full shadow-md scale-110" /> 
                L2生态研究
              </p>
            </div>
            
            {/* 金句展示 */}
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl italic font-light bg-gradient-to-r from-slate-900 to-slate-900 bg-clip-text text-transparent relative pt-6 pl-8 border-l-8 border-slate-800/50 drop-shadow-xl">
              <span className="block font-black text-5xl lg:text-6xl leading-none mb-2">那场暴跌</span>
              <span className="block font-black text-4xl lg:text-5xl leading-none tracking-tight">带走了我的梦</span>
              <span className="absolute -top-2 -right-4 text-xs uppercase tracking-widest opacity-60 rotate-[-5deg]">(破产版)</span>
            </blockquote>
          </motion.div>
        </div>

        {/* 核爆级邮箱按钮 */}
        <a 
          href="mailto:kk@zhuke.ggff.net"
          className="group relative inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-700 text-2xl lg:text-4xl xl:text-5xl font-black text-white px-12 lg:px-20 xl:px-24 py-8 lg:py-10 xl:py-12 rounded-3xl shadow-3xl hover:shadow-[0_25px_50px_rgba(99,102,241,0.4)] hover:scale-[1.08] hover:-translate-y-4 transform transition-all duration-700 mx-auto block max-w-max overflow-hidden border-4 border-white/20 backdrop-blur-sm"
          whileHover={{ scale: 1.08 }}
        >
          <span className="relative z-20">kk@zhuke.ggff.net</span>
          {/* 内发光扫光效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-all duration-1000 -skew-x-12 animate-shimmer" />
          {/* 底部扫光 */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-700 origin-left" />
        </a>

        {/* 签名 + 环境光 */}
        <div className="mt-28 lg:mt-40 pt-16 relative">
          <p className="text-lg lg:text-xl xl:text-2xl opacity-70 font-light tracking-[0.05em] bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 bg-clip-text text-transparent drop-shadow-sm">
            少即是多，信息本质就是优势。
          </p>
          {/* 环境光环 */}
          <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-3xl blur-xl opacity-50 pointer-events-none -z-10" />
        </div>
      </div>

      {/* 多层动态装饰泡泡 */}
      <div className="fixed bottom-12 left-16 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-rose-400/15 via-pink-400/15 to-purple-400/15 rounded-full opacity-30 blur-3xl rotate-[-25deg] animate-float-slow" />
      <div className="fixed bottom-48 right-24 w-56 h-56 lg:w-72 lg:h-72 bg-gradient-to-tr from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-full opacity-25 blur-[2.5rem] rotate-15 animate-float-medium" />
      <div className="fixed top-48 right-40 w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-bl from-amber-400/25 via-orange-400/25 to-rose-400/25 rounded-2xl opacity-20 blur-xl rotate-[30deg] animate-float-fast" />

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skew-x-12; }
          100% { transform: translateX(120%) skew-x-12; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-20px) rotate(calc(var(--rotation, 0deg) + 2deg)); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-15px) rotate(calc(var(--rotation, 0deg) + 1deg)); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-10px) rotate(calc(var(--rotation, 0deg) + 3deg)); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 8s ease-in-out infinite reverse; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
        @font-face {
          font-family: 'Inter_Variable';
          src: url('https://rsms.me/inter/inter.css');
        }
      `}</style>
    </div>
  );
}
