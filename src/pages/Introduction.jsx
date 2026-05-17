import QuoteBlock from '../components/QuoteBlock';
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🌱</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            初识佛学
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            了解佛教的起源、核心概念与基本教义，开启佛学之旅
          </p>
        </div>

        <div className="space-y-12">
          {/* 什么是佛学 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">什么是佛学</h2>
            <div className="prose prose-lg max-w-none text-ink-light leading-relaxed">
              <p className="mb-4">
                佛学，是指释迦牟尼佛所教导的佛法，以及后世弟子对佛法的研究与阐述。它不仅是一种宗教信仰，更是一套完整的哲学体系和修行方法。
              </p>
              <p className="mb-4">
                "佛"字在梵语中为"Buddha"，意为"觉悟者"。佛学的核心目标是帮助众生认识生命的真相，断除烦恼痛苦，获得究竟的解脱与自在。
              </p>
              <p>
                佛学涵盖了宇宙人生的方方面面，从宏观的宇宙观到微观的心理分析，从个人修行到社会伦理，都有深刻的阐述。
              </p>
            </div>
          </section>

          {/* 佛教的起源与历史 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">佛教的起源与历史</h2>
            <div className="prose prose-lg max-w-none text-ink-light leading-relaxed">
              <p className="mb-4">
                佛教起源于公元前6世纪的古印度，由悉达多·乔达摩（Siddhartha Gautama）创立。悉达多王子在29岁时，有感于人世间的生老病死之苦，毅然舍弃王位出家修行。
              </p>
              <p className="mb-4">
                经过六年的苦行与禅修，他在菩提树下证悟成佛，时年35岁。此后，佛陀开始了长达45年的弘法生涯，在印度各地传播佛法，教化众生。
              </p>
              <p className="mb-4">
                佛教在印度发展后，逐渐向周边国家传播：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>南传佛教</strong>：传入斯里兰卡、缅甸、泰国、老挝、柬埔寨等东南亚国家，以巴利文经典为主</li>
                <li><strong>北传佛教</strong>：传入中国、韩国、日本、越南等东亚国家，以大乘佛教为主</li>
                <li><strong>藏传佛教</strong>：传入西藏、蒙古等地，融合了印度佛教与本地文化</li>
              </ul>
              <p className="mt-4">
                佛教于两汉之际传入中国，经过两千多年的发展，与中国传统文化深度融合，形成了具有中国特色的佛教体系。
              </p>
            </div>
          </section>

          <QuoteBlock index={0} />

          {/* 核心概念简介 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">核心概念简介</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">四谛（四圣谛）</h3>
                <p className="text-ink-light leading-relaxed">
                  四谛是佛教最基本的教义，即苦谛、集谛、灭谛、道谛。苦谛说明人生是苦的真相；集谛说明苦的原因是贪嗔痴；灭谛说明苦可以断灭；道谛说明断灭苦的方法是八正道。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">八正道</h3>
                <p className="text-ink-light leading-relaxed">
                  八正道是佛陀教导的修行方法，包括：正见、正思维、正语、正业、正命、正精进、正念、正定。这是通往解脱的正确道路。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">因果与缘起</h3>
                <p className="text-ink-light leading-relaxed">
                  佛教认为一切事物都是因缘和合而生，因缘散灭而灭。善因结善果，恶因结恶果，这就是因果报应的道理。缘起法则是佛教最重要的哲学思想之一。
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">三法印</h3>
                <p className="text-ink-light leading-relaxed">
                  三法印是判断是否为佛法的标准：诸行无常（一切事物都在变化）、诸法无我（没有永恒不变的自我）、涅槃寂静（断灭烦恼后的寂静境界）。
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-sandalwood/5 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">继续学习</h3>
            <p className="text-ink-light mb-6">
              了解了佛学的基本概念后，可以进一步深入学习基础教义
            </p>
            <Link
              to="/learn/basics"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              学习基础教义 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
