import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Trophy, Target, Sparkles, Moon, Sun, Globe } from "lucide-react";
import avatar from "./assets/avatar.png";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");
  const [theme, setTheme] = useState("dark");
  const [isHovering, setIsHovering] = useState(null);
  const [funnyStatus, setFunnyStatus] = useState("");

  const airdrops = [
    { year: 2022, name: "OP", status: "success" },
    { year: 2023, name: "ARB", status: "success" },
    { year: 2024, name: "ZKS", status: "failed" },
    { year: 2025, name: "Linea", status: "success" },
  ];

  const t = {
    zh: {
      subtitle: "Web3 投机 / 空投",
      edition: "（破产版）",
      tagline: "那场暴跌带走了我的梦",
      about: "实战玩家，专注二级市场、空投策略、DeFi。擅长熊市苟活，牛市起飞。",
      airdropTitle: "空投战绩",
      currentStatus: "当前状态",
      email: "邮箱",
      motto: "少即是多，信息本质就是优势",
      contactText: "欢迎交流、合作、吐槽",
    },
    en: {
      subtitle: "Web3 Speculator / Airdrop",
      edition: "(Bankrupt Edition)",
      tagline: "That crash took away my dream",
      about: "Hands-on player focusing on secondary market, airdrops and DeFi. Surviving bear markets, thriving in bull runs.",
      airdropTitle: "Airdrop Records",
      currentStatus: "Current Status",
      email: "Email",
      motto: "Less is more, information is alpha",
      contactText: "Open to collaboration, discussion, or just chatting",
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

  useEffect(() => {
    // 有趣的状态列表
    const funnyStatuses = lang === "zh" ? [
      "🤖 机器人自动交易中",
      "🧙 施法：币价上涨！",
      "🏴‍☠️ 寻找宝藏币",
      "🎯 瞄准下一个百倍",
      "💎 钻石手已焊死",
      "🚫 忍住不卖",
      "🔥 热点追踪中",
      "🎮 GameFi打金中",
      "🦄 寻找独角兽项目",
      "📉 抄底按钮准备",
      "🚀 准备起飞",
      "💤 睡觉，勿扰（除非10倍）",
      "☕️ 喝咖啡，看K线",
      "📊 分析昨夜数据",
      "🤔 思考：抄底还是逃顶？",
      "🍱 边吃饭边看插针",
      "📉 假装淡定看跳水",
      "🧘 佛系持币",
      "🤑 数U（想象中的）",
      "🔍 寻找新Alpha",
      "🚀 美盘，准备起飞",
      "🌃 熬夜盯盘/FOMO中",
      "👨‍💻 假装工作实则在看盘",
      "🔗 检查链上交互",
      "🪙 研究新空投",
      "📝 写交易计划",
      "🧪 测试新协议",
      "🎣 挂单钓鱼中",
      "🚨 等待大消息",
      "🤫 偷偷交易中"
    ] : [
      "🤖 Bot trading mode",
      "🧙 Casting: Price up!",
      "🏴‍☠️ Hunting treasure coins",
      "🎯 Aiming for 100x",
      "💎 Diamond hands locked",
      "🚫 Resisting sell urge",
      "🔥 Chasing narratives",
      "🎮 Gaming for yield",
      "🦄 Hunting unicorns",
      "📉 Buy dip ready",
      "🚀 Ready for launch",
      "💤 Sleeping (unless 10x)",
      "☕️ Coffee + charts",
      "📊 Analyzing overnight data",
      "🤔 Buy dip or sell high?",
      "🍱 Lunch with price alerts",
      "📉 Watching dip 'calmly'",
      "🧘 Zen holding",
      "🤑 Counting imaginary gains",
      "🔍 Hunting for alpha",
      "🚀 US market ready",
      "🌃 Late night trading/FOMO",
      "👨‍💻 Pretending to work",
      "🔗 Checking on-chain",
      "🪙 Researching airdrops",
      "📝 Writing trade plan",
      "🧪 Testing new protocol",
      "🎣 Placing limit orders",
      "🚨 Waiting for news",
      "🤫 Trading secretly"
    ];

    // 初始状态：根据小时选择
    const hour = new Date().getHours();
    const initialIndex = hour % funnyStatuses.length;
    setFunnyStatus(funnyStatuses[initialIndex]);

    // 每分钟换一个状态
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * funnyStatuses.length);
      setFunnyStatus(funnyStatuses[randomIndex]);
    }, 60000); // 每60秒更换一次

    return () => clearInterval(interval);
  }, [lang]);

  return (
    <main
      className={`relative min-h-screen ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      } flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 transition-colors duration-500`}
    >
      {/* Tech Background Effects */}
      <AnimatePresence>
        {theme === "dark" && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_70%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[1px] h-[1px] bg-purple-400 rounded-full"
                initial={{
                  x: Math.random() * 100 + "vw",
                  y: Math.random() * 100 + "vh",
                }}
                animate={{
                  x: Math.random() * 100 + "vw",
                  y: Math.random() * 100 + "vh",
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Controls */}
      <motion.div
        className="absolute top-6 right-6 flex gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all ${
            theme === "dark"
              ? "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30"
              : "border-gray-300 bg-white/70 hover:bg-white shadow-sm hover:shadow"
          }`}
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe size={14} />
          <span className="text-xs font-medium">{lang === "zh" ? "EN" : "中文"}</span>
        </motion.button>
        <motion.button
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all ${
            theme === "dark"
              ? "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30"
              : "border-gray-300 bg-white/70 hover:bg-white shadow-sm hover:shadow"
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          <span className="text-xs font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
        </motion.button>
      </motion.div>

      <div className="relative z-10 max-w-2xl w-full space-y-8 sm:space-y-12">
        {/* Header with Avatar */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative inline-block"
            onHoverStart={() => setIsHovering("avatar")}
            onHoverEnd={() => setIsHovering(null)}
          >
            <motion.img
              src={avatar}
              alt="avatar"
              className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 transition-all duration-300 ${
                theme === "dark"
                  ? "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  : "border-purple-200 shadow-lg"
              }`}
              animate={{
                scale: isHovering === "avatar" ? 1.05 : 1,
                boxShadow: isHovering === "avatar" 
                  ? theme === "dark" 
                    ? "0 0 40px rgba(168,85,247,0.6)" 
                    : "0 0 30px rgba(168,85,247,0.3)"
                  : undefined,
              }}
            />
            {isHovering === "avatar" && (
              <motion.div
                className="absolute -top-2 -right-2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
              >
                <Sparkles className="text-yellow-400" size={20} />
              </motion.div>
            )}
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {L.subtitle}
              <span className={`ml-2 text-sm sm:text-base font-normal ${
                theme === "dark" 
                  ? "text-purple-300/80" 
                  : "text-purple-600/80"
              }`}>
                {L.edition}
              </span>
            </motion.h1>
            
            <motion.p
              className={`text-sm sm:text-base italic ${
                theme === "dark" 
                  ? "text-gray-400" 
                  : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ✨ {L.tagline}
            </motion.p>
          </div>
        </motion.div>

        {/* Current Status Card (占满宽度) */}
<motion.div
  className={`rounded-2xl p-6 border transition-all duration-300 ${
    theme === "dark"
      ? "bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
      : "bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 border-gray-200/80 hover:border-purple-300 hover:shadow-xl backdrop-blur-sm"
  }`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  whileHover={{ y: -3 }}
>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    {/* 删除原有的左右布局，改为居中布局 */}
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${
        theme === "dark" 
          ? "bg-purple-500/20" 
          : "bg-purple-100"
      }`}>
        <Target size={20} className={theme === "dark" ? "text-purple-400" : "text-purple-600"} />
      </div>
      <div className="text-left">
        <div className="text-sm opacity-70">{L.currentStatus}</div>
        <motion.div 
          className="text-lg font-bold"
          key={funnyStatus}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {funnyStatus}
        </motion.div>
      </div>
    </div>
    {/* 删除这个标签 */}
    {/* <div className={`text-xs px-3 py-1 rounded-full ${
      theme === "dark" 
        ? "bg-white/10 text-white/70" 
        : "bg-gray-100 text-gray-600"
    }`}>
      {lang === "zh" ? "状态每分钟更新" : "Updates every minute"}
    </div> */}
  </div>
</motion.div>
              </div>
            </div>
            <div className={`text-xs px-3 py-1 rounded-full ${
              theme === "dark" 
                ? "bg-white/10 text-white/70" 
                : "bg-gray-100 text-gray-600"
            }`}>
              {lang === "zh" ? "状态每分钟更新" : "Updates every minute"}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* About Section */}
          <motion.section
            className={`rounded-2xl p-6 border transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                : "bg-white/90 border-gray-200/80 hover:border-purple-300 hover:shadow-xl backdrop-blur-sm"
            }`}
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${
                theme === "dark" 
                  ? "bg-purple-500/20" 
                  : "bg-purple-100"
              }`}>
                <Target size={18} />
              </div>
              About
            </h2>
            <p className={`leading-relaxed ${
              theme === "dark" 
                ? "text-gray-300" 
                : "text-gray-700"
            }`}>
              {L.about}
            </p>
          </motion.section>

          {/* Airdrop Section */}
          <motion.section
            className={`rounded-2xl p-6 border transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                : "bg-white/90 border-gray-200/80 hover:border-blue-300 hover:shadow-xl backdrop-blur-sm"
            }`}
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${
                theme === "dark" 
                  ? "bg-blue-500/20" 
                  : "bg-blue-100"
              }`}>
                <Trophy size={18} />
              </div>
              {L.airdropTitle}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {airdrops.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                    theme === "dark"
                      ? "hover:bg-white/5"
                      : "hover:bg-gray-50/80"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                      item.status === "success"
                        ? theme === "dark"
                          ? "bg-green-900/30 text-green-400"
                          : "bg-green-100 text-green-700"
                        : theme === "dark"
                        ? "bg-red-900/30 text-red-400"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {item.status === "success" ? "✓" : "✗"}
                    </div>
                    <div>
                      <div className="font-bold text-lg">
                        {item.year} {item.name}
                      </div>
                      <div className="text-sm opacity-70">
                        Airdrop
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "success"
                      ? theme === "dark"
                        ? "bg-green-900/30 text-green-400 border border-green-700/30"
                        : "bg-green-100 text-green-700 border border-green-200"
                      : theme === "dark"
                      ? "bg-red-900/30 text-red-400 border border-red-700/30"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}>
                    {item.status === "success" 
                      ? lang === "zh" ? "成功" : "Success" 
                      : lang === "zh" ? "失败" : "Failed"
                    }
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            className="text-center py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="mailto:kk@zhuke.ggff.net"
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-400 hover:to-blue-400 shadow-lg"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              kk@zhuke.ggff.net
              <span className="text-sm opacity-80">↗</span>
            </motion.a>
            
            <p className={`mt-4 text-sm ${
              theme === "dark" 
                ? "opacity-50" 
                : "text-gray-500"
            }`}>
              {L.contactText}
            </p>
          </motion.section>
        </div>

        {/* Footer */}
        <motion.footer
          className={`pt-6 text-center ${
            theme === "dark" 
              ? "opacity-50" 
              : "text-gray-600"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
            <div>💎 {L.motto}</div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                theme === "dark" 
                  ? "bg-green-500 animate-pulse" 
                  : "bg-green-400"
              }`} />
              {lang === "zh" ? "在线" : "Online"}
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
