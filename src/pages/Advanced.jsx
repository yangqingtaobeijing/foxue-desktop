import QuoteBlock from '../components/QuoteBlock';
import { Link } from 'react-router-dom';

export default function Advanced() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🧠</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            高级研习
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            探索佛学的高深理论与哲学思想
          </p>
        </div>

        <div className="space-y-12">
          {/* 唯识学 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">唯识学</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>代表人物</strong>：无著、世亲（印度）；玄奘、窥基（中国）</p>
                <p><strong>核心经典</strong>：《成唯识论》《瑜伽师地论》</p>
                <p><strong>核心思想</strong>：万法唯识，三界唯心</p>
              </div>
              <p className="mb-4">
                唯识学（又称法相宗、瑜伽行派）是大乘佛教的重要哲学体系，由无著、世亲兄弟创立。唯识学认为，我们所认识的一切外境，都是心识的变现，并非心外实有。
              </p>
              <p className="mb-4">
                唯识学将心识分为八种：前五识（眼耳鼻舌身）、第六意识、第七末那识、第八阿赖耶识。其中阿赖耶识（藏识）是储藏一切种子的根本识。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">三性三无性</h4>
                  <p className="text-sm">遍计所执性（错误的认知）、依他起性（因缘所生）、圆成实性（真实的本体）。三无性说明这三种性都无自性。</p>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">转识成智</h4>
                  <p className="text-sm">通过修行，将八识转为四智：前五识→成所作智，第六识→妙观察智，第七识→平等性智，第八识→大圆镜智。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 中观哲学 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">中观哲学</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>代表人物</strong>：龙树菩萨、提婆菩萨（印度）；鸠摩罗什（中国）</p>
                <p><strong>核心经典</strong>：《中论》《百论》《十二门论》</p>
                <p><strong>核心思想</strong>：缘起性空，不落两边</p>
              </div>
              <p className="mb-4">
                中观学派（又称空宗）由龙树菩萨创立，是大乘佛教最重要的哲学流派之一。中观哲学以"空"为核心，但强调"空"不是虚无，而是"缘起性空"。
              </p>
              <p className="mb-4">
                龙树菩萨在《中论》中提出"八不中道"：不生亦不灭，不常亦不断，不一亦不异，不来亦不出。这八种否定，破除了一切执着与边见。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "因缘所生法，我说即是空，亦为是假名，亦是中道义。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 龙树菩萨《中论》</p>
              </div>
              <p className="mt-4">
                中观哲学对中国佛教，特别是三论宗和禅宗产生了深远影响。
              </p>
            </div>
          </section>

          <QuoteBlock index={6} />

          {/* 因明学 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">因明学</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>代表人物</strong>：陈那菩萨、法称菩萨（印度）</p>
                <p><strong>核心经典</strong>：《因明正理门论》《因明入正理论》</p>
                <p><strong>核心思想</strong>：逻辑推理与论辩方法</p>
              </div>
              <p className="mb-4">
                因明学是佛教的逻辑学与认识论，相当于西方的形式逻辑。因明学提供了严谨的推理方法，用于论证佛教教义的正确性。
              </p>
              <p className="mb-4">
                因明学的核心是"三支论式"：宗（论题）、因（理由）、喻（例证）。例如：
              </p>
              <div className="bg-cream rounded-lg p-4">
                <p><strong>宗</strong>：声是无常</p>
                <p><strong>因</strong>：所作性故</p>
                <p><strong>喻</strong>：如瓶，瓶是所作，瓶是无常</p>
              </div>
              <p className="mt-4">
                因明学不仅是辩论的工具，更是培养正确思维、辨别真伪的重要方法。
              </p>
            </div>
          </section>

          {/* 佛学与现代哲学 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">佛学与现代哲学</h2>
            <div className="text-ink-light leading-relaxed">
              <p className="mb-4">
                佛学与现代西方哲学有许多可以对话的地方，两者在某些问题上有惊人的相似之处。
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">与现象学的对话</h4>
                  <p>胡塞尔的现象学强调"回到事物本身"，与唯识学对意识的分析有相通之处。两者都关注意识的结构与现象的本质。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">与存在主义的对话</h4>
                  <p>存在主义关注人的存在困境（焦虑、孤独、死亡），与佛教对苦的分析有相似之处。但佛教提供了解脱的道路。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">与认知科学的对话</h4>
                  <p>现代认知科学对意识、自我、注意力的研究，与佛教的心识理论有诸多可以互相印证的地方。正念修行已被现代心理学广泛采用。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">与量子物理的对话</h4>
                  <p>量子力学中的"观察者效应""不确定性原理"等，与佛教"万法唯识""缘起性空"的思想有某种呼应。但需谨慎类比，不可过度附会。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Section */}
          <div className="bg-sandalwood/5 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">学习之路</h3>
            <p className="text-ink-light mb-4">
              佛学博大精深，学无止境。愿您在学习的道路上，智慧增长，烦恼减少。
            </p>
            <p className="text-ink-light mb-6">
              "佛法在世间，不离世间觉"——将佛法的智慧融入日常生活，才是真正的修行。
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              探索更多资源 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
