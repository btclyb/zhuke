export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-12 max-w-5xl mx-auto font-serif leading-loose">
      <article className="space-y-20">
        {/* 项目1 - Web3投机 */}
        <section>
          <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-none mb-12">
            Web3 投机 / 空投
          </h1>
          
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-16 opacity-80">
            实战玩家
          </h2>

          <p className="text-xl max-w-3xl leading-relaxed mb-16">
            专注二级市场、空投策略、DeFi。偏好早期公链与 Layer2 生态，记录长期盈亏曲线。
          </p>

          <h3 className="text-2xl font-bold mb-8">记录</h3>
          <ul className="text-xl space-y-2 mb-20 list-disc list-inside max-w-2xl">
            <li>2022 OP Airdrop ✅</li>
            <li>2023 ARB Airdrop ✅</li>
            <li>2024 ZKS Airdrop ❌</li>
            <li>2025 Linea Airdrop ✅</li>
          </ul>

          <p className="text-3xl font-mono underline decoration-4 block mb-8">
            kk@zhuke.ggff.net
          </p>
          
          <blockquote className="text-2xl italic border-l-8 border-black pl-8 max-w-xl">
            那场暴跌带走了我的梦（破产版）
          </blockquote>
        </section>

        <hr className="border-t border-black my-32" />
        
        <footer className="text-sm opacity-50 text-center">
          少即是多，信息本质就是优势。
        </footer>
      </article>
    </div>
  );
}
