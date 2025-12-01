import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 p-8 md:p-16 lg:p-24 font-sans overflow-hidden relative">
      {/* 彩色 3D 装饰图标 */}
      <div className="fixed top-12 left-12 w-28 h-28 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-3xl shadow-2xl flex items-center justify-center z-20 rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 backdrop-blur-sm border-4 border-white/50">
        <span className="text-3xl font-black text-white drop-shadow-lg">💻</span>
      </div>
      
      <div className="fixed top-32 right-16 w-24 h-24 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl shadow-2xl flex items-center justify-center z-20 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 backdrop-blur-sm border-4 border-white/50">
        <span className="text-2xl text-white drop-shadow-lg">☕</span>
      </div>

      <div className="fixed bottom-20 left-16 w-20 h-20 bg-gradient-to-t from-green-400 to-emerald-400 rounded-full shadow-xl flex items-center justify-center z-20 rotate-[-15deg] hover:rotate-0 hover:scale-110 transition-all duration-500 backdrop-blur-sm border-2 border-white/60">
        <span className="text-xl text-white drop-shadow-md">📈</span>
      </div>

      {/* 主内容 - 居中 */}
      <div className="relative z-30 max-w-5xl mx-auto text-center pt-32 pb-32">
        {/* 语言切换按钮 */}
        <button 
          className="absolute top-6 right-8 text-sm bg-white/80 backdrop-blur-sm border border-black/20 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg font-medium z-40"
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
        >
          {lang === "zh" ? "EN" : "中文"}
        </button>

        {/* 超大彩色渐变标题 */}
        <h1 className="text-[clamp(5rem,18vw,14rem)] font-black bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent mb-12 lg:mb-20 drop-shadow-2xl leading-none tracking-tight animate-pulse-slow">
          Web3投机空投
        </h1>

        {/* 全大写标签 */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.3em] bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-16 lg:mb-24 drop-shadow-lg">
          实战玩家（破产版）
        </h2>

        {/* 双卡片布局 - 完美对称 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-32 max-w-6xl mx-auto">
          {/* 左侧 - 空投战绩 */}
          <div className="group bg-gradient-to-br from-emerald-400/20 via-green-400/10 to-teal-400/20 backdrop-blur-xl border-4 border-white/60 rounded-3xl p-10 lg:p-14 shadow-2xl hover:shadow-3xl transform rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-700 hover:border-emerald-300/80">
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 drop-shadow-lg group-hover:text-emerald-900 transition-colors">
              空投战绩
            </h3>
            <ul className="text-xl lg:text-2xl space-y-4 text-gray-800 leading-relaxed">
              <li className="flex items-center gap-3 hover:translate-x-4 transition-transform duration-300">
                <span className="w-3 h-3 bg-green-500 rounded-full shadow-md">•</span>
                <span>2022 OP Airdrop</span>
                <span className="text-green-600 font-bold text-lg ml-auto drop-shadow-sm">✅</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-4 transition-transform duration-300">
                <span className="w-3 h-3 bg-green-500 rounded-full shadow-md">•</span>
                <span>2023 ARB Airdrop</span>
                <span className="text-green-600 font-bold text-lg ml-auto drop-shadow-sm">✅</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-4 transition-transform duration-300">
                <span className="w-3 h-3 bg-red-500 rounded-full shadow-md">•</span>
                <span>2024 ZKS Airdrop</span>
                <span className="text-red-600 font-bold text-lg ml-auto drop-shadow-sm">❌</span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-4 transition-transform duration-300">
                <span className="w-3 h-3 bg-green-500 rounded-full shadow-md">•</span>
                <span>2025 Linea Airdrop</span>
                <span className="text-green-600 font-bold text-lg ml-auto drop-shadow-sm">✅</span>
              </li>
            </ul>
          </div>

          {/* 右侧 - 专注领域 + 金句 */}
          <div className="group bg-gradient-to-br from-purple-400/20 via-pink-400/10 to-indigo-400/20 backdrop-blur-xl border-4 border-white/60 rounded-3xl p-10 lg:p-14 shadow-2xl hover:shadow-3xl transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-700 hover:border-purple-300/80">
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 drop-shadow-lg group-hover:text-purple-900 transition-colors">
              专注领域
            </h3>
            <div className="text-xl lg:text-2xl text-gray-800 mb-12 leading-relaxed space-y-3">
              <p>• 二级市场趋势交易</p>
              <p>• 空投策略设计</p>
              <p>• DeFi 收益优化</p>
              <p>• 早期公链 + L2 生态</p>
            </div>
            <blockquote className="text-2xl lg:text-3xl italic font-light text-gray-900 border-l-8 border-gray-800 pl-8 pt-4 -mt-2 drop-shadow-lg">
              那场暴跌<br/>
              <span className="font-black text-4xl block">带走了我的梦</span>
            </blockquote>
          </div>
        </div>

        {/* 超醒目邮箱按钮 */}
        <a 
          href="mailto:kk@zhuke.ggff.net"
          className="group inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-2xl lg:text-4xl font-black text-white px-12 lg:px-20 py-8 lg:py-10 rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-110 hover:-translate-y-2 transform transition-all duration-500 mx-auto block max-w-max relative overflow-hidden"
        >
          <span className="relative z-10">kk@zhuke.ggff.net</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        {/* 签名 */}
        <p className="text-lg opacity-60 mt-20 lg:mt-28 font-light tracking-wide">
          少即是多，信息本质就是优势。
        </p>
      </div>

      {/* 底部彩色装饰泡泡 - 增强氛围 */}
      <div className="absolute bottom-10 left-10 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-pink-400/20 via-yellow-400/20 to-blue-400/20 rounded-full opacity-40 blur-3xl rotate-[-20deg]"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 lg:w-60 lg:h-60 bg-gradient-to-t from-emerald-400/20 via-green-400/20 to-teal-400/20 rounded-full opacity-30 blur-2xl rotate-12"></div>
      <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-b from-purple-400/30 to-indigo-400/30 rounded-full opacity-20 blur-xl -rotate-6"></div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
