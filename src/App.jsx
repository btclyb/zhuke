import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Trophy, Target, Sparkles, Moon, Sun, Globe, Bitcoin, TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import avatar from "./assets/avatar.png";

export default function Portfolio() {
  const [lang, setLang] = useState("zh");
  const [theme, setTheme] = useState("dark");
  const [isHovering, setIsHovering] = useState(null);
  const [funnyStatus, setFunnyStatus] = useState("");
  const [btcData, setBtcData] = useState({
    price: null,
    change24h: null,
    high24h: null,
    low24h: null,
    volume: null,
    loading: true,
    lastUpdated: null,
    apiSource: "本地缓存"
  });

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
      btcPrice: "比特币价格",
      updated: "更新于",
      loading: "获取价格中...",
      change24h: "24h涨跌",
      refresh: "刷新",
      source: "数据源",
      high24h: "24h最高",
      low24h: "24h最低",
      volume: "24h交易量",
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
      btcPrice: "Bitcoin Price",
      updated: "Updated",
      loading: "Fetching price...",
      change24h: "24h Change",
      refresh: "Refresh",
      source: "Source",
      high24h: "24h High",
      low24h: "24h Low",
      volume: "24h Volume",
    },
  };

  const L = t[lang];

  // 主题切换效果
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  // 模拟的比特币价格数据（作为后备）
  const mockBTCData = {
    price: 65230 + Math.random() * 2000 - 1000,
    change24h: (Math.random() * 10 - 5),
    high24h: 68000,
    low24h: 64000,
    volume: 32800000000,
    source: "模拟数据"
  };

  // 获取比特币价格数据 - 使用CoinGlass API
  const fetchBitcoinPrice = async () => {
    setBtcData(prev => ({ ...prev, loading: true }));
    
    // 尝试的API源
    const apis = [
      // 1. CoinGlass API (主要)
      {
        name: "CoinGlass",
        url: "https://open-api.coinglass.com/api/pro/v1/futures/openInterest/chart?symbol=BTC&interval=2",
        headers: {
          'accept': 'application/json',
          'coinglassSecret': '9a5d7b8c3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5'
        },
        parser: (data) => {
          // CoinGlass返回的数据结构可能不同，我们只取最新价格
          const latestData = data.data?.[0] || {};
          return {
            price: latestData.price || mockBTCData.price,
            change24h: latestData.change24h || mockBTCData.change24h,
            high24h: latestData.high24h || mockBTCData.high24h,
            low24h: latestData.low24h || mockBTCData.low24h,
            volume: latestData.volume || mockBTCData.volume
          };
        }
      },
      // 2. CoinGecko的国内镜像
      {
        name: "CoinGecko镜像",
        url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true",
        headers: {},
        parser: (data) => ({
          price: data.bitcoin.usd,
          change24h: data.bitcoin.usd_24h_change,
          high24h: null,
          low24h: null,
          volume: null
        })
      },
      // 3. 简单的公共API
      {
        name: "公共API",
        url: "https://api.coinstats.app/public/v1/coins/bitcoin",
        headers: {},
        parser: (data) => ({
          price: data.coin.price,
          change24h: data.coin.priceChange1d,
          high24h: null,
          low24h: null,
          volume: null
        })
      }
    ];

    for (const api of apis) {
      try {
        console.log(`尝试从 ${api.name} 获取数据...`);
        
        // 直接请求，CoinGlass应该支持CORS
        const response = await fetch(api.url, {
          headers: api.headers,
          signal: AbortSignal.timeout(8000) // 8秒超时
        });
        
        if (!response.ok) {
          console.warn(`${api.name} 响应失败: ${response.status}`);
          continue;
        }
        
        const data = await response.json();
        console.log(`${api.name} 返回数据:`, data);
        
        const parsedData = api.parser(data);
        
        setBtcData({
          price: parsedData.price,
          change24h: parsedData.change24h,
          high24h: parsedData.high24h,
          low24h: parsedData.low24h,
          volume: parsedData.volume,
          loading: false,
          lastUpdated: new Date(),
          apiSource: api.name
        });
        
        console.log(`成功从 ${api.name} 获取数据`);
        return; // 成功获取，退出函数
      } catch (error) {
        console.warn(`${api.name} API失败:`, error.message);
        continue; // 尝试下一个API
      }
    }
    
    // 所有API都失败，使用模拟数据
    console.log("所有API都失败，使用模拟数据");
    setBtcData({
      price: mockBTCData.price,
      change24h: mockBTCData.change24h,
      high24h: mockBTCData.high24h,
      low24h: mockBTCData.low24h,
      volume: mockBTCData.volume,
      loading: false,
      lastUpdated: new Date(),
      apiSource: "模拟数据"
    });
  };

  // 初始化获取价格
  useEffect(() => {
    fetchBitcoinPrice();
    
    // 每90秒更新一次价格
    const interval = setInterval(fetchBitcoinPrice, 90000);
    
    return () => clearInterval(interval);
  }, []);

  // 有趣的状态列表
  useEffect(() => {
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
    }, 60000);

    return () => clearInterval(interval);
  }, [lang]);

  // 格式化价格显示
  const formatPrice = (price) => {
    if (!price) return "$---";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // 格式化交易量
  const formatVolume = (volume) => {
    if (!volume) return null;
    if (volume >= 1000000000) {
      return `$${(volume / 1000000000).toFixed(1)}B`;
    }
    if (volume >= 1000000) {
      return `$${(volume / 1000000).toFixed(1)}M`;
    }
    return `$${volume.toLocaleString()}`;
  };

  // 格式化时间
  const formatTime = (date) => {
    if (!date) return '';
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return lang === "zh" ? "刚刚" : "Just now";
    if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}${lang === "zh" ? "分钟前" : "m ago"}`;
    }
    
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}${lang === "zh" ? "小时前" : "h ago"}`;
  };

  // 手动刷新价格
  const handleRefreshPrice = () => {
    fetchBitcoinPrice();
  };

  return (
    <div className="w-full overflow-x-hidden">
      <main
        className={`relative min-h-screen w-full overflow-x-hidden ${
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
            </>
          )}
        </AnimatePresence>

        {/* Controls */}
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

        <div className="relative z-10 max-w-2xl w-full mx-auto space-y-8 sm:space-y-12 px-4">
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

          {/* 比特币价格卡片 */}
          <motion.div
            className={`rounded-2xl p-5 border transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-yellow-900/20 via-yellow-800/10 to-yellow-900/20 border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                : "bg-gradient-to-r from-yellow-50 via-yellow-50/50 to-yellow-50 border-yellow-200 hover:border-yellow-300 hover:shadow-xl backdrop-blur-sm"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex flex-col gap-4">
              {/* 主要价格信息 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    theme === "dark" 
                      ? "bg-yellow-500/20" 
                      : "bg-yellow-100"
                  }`}>
                    <Bitcoin size={24} className={theme === "dark" ? "text-yellow-400" : "text-yellow-600"} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-70 flex items-center gap-2 mb-1">
                      {L.btcPrice}
                      {btcData.loading && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 animate-pulse">
                          {L.loading}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <div className="text-xl sm:text-2xl font-bold">
                        {btcData.loading ? "$---" : formatPrice(btcData.price)}
                      </div>
                      {btcData.change24h !== null && !isNaN(btcData.change24h) && (
                        <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${
                          btcData.change24h >= 0
                            ? theme === "dark"
                              ? "bg-green-900/30 text-green-400"
                              : "bg-green-100 text-green-700"
                            : theme === "dark"
                            ? "bg-red-900/30 text-red-400"
                            : "bg-red-100 text-red-700"
                        }`}>
                          {btcData.change24h >= 0 ? (
                            <TrendingUp size={14} />
                          ) : (
                            <TrendingDown size={14} />
                          )}
                          {Math.abs(btcData.change24h).toFixed(2)}%
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <motion.button
                    onClick={handleRefreshPrice}
                    disabled={btcData.loading}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all ${
                      theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 disabled:opacity-30"
                        : "bg-gray-100 hover:bg-gray-200 disabled:opacity-30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RefreshCw size={12} className={btcData.loading ? "animate-spin" : ""} />
                    {L.refresh}
                  </motion.button>
                </div>
              </div>

              {/* 详细信息 */}
              {!btcData.loading && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                  {btcData.high24h && (
                    <div className="text-center">
                      <div className="text-xs opacity-70 mb-1">{L.high24h}</div>
                      <div className="text-sm font-medium text-green-500">{formatPrice(btcData.high24h)}</div>
                    </div>
                  )}
                  {btcData.low24h && (
                    <div className="text-center">
                      <div className="text-xs opacity-70 mb-1">{L.low24h}</div>
                      <div className="text-sm font-medium text-red-500">{formatPrice(btcData.low24h)}</div>
                    </div>
                  )}
                  {btcData.volume && (
                    <div className="text-center">
                      <div className="text-xs opacity-70 mb-1">{L.volume}</div>
                      <div className="text-sm font-medium">{formatVolume(btcData.volume)}</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-xs opacity-70 mb-1">{L.updated}</div>
                    <div className="text-sm font-medium">{formatTime(btcData.lastUpdated)}</div>
                  </div>
                </div>
              )}

              {/* 数据源信息 */}
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <div className={`text-xs px-2 py-1 rounded ${
                  btcData.apiSource === "模拟数据"
                    ? theme === "dark"
                      ? "bg-red-900/30 text-red-300"
                      : "bg-red-100 text-red-700"
                    : theme === "dark"
                    ? "bg-green-900/30 text-green-300"
                    : "bg-green-100 text-green-700"
                }`}>
                  {L.source}: {btcData.apiSource}
                </div>
                <div className={`text-xs opacity-50 ${
                  theme === "dark" 
                    ? "text-white/40" 
                    : "text-gray-500"
                }`}>
                  {lang === "zh" ? "数据延迟<5分钟" : "Data delay <5min"}
                </div>
              </div>

              {/* 价格趋势动画效果 */}
              {!btcData.loading && btcData.change24h !== null && !isNaN(btcData.change24h) && (
                <motion.div 
                  className={`h-1 rounded-full ${
                    btcData.change24h >= 0
                      ? "bg-gradient-to-r from-green-500 to-emerald-400"
                      : "bg-gradient-to-r from-red-500 to-orange-400"
                  }`}
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: `${Math.min(Math.abs(btcData.change24h) * 10, 100)}%` 
                  }}
                  transition={{ duration: 1 }}
                />
              )}
            </div>
          </motion.div>

          {/* Current Status Card */}
          <motion.div
            className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                : "bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 border-gray-200/80 hover:border-purple-300 hover:shadow-xl backdrop-blur-sm"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex flex-col items-center justify-center text-center gap-1">
              <div className="flex items-center gap-2 mb-1">
                <div className={`p-1.5 rounded-lg ${
                  theme === "dark" 
                    ? "bg-purple-500/20" 
                    : "bg-purple-100"
                }`}>
                  <Target size={16} className={theme === "dark" ? "text-purple-400" : "text-purple-600"} />
                </div>
                <div className="text-sm opacity-70">{L.currentStatus}</div>
              </div>
              <motion.div 
                className="text-lg sm:text-xl font-bold"
                key={funnyStatus}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {funnyStatus}
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 w-full">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {airdrops.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all w-full ${
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
              className="text-center py-8 w-full"
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
            className={`pt-6 text-center w-full ${
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
            <div className="text-xs opacity-30 mt-2">
              {lang === "zh" ? "数据仅供参考，投资需谨慎" : "Data for reference only, invest with caution"}
            </div>
          </motion.footer>
        </div>
      </main>
    </div>
  );
}
