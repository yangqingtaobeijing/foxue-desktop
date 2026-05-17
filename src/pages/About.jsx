import QuoteBlock from '../components/QuoteBlock';

export default function About() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🪷</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            关于我们
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            以慈悲心学习，以智慧心领悟
          </p>
        </div>

        <div className="space-y-12">
          {/* 网站宗旨 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">网站宗旨</h2>
            <div className="text-ink-light leading-relaxed space-y-4">
              <p>
                本网站旨在为佛学初学者提供一个系统、清晰、易于理解的学习平台。我们希望通过整理和呈现佛学的核心知识，帮助更多人了解和学习佛法的智慧。
              </p>
              <p>
                佛学博大精深，历经两千五百多年的发展，形成了丰富的教义体系和修行方法。然而，对于初学者来说，面对浩如烟海的经论，往往不知从何入手。
              </p>
              <p>
                因此，我们设计了由浅入深的学习路径，从基础概念到高级理论，从经典研读到禅修实践，希望能为您的佛学学习之旅提供指引。
              </p>
            </div>
          </section>

          <QuoteBlock index={7} />

          {/* 学习建议 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">学习建议</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">循序渐进</h4>
                  <p>佛学学习宜循序渐进，不可急躁。先了解基本概念（四谛、八正道、因果等），再研读经典，最后深入理论研究。基础打牢，才能更好地理解深奥的义理。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">解行并重</h4>
                  <p>佛学不仅是知识，更是修行。理论学习要与禅修实践相结合，将佛法的智慧融入日常生活。"解"（理解）与"行"（实践）缺一不可。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">亲近善知识</h4>
                  <p>有条件的话，建议亲近有修有证的法师或善知识，参加寺院的共修活动或禅修营。有老师的指导，可以少走弯路。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">保持开放心态</h4>
                  <p>学习佛学要保持开放、理性的态度。既不盲信，也不盲疑。通过闻思修，用自己的实践去验证佛法的真理性。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">持之以恒</h4>
                  <p>佛学博大精深，非一朝一夕所能通达。需要长期坚持学习，日积月累，方能有所领悟。"不积跬步，无以至千里"，贵在坚持。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 免责声明 */}
          <section className="bg-sandalwood/5 rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">免责声明</h2>
            <div className="text-ink-light leading-relaxed space-y-4">
              <p>
                本网站内容仅供参考学习之用，不构成任何宗教指导或修行建议。佛学学习涉及个人信仰与修行，建议在有修有证的法师指导下进行。
              </p>
              <p>
                本网站提供的外部链接仅为方便学习者查阅资料，我们对链接指向的内容不承担任何责任。
              </p>
              <p>
                如有任何疑问或建议，欢迎与我们联系。
              </p>
            </div>
          </section>

          {/* 结语 */}
          <div className="bg-sandalwood rounded-xl p-8 text-center text-cream">
            <p className="font-serif text-xl text-gold mb-4">
              愿以此功德，庄严佛净土。
            </p>
            <p className="font-serif text-xl text-gold mb-4">
              上报四重恩，下济三途苦。
            </p>
            <p className="font-serif text-xl text-gold mb-6">
              若有见闻者，悉发菩提心。
            </p>
            <p className="font-serif text-xl text-gold mb-6">
              尽此一报身，同生极乐国。
            </p>
            <div className="border-t border-gold/30 pt-6 mt-6">
              <p className="text-cream/70">
                愿一切众生离苦得乐，究竟解脱
              </p>
              <p className="text-gold text-2xl mt-2">卍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
