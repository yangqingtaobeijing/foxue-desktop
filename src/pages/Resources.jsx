import { useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { books, videos, platforms } from '../data/resources';

export default function Resources() {
  const [activeTab, setActiveTab] = useState('books');
  const [activeLevel, setActiveLevel] = useState('all');

  const filteredBooks = activeLevel === 'all'
    ? books
    : books.filter(b => b.level === activeLevel);

  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📚</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            资源中心
          </h1>
          <p className="text-ink-light max-w-2xl mx-auto">
            权威佛学著作、优质视频课程与在线学习平台推荐
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { key: 'books', label: '经典著作' },
            { key: 'videos', label: '视频课程' },
            { key: 'platforms', label: '在线平台' },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-sandalwood text-gold shadow-md'
                  : 'bg-white text-ink-light hover:bg-cream-dark'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Books Tab */}
        {activeTab === 'books' && (
          <div>
            {/* Level Filter */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {['all', '入门', '进阶', '高阶'].map((level) => (
                <button
                  key={level}
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                    activeLevel === level
                      ? 'bg-gold text-sandalwood'
                      : 'bg-white text-ink-light hover:bg-cream-dark border border-cream-dark'
                  }`}
                  onClick={() => setActiveLevel(level)}
                >
                  {level === 'all' ? '全部' : level}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <ResourceCard key={book.title} {...book} type="book" />
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <ResourceCard key={video.title} {...video} type="video" />
            ))}
          </div>
        )}

        {/* Platforms Tab */}
        {activeTab === 'platforms' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden no-underline border border-cream-dark hover:border-gold/30 p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-sandalwood transition-colors mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {platform.description}
                </p>
                <div className="mt-4 text-gold text-sm group-hover:text-sandalwood transition-colors">
                  访问网站 →
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-16 bg-sandalwood/5 rounded-xl p-6 md:p-8">
          <h2 className="font-serif text-2xl font-semibold text-sandalwood mb-4 text-center">学习建议</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📖</span>
              </div>
              <h4 className="font-serif font-semibold text-ink mb-2">经典阅读顺序</h4>
              <p className="text-sm text-ink-light">
                建议先读《心经》《金刚经》等短篇经典，再读《法华经》《华严经》等长篇经典。
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎬</span>
              </div>
              <h4 className="font-serif font-semibold text-ink mb-2">视频辅助学习</h4>
              <p className="text-sm text-ink-light">
                配合法师的讲解视频学习经典，可以更好地理解深奥的义理。
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💡</span>
              </div>
              <h4 className="font-serif font-semibold text-ink mb-2">善用工具</h4>
              <p className="text-sm text-ink-light">
                善用佛学辞典等工具书，遇到不懂的术语及时查阅。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
