import QuoteBlock from '../components/QuoteBlock';
import { Link } from 'react-router-dom';

export default function SutrasAdvanced() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📚</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            深入经典
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            研读大乘佛教的重要经典，深入理解佛法义理
          </p>
        </div>

        <div className="space-y-12">
          {/* 法华经 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">《妙法莲华经》</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="text-sm text-ink-light mb-2">基本信息</p>
                <p><strong>译者</strong>：后秦·鸠摩罗什</p>
                <p><strong>篇幅</strong>：七卷二十八品</p>
                <p><strong>地位</strong>：大乘佛教"经中之王"</p>
              </div>
              <p className="mb-4">
                《法华经》是大乘佛教最重要的经典之一，被称为"经中之王"。经文核心阐述"一乘佛法"的思想，即一切众生皆有佛性，皆可成佛。
              </p>
              <p className="mb-4">
                经中以"火宅喻""穷子喻""药草喻"等七个著名的比喻，说明佛陀说法的方便与真实。强调佛法只有一乘，所谓三乘（声闻、缘觉、菩萨）只是方便说法。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "十方佛土中，唯有一乘法，无二亦无三，除佛方便说。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 《法华经·方便品》</p>
              </div>
              <a
                href="https://cbetaonline.dila.edu.tw/zh/T09n0262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-gold hover:text-sandalwood transition-colors"
              >
                阅读《法华经》全文 →
              </a>
            </div>
          </section>

          {/* 华严经 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">《大方广佛华严经》</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="text-sm text-ink-light mb-2">基本信息</p>
                <p><strong>译者</strong>：唐·实叉难陀</p>
                <p><strong>篇幅</strong>：八十卷</p>
                <p><strong>地位</strong>：大乘佛教最宏大的经典</p>
              </div>
              <p className="mb-4">
                《华严经》是大乘佛教篇幅最长、义理最深广的经典，描述了佛陀在菩提树下证悟后所见的不可思议境界。经文展现了重重无尽、圆融无碍的法界实相。
              </p>
              <p className="mb-4">
                经中提出了"法界缘起""事事无碍"等重要思想，以及菩萨修行的五十二个阶位。"一即一切，一切即一"的圆融思想，对后世佛教哲学产生了深远影响。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "不为自己求安乐，但愿众生得离苦。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 《华严经》</p>
              </div>
              <a
                href="https://cbetaonline.dila.edu.tw/zh/T10n0279"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-gold hover:text-sandalwood transition-colors"
              >
                阅读《华严经》全文 →
              </a>
            </div>
          </section>

          <QuoteBlock index={3} />

          {/* 楞严经 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">《大佛顶首楞严经》</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="text-sm text-ink-light mb-2">基本信息</p>
                <p><strong>译者</strong>：唐·般剌蜜帝</p>
                <p><strong>篇幅</strong>：十卷</p>
                <p><strong>地位</strong>：被称为"开智慧的楞严"</p>
              </div>
              <p className="mb-4">
                《楞严经》是大乘佛教的重要经典，以佛陀与阿难的对话为主线，详细阐述了修行中的种种境界与魔障。经中对五十种阴魔的描述，是修行者辨识境界的重要指南。
              </p>
              <p className="mb-4">
                经文还包含了著名的"楞严咒"，被认为是最能消业障、除魔障的咒语。"七处征心""十番显见"等章节，对心性的分析极为精妙。
              </p>
              <p>
                <strong>学习建议</strong>：《楞严经》义理深奥，建议有一定佛学基础后再学习。可以参考圆瑛法师的《楞严经讲义》或宣化上人的讲解。
              </p>
              <a
                href="https://cbetaonline.dila.edu.tw/zh/T19n0945"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-gold hover:text-sandalwood transition-colors"
              >
                阅读《楞严经》全文 →
              </a>
            </div>
          </section>

          {/* 维摩诘经 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">《维摩诘所说经》</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p className="text-sm text-ink-light mb-2">基本信息</p>
                <p><strong>译者</strong>：后秦·鸠摩罗什</p>
                <p><strong>篇幅</strong>：三卷</p>
                <p><strong>地位</strong>：大乘佛教在家修行的典范</p>
              </div>
              <p className="mb-4">
                《维摩诘经》通过维摩诘居士与文殊菩萨等的对话，阐述了大乘佛教"不二法门"的思想。维摩诘是一位在家居士，却有极高的智慧与修为，是大乘佛教在家修行的典范。
              </p>
              <p className="mb-4">
                经中"天女散花""一默如雷"等故事，生动地表达了"烦恼即菩提""生死即涅槃"的不二思想。强调修行不必出家，在日常生活中同样可以证悟。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "不可思议解脱法门。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 《维摩诘经》核心思想</p>
              </div>
              <a
                href="https://cbetaonline.dila.edu.tw/zh/T14n0475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-gold hover:text-sandalwood transition-colors"
              >
                阅读《维摩诘经》全文 →
              </a>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-sandalwood/5 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">继续学习</h3>
            <p className="text-ink-light mb-6">
              经典研读之后，可以开始禅修实践，将佛法融入生活
            </p>
            <Link
              to="/learn/meditation"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              学习禅修实践 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
