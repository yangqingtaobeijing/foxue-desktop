import QuoteBlock from '../components/QuoteBlock';
import { Link } from 'react-router-dom';

export default function Meditation() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🧘</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            禅修实践
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            学习禅修方法，将佛法融入日常生活
          </p>
        </div>

        <div className="space-y-12">
          {/* 禅修基础 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">禅修基础</h2>
            <div className="text-ink-light leading-relaxed">
              <p className="mb-4">
                禅修，又称冥想、静坐，是佛教修行的核心方法之一。通过禅修，我们可以训练心的专注力与觉察力，逐渐认识心的本来面目。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">禅修的准备</h4>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>选择安静、整洁的环境</li>
                    <li>穿着宽松舒适的衣服</li>
                    <li>选择舒适的坐姿（散盘、单盘或双盘）</li>
                    <li>保持脊柱正直，放松全身</li>
                    <li>设定合理的禅修时间（初学者15-30分钟）</li>
                  </ul>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">禅修的心态</h4>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>不期待、不追求任何境界</li>
                    <li>不评判、不对抗出现的念头</li>
                    <li>保持耐心与恒心</li>
                    <li>以轻松、开放的心态面对</li>
                    <li>接受当下的状态</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 正念修行 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">正念修行</h2>
            <div className="text-ink-light leading-relaxed">
              <p className="mb-4">
                正念（Sati）是佛教修行的核心概念，意为"清楚地觉知当下"。正念修行不是要停止思考，而是以觉察的态度面对当下的一切经验。
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">正念的四念处</h4>
                  <p>佛陀教导的正念修行包括四个层面：身念处（观身不净）、受念处（观受是苦）、心念处（观心无常）、法念处（观法无我）。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">日常生活中的正念</h4>
                  <p>正念不仅限于禅坐时，更应融入日常生活的每一个当下：吃饭时专心吃饭，走路时专心走路，工作时专心工作。一行禅师称之为"生活禅"。</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">正念的益处</h4>
                  <p>现代科学研究证实，正念修行能有效减轻压力、改善睡眠、提升专注力、增强情绪管理能力。这也是佛教对现代心理学的重要贡献。</p>
                </div>
              </div>
            </div>
          </section>

          <QuoteBlock index={4} />

          {/* 呼吸法门 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">呼吸法门</h2>
            <div className="text-ink-light leading-relaxed">
              <p className="mb-4">
                呼吸法门是禅修中最基础、最常用的方法。通过专注呼吸，训练心的定力与觉察力。
              </p>
              <div className="bg-cream rounded-lg p-6">
                <h4 className="font-serif font-semibold text-ink mb-3">基础呼吸禅修步骤</h4>
                <ol className="space-y-3 list-decimal pl-4">
                  <li>找一个安静的地方坐下，保持舒适的坐姿</li>
                  <li>轻轻闭上眼睛，放松全身</li>
                  <li>将注意力轻轻放在鼻尖或腹部</li>
                  <li>自然地呼吸，不要刻意控制</li>
                  <li>觉知每一次吸气和呼气</li>
                  <li>当心跑掉时，温柔地将注意力带回呼吸</li>
                  <li>持续练习15-30分钟</li>
                </ol>
              </div>
              <p className="mt-4">
                <strong>要点</strong>：不要追求"什么都不想"，念头来来去去是正常的。重要的是觉察到念头后，不跟随、不评判，温柔地回到呼吸上。
              </p>
            </div>
          </section>

          {/* 日常修行指南 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">日常修行指南</h2>
            <div className="text-ink-light leading-relaxed">
              <p className="mb-4">
                修行不只在禅堂，更在生活中。以下是一些将佛法融入日常的实用建议：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">晨起修行</h4>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>早起后先静坐10-15分钟</li>
                    <li>诵读一段经典（如《心经》）</li>
                    <li>发愿：愿今日所做利益众生</li>
                  </ul>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">日间修行</h4>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>工作中保持正念</li>
                    <li>遇到困难时观照自己的心</li>
                    <li>对他人保持慈悲与耐心</li>
                  </ul>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">睡前修行</h4>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>回顾今日所做，反省不足</li>
                    <li>静坐片刻，放松身心</li>
                    <li>以感恩心结束一天</li>
                  </ul>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-ink mb-2">长期坚持</h4>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>设定固定的修行时间</li>
                    <li>参加禅修营或共修活动</li>
                    <li>阅读修行指导书籍</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-sandalwood/5 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">继续学习</h3>
            <p className="text-ink-light mb-6">
              了解禅修实践后，可以进一步学习佛教的主要宗派
            </p>
            <Link
              to="/learn/schools"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              学习佛学宗派 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
