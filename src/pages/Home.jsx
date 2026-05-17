import Hero from '../components/Hero';
import LearningCard from '../components/LearningCard';
import ResourceCard from '../components/ResourceCard';
import { learningPaths } from '../data/navigation';
import { books, videos } from '../data/resources';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredBooks = books.slice(0, 3);
  const featuredVideos = videos.slice(0, 2);

  return (
    <div>
      <Hero />

      {/* Learning Paths Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              学习路径
            </h2>
            <p className="text-ink-light max-w-2xl mx-auto">
              循序渐进，由浅入深，系统学习佛学知识
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <LearningCard key={path.path} {...path} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="lotus-divider px-4">
        <span className="text-gold text-xl">🪷</span>
      </div>

      {/* Featured Resources Section */}
      <section className="py-16 md:py-24 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              精选资源
            </h2>
            <p className="text-ink-light max-w-2xl mx-auto">
              权威经典著作与优质视频课程推荐
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredBooks.map((book) => (
              <ResourceCard key={book.title} {...book} type="book" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredVideos.map((video) => (
              <ResourceCard key={video.title} {...video} type="video" />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/resources"
              className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-gold text-gold rounded-lg hover:bg-gold/10 transition-colors no-underline font-medium"
            >
              查看更多资源
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              学习建议
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">循序渐进</h3>
              <p className="text-sm text-ink-light">
                先了解基本概念，再研读经典，最后深入理论研究
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">知行合一</h3>
              <p className="text-sm text-ink-light">
                理论学习与禅修实践相结合，将佛法融入日常生活
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">持之以恒</h3>
              <p className="text-sm text-ink-light">
                佛学博大精深，需要长期坚持学习，不可急躁求成
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
