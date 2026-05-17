import { Link } from 'react-router-dom';
import { Sprout, BookOpen, Scroll, Library, Flower2, Building2, Brain } from 'lucide-react';

const iconMap = {
  'seedling': Sprout,
  'book-open': BookOpen,
  'scroll': Scroll,
  'library': Library,
  'flower-2': Flower2,
  'building-2': Building2,
  'brain': Brain,
};

export default function LearningCard({ title, description, path, level, icon, index }) {
  const Icon = iconMap[icon] || BookOpen;

  return (
    <Link
      to={path}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden no-underline border border-cream-dark hover:border-gold/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
            <Icon className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-sandalwood transition-colors truncate">
                {title}
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold font-medium flex-shrink-0">
                {level}
              </span>
            </div>
            <p className="text-sm text-ink-light leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  );
}
