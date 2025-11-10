
import { useState, useEffect } from 'react';

export default function App() {
  const [btc, setBtc] = useState(null);

  const fetchPrice = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
      );
      const data = await res.json();
      setBtc({
        price: data.bitcoin.usd,
        change: data.bitcoin.usd_24h_change,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPrice();
    const t = setInterval(fetchPrice, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center gap-10 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Crypto Trader | Focus on Airdrops & DeFi</h1>
      </div>

      <section className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">BTC Price</h2>
        {btc ? (
          <div>
            <p className="text-4xl font-bold">${btc.price.toLocaleString()}</p>
            <p className={btc.change >= 0 ? "text-green-400 mt-2" : "text-red-400 mt-2"}>
              {btc.change.toFixed(2)}%
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <section className="text-center text-gray-300">
        <p>Tools: Wallet · DEX · DeFi</p>
        <p className="mt-2">Telegram: @btclyb · Email: btclyb@gmail.com</p>
      </section>
    </div>
  );
}
