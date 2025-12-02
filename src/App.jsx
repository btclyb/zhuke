import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sun, Moon, Sparkles, Mail, Github, Twitter } from "lucide-react";
import avatar from "./assets/avatar.jpg"; // 假设头像路径

// 语言文本配置（提取为单独的配置）
const translationsConfig = {
  zh: {
    subtitle: "Web3 投机 / 空投",
    edition: "（熊市躺平版）",
    tagline: "那场暴跌带走了我的梦",
    about: "实战玩家，专注二级市场、空投策略、DeFi。",
    airdropTitle: "空投战绩",
    currentStatus: "当前状态",
    email: "邮箱",
    motto: "少即是多，信息本质就是优势",
    contactText: "联系我",
    success: "成功",
    failed: "失败"
  },
  en: {
    subtitle: "Web3 Speculator / Airdrop",
    edition: "(Bear market bad version)",
    tagline: "That crash took away my dream",
    about: "Hands-on player focusing on secondary market, airdrops and DeFi.",
    airdropTitle: "Airdrop Records",
    currentStatus: "Current Status",
    email: "Email",
    motto: "Less is more, information is alpha",
    contactText: "Contact me",
    success: "Success",
    failed: "Failed"
  },
};

// 状态文本配置（提取为单独的配置）
const statusConfig = {
  zh: [
    "🤖 机器人自动交易中", "🧙 施法：币价上涨！", "🏴‍☠️ 寻找宝藏币",
    "🎯 瞄准下一个百倍", "💎 钻石手已焊死", "🚫 忍住不卖",
    "🔥 热点追踪中", "🎮 GameFi打金中", "🦄 寻找独角兽项目",
    "📉 抄底按钮准备", "🚀 准备起飞", "💤 睡觉，勿扰（除非10倍）",
    "☕️ 喝咖啡，看K线", "📊 分析昨夜数据", "🤔 思考：抄底还是逃顶？",
    "🍱 边吃饭边看插针", "📉 假装淡定看跳水", "🧘 佛系持币",
    "🤑 数U（想象中的）", "🔍 寻找新Alpha", "🚀 美盘，准备起飞",
    "🌃 熬夜盯盘/FOMO中", "👨‍💻 假装工作实则在看盘", "🔗 检查链上交互",
    "🪙 研究新空投", "📝 写交易计划", "🧪 测试新协议",
    "🎣 挂单钓鱼中", "🚨 等待大消息", "🤫 偷偷交易中"
  ],
  en: [
    "🤖 Bot trading mode", "🧙 Casting: Price up!", "🏴‍☠️ Hunting treasure coins",
    "🎯 Aiming for 100x", "💎 Diamond hands locked", "🚫 Resisting sell urge",
    "🔥 Chasing narratives", "🎮 Gaming for yield", "🦄 Hunting unicorns",
    "📉 Buy dip ready", "🚀 Ready for launch", "💤 Sleeping (unless 10x)",
    "☕️ Coffee + charts", "📊 Analyzing overnight data", "🤔 Buy dip or sell high?",
    "🍱 Lunch with price alerts", "📉 Watching dip 'calmly'", "🧘 Zen holding",
    "🤑 Counting imaginary gains", "🔍 Hunting for alpha", "🚀 US market ready",
    "🌃 Late night trading/FOMO", "👨‍💻 Pretending to work", "🔗 Checking on-chain",
    "🪙 Researching airdrops", "📝 Writing trade plan", "🧪 Testing new protocol",
    "🎣 Placing limit orders", "🚨 Waiting for news", "🤫 Trading secretly"
  ]
};

// 空投数据
const airdropData = [
  { year: 2022, name: "OP", status: "success" },
  { year: 2023, name: "ARB", status: "success" },
  { year: 2024, name: "ZKS", status: "failed" },
  { year: 2025, name: "Linea", status: "success" },
];

// 工具函数：生成随机粒子位置
const generateParticlePositions = (count) => {
  return Array.from({ length: count }, () => ({
    x: `${Math.random() * 100}vw`,
    y: `${Math.random() * 100}vh`,
    duration: Math.random() * 20 + 10,
  }));
};

function Portfolio() {
  // 状态管理
  const [lang, setLang] = useState("zh");
  const [theme, setTheme] = useState("dark");
  const [isHovering, setIsHovering] = useState(null);
  const [funnyStatus, setFunnyStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // 计算属性 - 避免重复计算
  const L = useMemo(() => translationConfig[lang], [lang]);
  const funnyStatuses = useMemo(() => statusConfig[lang], [lang]);
  const particles = useMemo(() => generateParticlePositions(20), []);

  // 主题切换副作用
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  // 状态切换逻辑
  useEffect(() => {
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
  }, [funnyStatuses]);

  // 页面加载效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // 渲染空投记录项
  const renderAirdropItem = (item, index) => (
    <motion.div
      key={index}
      className="flex items-center justify-between py-2 border-b last:border-0 border-opacity-20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index + 0.8 }}
      borderColor={theme === "dark" ? "border-purple-500" : "border-purple-200"}
    >
      <div className="flex items-center gap-4">
        <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          {item.year}
        </span>
        <span className="font-medium">{item.name}</span>
      </div>
      <span
        className={`px-2 py-0.5 rounded text-xs font-medium ${
          item.status === "success"
            ? "bg-green-500/20 text-green-400 dark:bg-green-900/30"
            : "bg-red-500/20 text-red-400 dark:bg-red-900/30"
        }`}
      >
        {L[item.status]}
      </span>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <main
        className={`relative min-h-screen w-full overflow-x-hidden ${
          theme === "dark"
            ? "bg-black text-white"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        } flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 transition-colors duration-500`}
      >
        {/* 深色模式背景效果 */}
        <AnimatePresence mode="wait">
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

              {/* 浮动粒子 */}
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[1px] h-[1px] bg-purple-400 rounded-full"
                  initial={{ x: particle.x, y: particle.y }}
                  animate={{
                    x: `${Math.random() * 100}vw`,
                    y: `${Math.random() * 100}vh`,
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* 控制按钮 */}
        <motion.div
          className="absolute top-6 right-6 flex gap-3 z-20"
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
            aria-label={lang === "zh" ? "切换到英文" : "Switch to Chinese"}
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
            aria-label={theme === "dark" ? "切换到亮色模式" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            <span className="text-xs font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
          </motion.button>
        </motion.div>

        <div className="relative z-10 max-w-2xl w-full mx-auto space-y-8 sm:space-y-12 px-4">
          {/* 头像和标题 */}
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
                alt="个人头像"
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
                loading="lazy"
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
                className={`text-lg sm:text-xl ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {L.tagline}
              </motion.p>
            </div>
          </motion.div>

          {/* 关于我 */}
          <motion.section
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.p
              className={`text-base leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {L.about}
            </motion.p>
            <motion.p
              className={`text-sm italic ${
                theme === "dark" ? "text-purple-400/80" : "text-purple-600/80"
              }`}
            >
              "{L.motto}"
            </motion.p>
          </motion.section>

          {/* 当前状态 */}
          <motion.section
            className={`p-4 rounded-lg ${
              theme === "dark" 
                ? "bg-white/5 border border-white/10" 
                : "bg-gray-50 border border-gray-100 shadow-sm"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.h3
              className={`text-sm font-medium mb-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {L.currentStatus}
            </motion.h3>
            <motion.p
              className="text-base font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {funnyStatus}
            </motion.p>
          </motion.section>

          {/* 空投战绩 */}
          <motion.section
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.h2
              className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {L.airdropTitle}
            </motion.h2>
            <div className="space-y-1">
              {airdropData.map(renderAirdropItem)}
            </div>
          </motion.section>

          {/* 联系方式 */}
          <motion.section
            className="space-y-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.h2
              className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {L.contactText}
            </motion.h2>
            
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="mailto:your-email@example.com"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  theme === "dark"
                    ? "bg-white/5 border border-white/10 hover:bg-white/10"
                    : "bg-white border border-gray-200 hover:shadow-sm"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                <span>your-email@example.com</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  theme === "dark"
                    ? "bg-white/5 border border-white/10 hover:bg-white/10"
                    : "bg-white border border-gray-200 hover:shadow-sm"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  theme === "dark"
                    ? "bg-white/5 border border-white/10 hover:bg-white/10"
                    : "bg-white border border-gray-200 hover:shadow-sm"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Twitter size={16} />
                <span>Twitter</span>
              </motion.a>
            </div>
          </motion.section>

          {/* 页脚 */}
          <motion.footer
            className={`text-center text-sm pt-8 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <p>© {new Date().getFullYear()} zk. All rights reserved.</p>
          </motion.footer>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
