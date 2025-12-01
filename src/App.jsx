export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 p-8 md:p-12 font-sans overflow-hidden">
      {/* 彩色 3D 图标容器 */}
      <div className="fixed top-8 left-8 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center z-10 rotate-12 hover:rotate-0 transition-all duration-500">
        <span className="text-2xl font-bold text-white">👨‍💻</span>
      </div>
      
      <div className="fixed top-20 right-12 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-2xl flex items-center justify-center z-10 -rotate-6 hover:rotate-0 transition-all duration-500">
        <span className="text-xl text-white">☕</span>
      </div>

      {/* 主内容 */}
      <div className="relative z-20 max-w-4xl mx-auto text-center pt-32">
        {/* 超大标题 */}
        <h1 className="text-7xl md:text-[12rem] lg:text-[16rem] font-black bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent mb-12 leading-none drop-shadow-2xl">
          Web3投机
        </h1>

        {/* 副标题 */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 uppercase tracking-widest mb-20 drop-shadow-lg">
          实战玩家
        </h2>

        {/* 项目卡片 - 彩色倾斜 */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gradient-to-br from-green-400/30 to-blue-400/30 backdrop-blur-xl border-4 border-white/50 rounded-3xl p-12 shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
            <h3 className="text-4xl font-black text-gray-900 mb-6">空投战绩</h3>
            <ul className="text-2xl space-y-3 text-gray-800">
              <li>• 2022 OP <span className="text-green-600 font-bold">✅</span></li>
              <li>• 2023 ARB <span className="text-green-600 font-bold">✅</span></li>
              <li>• 2024 ZKS <span className="text-red-600 font-bold">❌</span></li>
              <li>• 2025 Linea <span className="text-green-600 font-bold">✅</span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-400/30 to-pink-400/30 backdrop-blur-xl border-4 border-white/50 rounded-3xl p-12 shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
            <h3 className="text-4xl font-black text-gray-900 mb-6 drop-shadow-lg">专注方向</h3>
            <p className="text-2xl leading-relaxed text-gray-800 mb-8">
              二级市场 • 空投策略 • DeFi<br/>
              早期公链 • Layer2 生态
            </p>
            <blockquote className="text-3xl italic text-gray-900 border-l-8 border-gray-800 pl-8">
              那场暴跌带走了我的梦（破产版）
            </blockquote>
          </div>
        </div>

        {/* 邮箱 - 醒目彩色按钮 */}
        <a href="mailto:kk@zhuke.ggff.net" 
           className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-3xl font-bold text-white px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-300 hover:no-underline">
          kk@zhuke.ggff.net
        </a>

        <p className="text-sm opacity-50 mt-12">
          少即是多，信息本质就是优势。
        </p>
      </div>

      {/* 底部彩色装饰 */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-20 blur-3xl -rotate-12"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl rotate-6"></div>
    </div>
  );
}
