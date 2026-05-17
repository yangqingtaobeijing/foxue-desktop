import QuoteBlock from '../components/QuoteBlock';
import { Link } from 'react-router-dom';

export default function Schools() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🏛️</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            佛学宗派
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            了解中国佛教的主要宗派及其特色
          </p>
        </div>

        <div className="space-y-12">
          {/* 禅宗 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">禅宗</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>初祖</strong>：达摩祖师（印度）</p>
                <p><strong>六祖</strong>：惠能大师（中国禅宗的集大成者）</p>
                <p><strong>核心经典</strong>：《六祖坛经》《金刚经》</p>
                <p><strong>核心思想</strong>：不立文字，教外别传，直指人心，见性成佛</p>
              </div>
              <p className="mb-4">
                禅宗是中国佛教最具影响力的宗派之一，强调通过禅修直接体验心性，不依赖文字与经典。禅宗认为，佛性人人本具，只因妄想执着而不能证得。
              </p>
              <p className="mb-4">
                禅宗的修行方法独特，包括参话头（如"念佛是谁"）、公案（如"庭前柏树子"）、棒喝等，旨在打破思维的惯性，直接见到心的本来面目。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "菩提本无树，明镜亦非台，本来无一物，何处惹尘埃。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 六祖惠能</p>
              </div>
            </div>
          </section>

          {/* 净土宗 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">净土宗</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>初祖</strong>：慧远大师（东晋）</p>
                <p><strong>集大成者</strong>：善导大师（唐代）</p>
                <p><strong>核心经典</strong>：《阿弥陀经》《无量寿经》《观无量寿经》</p>
                <p><strong>核心思想</strong>：信愿念佛，往生净土</p>
              </div>
              <p className="mb-4">
                净土宗是中国佛教流传最广的宗派之一，以念佛求生西方极乐世界为主要修行方法。净土宗的修行简单易行，适合各阶层的信众。
              </p>
              <p className="mb-4">
                净土宗强调"信、愿、行"三资粮：深信阿弥陀佛的四十八大愿，发愿往生极乐世界，持名念佛（念"南无阿弥陀佛"）。
              </p>
              <p>
                近代印光大师、当代净空法师等高僧大德大力弘扬净土法门，使净土宗在当代仍然具有广泛的影响力。
              </p>
            </div>
          </section>

          <QuoteBlock index={5} />

          {/* 天台宗 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">天台宗</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>初祖</strong>：智顗大师（隋代）</p>
                <p><strong>核心经典</strong>：《法华经》</p>
                <p><strong>核心思想</strong>：一念三千，三谛圆融</p>
              </div>
              <p className="mb-4">
                天台宗是中国佛教最早成立的宗派之一，由智顗大师在浙江天台山创立。天台宗以《法华经》为根本经典，建立了严密的教观体系。
              </p>
              <p className="mb-4">
                天台宗的核心思想是"一念三千"，即一念心中具足三千世界的种种法相。"三谛圆融"（空谛、假谛、中谛）说明真理的三个层面是圆融无碍的。
              </p>
              <p>
                天台宗的止观修行方法（止为定，观为慧）对后世佛教修行产生了深远影响。
              </p>
            </div>
          </section>

          {/* 华严宗 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">华严宗</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>初祖</strong>：杜顺大师（唐代）</p>
                <p><strong>核心经典</strong>：《华严经》</p>
                <p><strong>核心思想</strong>：法界缘起，事事无碍</p>
              </div>
              <p className="mb-4">
                华严宗以《华严经》为根本经典，阐述了"法界缘起"的深奥思想。华严宗认为，宇宙万法互为缘起，一即一切，一切即一，重重无尽。
              </p>
              <p className="mb-4">
                华严宗的"四法界"理论（事法界、理法界、理事无碍法界、事事无碍法界）是佛教哲学的高峰，对中国哲学思想产生了深远影响。
              </p>
              <div className="bg-sandalwood/5 rounded-lg p-4 border-l-4 border-gold">
                <p className="font-serif text-ink italic">
                  "一即一切，一切即一。"
                </p>
                <p className="text-sm text-ink-light mt-2">—— 《华严经》</p>
              </div>
            </div>
          </section>

          {/* 密宗 */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4">密宗（藏传佛教）</h2>
            <div className="text-ink-light leading-relaxed">
              <div className="bg-cream rounded-lg p-4 mb-4">
                <p><strong>代表人物</strong>：莲花生大士、宗喀巴大师</p>
                <p><strong>核心经典</strong>：《大日经》《金刚顶经》</p>
                <p><strong>核心思想</strong>：三密相应，即身成佛</p>
              </div>
              <p className="mb-4">
                密宗是佛教的一个重要分支，在中国汉地称为"唐密"，在西藏发展为"藏传佛教"。密宗强调通过身（手印）、口（咒语）、意（观想）三密相应的修行方法，实现即身成佛。
              </p>
              <p className="mb-4">
                藏传佛教形成了宁玛派（红教）、噶举派（白教）、萨迦派（花教）、格鲁派（黄教）四大宗派。其中格鲁派的创始人宗喀巴大师对藏传佛教的改革影响深远。
              </p>
              <p>
                密宗的修行需要在具格上师的指导下进行，不可以自学。
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-sandalwood/5 rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">继续学习</h3>
            <p className="text-ink-light mb-6">
              了解了各宗派后，可以深入研习佛学的高深理论
            </p>
            <Link
              to="/learn/advanced"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gold text-sandalwood font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              学习高级研习 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
