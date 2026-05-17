import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation } from '../data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-sandalwood/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-gold font-serif text-xl font-semibold no-underline">
            <span className="text-2xl">卍</span>
            <span>佛学入门</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-cream/80 hover:text-gold transition-colors text-sm font-sans">
                    {item.name}
                    <ChevronDown size={14} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-sandalwood-light/95 backdrop-blur-sm rounded-lg shadow-xl py-2 min-w-[160px] border border-gold/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 text-sm no-underline transition-colors ${
                            isActive(child.path)
                              ? 'text-gold bg-gold/10'
                              : 'text-cream/80 hover:text-gold hover:bg-gold/5'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm no-underline transition-colors ${
                    isActive(item.path)
                      ? 'text-gold'
                      : 'text-cream/80 hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream/80 hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gold/20 mt-2 pt-4">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    className="w-full text-left px-3 py-2 text-cream/80 hover:text-gold transition-colors text-sm flex items-center justify-between"
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-6">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-3 py-2 text-sm no-underline transition-colors ${
                            isActive(child.path)
                              ? 'text-gold'
                              : 'text-cream/60 hover:text-gold'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm no-underline transition-colors ${
                    isActive(item.path)
                      ? 'text-gold'
                      : 'text-cream/80 hover:text-gold'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
