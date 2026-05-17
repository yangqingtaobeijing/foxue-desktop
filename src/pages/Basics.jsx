import QuoteBlock from '../components/QuoteBlock';
import { Link } from 'react-router-dom';

export default function Basics() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📖</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            基础教义
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            深入理解佛教的核心教义体系
          </p>
        </div>

        <div className="space-y-12">
          {/* 三法印 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">三法印</h2>
            <div className="text-ink-light leading-relaxed space-y-4">
              <p>
                三法印是佛教的根本教义，是判断是否为正法的标准。所谓"法印"，即佛法的印记，如同国王的印玺能证明文书的真实性。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">诸行无常</h4>
                  <p className="text-sm">世间一切事物都在不断变化，没有永恒不变的东西。生灭变化是宇宙的根本规律。</p>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">诸法无我</h4>
                  <p className="text-sm">一切事物都没有永恒不变的实体或主宰，"我"只是一种假名，并非真实存在。</p>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">涅槃寂静</h4>
                  <p className="text-sm">断灭一切烦恼，超越生死轮回，达到究竟的寂静与解脱，这是修行的最终目标。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 四圣谛详解 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">四圣谛详解</h2>
            <div className="text-ink-light leading-relaxed space-y-6">
              <p>
                四圣谛是佛陀初转法轮时所说的核心教义，是整个佛教教义的基础。"谛"意为真理，四圣谛即四种神圣的真理。
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">苦谛（Dukkha）</h4>
                  <p>人生充满痛苦，包括生苦、老苦、病苦、死苦、爱别离苦、怨憎会苦、求不得苦、五阴炽盛苦。认识到苦的真相是修行的起点。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">集谛（Samudaya）</h4>
                  <p>苦的原因是贪、嗔、痴三毒。众生因为无明（愚痴）而生起贪欲和嗔恨，由此造业受报，轮回不息。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">灭谛（Nirodha）</h4>
                  <p>苦是可以断灭的。通过修行断除贪嗔痴，就能超越生死轮回，达到涅槃的境界，获得究竟的解脱。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">道谛（Magga）</h4>
                  <p>断灭苦的方法是八正道。这是佛陀指引的修行之路，包括正见、正思维、正语、正业、正命、正精进、正念、正定。</p>
                </div>
              </div>
            </div>
          </section>

          <QuoteBlock index={1} />

          {/* 十二因缘 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">十二因缘</h2>
            <div className="text-ink-light leading-relaxed">
              <p className="mb-4">
                十二因缘（又称十二缘起）是佛教解释生命轮回的根本理论，说明众生是如何在生死中流转的。
              </p>
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="font-serif text-ink text-center">
                  无明 → 行 → 识 → 名色 → 六入 → 触 → 受 → 爱 → 取 → 有 → 生 → 老死
                </p>
              </div>
              <div className="space-y-3">
                <p><strong>无明</strong>：对真理的无知，是一切苦的根本原因</p>
                <p><strong>行</strong>：由无明驱动的身口意行为</p>
                <p><strong>识</strong>：投胎时的心识</p>
                <p><strong>名色</strong>：身心的初步形成</p>
                <p><strong>六入</strong>：眼耳鼻舌身意六根的形成</p>
                <p><strong>触</strong>：六根与外境的接触</p>
                <p><strong>受</strong>：接触后产生的感受</p>
                <p><strong>爱</strong>：对感受产生贪爱</p>
                <p><strong>取</strong>：因贪爱而执取</p>
                <p><strong>有</strong>：因执取而造业</p>
                <p><strong>生</strong>：因业力而投生</p>
                <p><strong>老死</strong>：有生必有老死，如此循环不息</p>
              </div>
              <p className="mt-4">
                十二因缘说明了生死轮回的因果链条，修行就是要断除无明，从而打破这个轮回的循环。
              </p>
            </div>
          </section>

          {/* 五蕴 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">五蕴</h2>
            <div className="text-ink-light leading-relaxed">
              <p className="mb-4">
                五蕴是佛教对人的身心组成的分析，说明"我"只是五种元素的暂时聚合，并没有永恒不变的实体。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  { name: '色蕴', desc: '物质身体，包括四大（地水火风）及所造色' },
                  { name: '受蕴', desc: '感受，包括苦受、乐受、不苦不乐受' },
                  { name: '想蕴', desc: '思想概念，对外境的认知与分别' },
                  { name: '行蕴', desc: '意志活动，心理的造作与行为' },
                  { name: '识蕴', desc: '心识，了别外境的主体' },
                ].map((item) => (
                  <div key={item.name} className="bg-cream rounded-lg p-3 text-center">
                    <h4 className="font-serif font-semibold text-ink mb-1">{item.name}</h4>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                《心经》云："色不异空，空不异色，色即是空，空即是色，受想行识亦复如是。"说明五蕴皆空，不可执着。
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-sandalwood/5 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">继续学习</h3>
            <p className="text-ink-light mb-6">
              掌握了基础教义后，可以开始研读入门经典
            </p>
            <Link
              to="/learn/sutras-intro"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              学习经典入门 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
