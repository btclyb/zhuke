export default function App() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      <div className="max-w-2xl w-full text-center space-y-6">
        <header className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">zk</h1>
          <p className="text-lg opacity-80">Web3 Investor / Airdrop Hunter</p>
        </header>

        <div className="mt-10 grid gap-10 text-left">
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="opacity-80 leading-relaxed">
              实战玩家，专注二级市场、空投策略、DeFi。
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <ul className="opacity-90 space-y-1 list-disc list-inside">
              <li>2023 OP Airdrop ✅</li>
              <li>2024 ARB Airdrop ✅</li>
              <li>2025 Linea Airdrop ✅</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Tools</h2>
            <p className="opacity-80">
              我在用的工具（钱包 / 资讯 / 数据）
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Notes</h2>
            <p className="opacity-80">
              10秒理解：我对今天市场的一句话
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <div className="flex items-center justify-center gap-4 opacity-90">
              <a className="underline underline-offset-4" href="#" target="_blank" rel="noreferrer">Telegram</a>
              <span>·</span>
              <a className="underline underline-offset-4" href="#" target="_blank" rel="noreferrer">X</a>
            </div>
          </section>
        </div>

        <footer className="pt-4 opacity-60 text-sm">
          少即是多，信息本质就是优势。
        </footer>
      </div>
    </main>
  )
}
