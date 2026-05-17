import { Link } from 'react-router-dom';
import { quotes } from '../data/quotes';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[quoteIndex];

  return (
    <section className="relative bg-gradient-to-b from-sandalwood via-sandalwood-light to-sandalwood text-cream py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl text-gold">卍</div>
        <div className="absolute bottom-10 right-10 text-6xl text-gold rotate-45">卍</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-gold">☸</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <span className="text-5xl md:text-6xl">🪷</span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 animate-fade-in-up">
          佛学入门
        </h1>

        <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
          由浅入深，系统学习佛学知识<br />
          感悟智慧，开启心灵觉醒之旅
        </p>

        <div className="bg-sandalwood/60 backdrop-blur-sm rounded-lg p-6 mb-10 max-w-xl mx-auto border border-gold/20 animate-fade-in-up animate-delay-200">
          <p className="font-serif text-lg md:text-xl text-gold-light italic leading-relaxed">
            "{quote.text}"
          </p>
          <p className="text-cream/60 text-sm mt-3">—— {quote.source}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <Link
            to="/learn/introduction"
            className="inline-flex items-center justify-center px-8 py-3 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-lg"
          >
            开始学习
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-gold/50 text-gold rounded-lg hover:bg-gold/10 transition-colors no-underline"
          >
            探索资源
          </Link>
        </div>
      </div>
    </section>
  );
}
