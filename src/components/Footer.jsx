import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-sandalwood text-cream/70 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold font-serif text-lg mb-4">佛学入门</h3>
            <p className="text-sm leading-relaxed">
              以慈悲心学习，以智慧心领悟。<br />
              愿此平台能为您的佛学学习之路提供指引。
            </p>
          </div>
          <div>
            <h3 className="text-gold font-serif text-lg mb-4">快速导航</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/learn/introduction" className="hover:text-gold transition-colors no-underline text-cream/70">初识佛学</Link>
              <Link to="/learn/basics" className="hover:text-gold transition-colors no-underline text-cream/70">基础教义</Link>
              <Link to="/learn/sutras-intro" className="hover:text-gold transition-colors no-underline text-cream/70">经典入门</Link>
              <Link to="/resources" className="hover:text-gold transition-colors no-underline text-cream/70">资源中心</Link>
            </div>
          </div>
          <div>
            <h3 className="text-gold font-serif text-lg mb-4">学习建议</h3>
            <p className="text-sm leading-relaxed">
              佛学学习宜循序渐进，先了解基本概念，<br />
              再研读经典，最后结合禅修实践。<br />
              切忌急躁，贵在坚持。
            </p>
          </div>
        </div>
        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-sm">
          <p>愿一切众生离苦得乐，究竟解脱</p>
          <p className="mt-2 text-cream/50">卍 佛学知识学习平台</p>
        </div>
      </div>
    </footer>
  );
}
