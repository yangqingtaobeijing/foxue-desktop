import QuoteBlock from '../components/QuoteBlock';
import { Link } from 'react-router-dom';

export default function SutrasIntro() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📜</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            经典入门
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            学习佛学最基础、最重要的入门经典
          </p>
        </div>

        <div className="space-y-12">
          {/* 心经 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">《般若波罗蜜多心经》</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="text-sm text-ink-light mb-2">基本信息</p>
                <p><strong>译者</strong>：唐·玄奘法师</p>
                <p><strong>字数</strong>：260字</p>
                <p><strong>地位</strong>：大乘佛教最精要的经典之一</p>
              </div>
              <p className="mb-4">
                《心经》全称《般若波罗蜜多心经》，是大乘佛教般若系经典的核心。虽然只有短短260字，却浓缩了大乘佛教般若思想的精华，是佛学学习者必读的经典。
              </p>
              <p className="mb-4">
                经文核心阐述了"空"的智慧："色不异空，空不异色，色即是空，空即是色"，说明一切事物的本质都是空性，不应执着。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 《心经》开篇</p>
              </div>
              <p className="mt-4">
                <strong>学习建议</strong>：初学者可以先诵读原文，熟悉经文内容。然后参考玄奘法师的译注或当代法师的讲解，逐步理解"空"的含义。
              </p>
              <a
                href="https://cbetaonline.dila.edu.tw/zh/T08n0251"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-gold hover:text-sandalwood transition-colors"
              >
                阅读《心经》全文 →
              </a>
            </div>
          </section>

          {/* 金刚经 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">《金刚般若波罗蜜经》</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="text-sm text-ink-light mb-2">基本信息</p>
                <p><strong>译者</strong>：后秦·鸠摩罗什</p>
                <p><strong>篇幅</strong>：约5000字</p>
                <p><strong>地位</strong>：禅宗传法心要</p>
              </div>
              <p className="mb-4">
                《金刚经》是大乘佛教的重要经典，以佛陀与须菩提的对话形式，阐述"空"的智慧与无相布施的功德。经名比喻般若智慧如金刚般坚固，能断一切烦恼。
              </p>
              <p className="mb-4">
                经文核心思想是"应无所住而生其心"，教导修行者不应执着于任何事物，包括佛法本身。六祖惠能因闻此经而开悟。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "一切有为法，如梦幻泡影，如露亦如电，应作如是观。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 《金刚经》四句偈</p>
              </div>
              <p className="mt-4">
                <strong>学习建议</strong>：《金刚经》义理较深，建议配合南怀瑾先生的《金刚经说什么》一起学习，更容易理解其中的深意。
              </p>
              <a
                href="https://cbetaonline.dila.edu.tw/zh/T08n0235"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-gold hover:text-sandalwood transition-colors"
              >
                阅读《金刚经》全文 →
              </a>
            </div>
          </section>

          <QuoteBlock index={2} />

          {/* 阿弥陀经 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">《佛说阿弥陀经》</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="text-sm text-ink-light mb-2">基本信息</p>
                <p><strong>译者</strong>：后秦·鸠摩罗什</p>
                <p><strong>篇幅</strong>：约2000字</p>
                <p><strong>地位</strong>：净土宗根本经典</p>
              </div>
              <p className="mb-4">
                《阿弥陀经》是净土三经之一，描述了西方极乐世界的庄严景象，以及阿弥陀佛的四十八大愿。经文简洁明了，是净土宗修行的重要依据。
              </p>
              <p className="mb-4">
                经中介绍了极乐世界的种种殊胜：七宝池、八功德水、金沙布地、天乐鸣空等，令人心生向往。同时教导信众通过念佛求生净土。
              </p>
              <p>
                <strong>学习建议</strong>：此经适合早晚诵读，配合了解净土宗的基本教义。可以参考印光大师的开示，了解念佛的方法与功德。
              </p>
              <a
                href="https://cbetaonline.dila.edu.tw/zh/T12n0366"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-gold hover:text-sandalwood transition-colors"
              >
                阅读《阿弥陀经》全文 →
              </a>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-sandalwood/5 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">继续学习</h3>
            <p className="text-ink-light mb-6">
              入门经典之后，可以进一步研读大乘佛教的重要经典
            </p>
            <Link
              to="/learn/sutras-advanced"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              学习深入经典 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
