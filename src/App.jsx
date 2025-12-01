import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");

  const projects = [
    {
      title: "Web3 投机 / 空投",
      subtitle: "实战玩家",
      content: "专注二级市场、空投策略、DeFi。偏好早期公链与 Layer2 生态，记录长期盈亏曲线。那场暴跌带走了我的梦。",
      list: ["2022 OP Airdrop ✅", "2023 ARB Airdrop ✅", "2024 ZKS Airdrop ❌", "2025 Linea Airdrop ✅"],
      contact: "kk@zhuke.ggff.net"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['Inter'] p-8 md:p-12 max-w-4xl mx-auto prose prose-sm md:prose lg:prose-lg mx-auto">
      {/* 语言切换 - 右上角小 */}
      <button 
        className="fixed top-4 right-4 text-xs border border-black px-3 py-1 hover:bg-black hover:text-white transition-all z-50"
        onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>

      {/* 项目卡片 - 完全模仿 bryantcodes.art 结构 */}
      {projects.map((project, index) => (
        <article key={index} className="mb-32">
          {/* 大标题 */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-none mb-8">
            {project.title}
          </h1>

          {/* 小副标题 */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-12 opacity-80">
            {project.subtitle}
          </h2>

          {/* 项目正文 */}
          <div className="prose prose-lg md:prose-xl max-w-none mb-16 leading-relaxed">
            <p>{project.content}</p>
          </div>

          {/* 项目列表 - 用 - 开头完全模仿 */}
          <div className="mb-16">
            <ul className="space-y-1 text-xl md:text-2xl">
              {project.list.map((item, i) => (
                <li key={i} className="list-none">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mr-4 align-middle"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 邮箱 - 底部醒目 */}
          <p className="text-3xl md:text-4xl font-mono underline decoration-2">
            {project.contact}
          </p>
        </article>
      ))}

      {/* 页脚线 */}
      <hr className="border-black my-32" />
      
      {/* 底部签名 */}
      <footer className="text-sm opacity-50 text-center">
        少即是多，信息本质就是优势。
      </footer>
    </div>
  );
}
