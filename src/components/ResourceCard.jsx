import { ExternalLink, BookOpen, Video, Globe } from 'lucide-react';

const categoryIcons = {
  'book': BookOpen,
  'video': Video,
  'platform': Globe,
};

export default function ResourceCard({ title, author, description, link, category, level, type = 'book' }) {
  const Icon = categoryIcons[type] || BookOpen;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden no-underline border border-cream-dark hover:border-gold/30"
    >
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-sandalwood/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sandalwood/20 transition-colors">
            <Icon className="w-5 h-5 text-sandalwood" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-serif text-base font-semibold text-ink group-hover:text-sandalwood transition-colors truncate">
                {title}
              </h3>
              <ExternalLink className="w-4 h-4 text-ink-light opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
            {author && (
              <p className="text-xs text-gold mb-2">{author}</p>
            )}
            <p className="text-sm text-ink-light leading-relaxed line-clamp-3">
              {description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              {category && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-cream-dark text-ink-light">
                  {category}
                </span>
              )}
              {level && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold">
                  {level}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
