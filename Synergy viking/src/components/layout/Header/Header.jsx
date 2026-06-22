import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/Headers/Vector.svg';

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

// By Taha Sayyed (17 June 2026)
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-40 w-full h-16 md:h-20 bg-[#00151C] font-geist">
      <div className="flex items-center justify-between h-full px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <div className="w-7 h-7 md:w-8 md:h-8 lg:w-[33.35px] lg:h-[32.54px]">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </div>
        </Link>

        {/* Desktop Navigation (lg and up) */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-[87px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`group relative text-base font-medium font-geist text-white tracking-[-0.32px] leading-6 transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <button
          type="button"
          className="hidden lg:flex items-center h-10 px-5 py-2 bg-[#00B1F1] rounded-[100px] shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] gap-1.5 group cursor-pointer active:scale-95 transition-transform hover:scale-105"
        >
          <span className="text-base font-semibold text-white tracking-[-0.32px] leading-6">
            Get a Quote
          </span>
          <span className="h-1.5 bg-white rounded-full transition-all duration-300 w-0 opacity-0 group-hover:w-1.5 group-hover:opacity-100" />
        </button>

        {/* Mobile/Tablet Hamburger Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-6 h-3.5 flex flex-col justify-between">
            <span
              className={`block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile/Tablet Slide-in Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] sm:w-[300px] md:w-[340px] bg-[#00151C] shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button inside panel */}
          <div className="flex items-center justify-end h-16 md:h-20 px-5 sm:px-6 md:px-8">
            <button
              type="button"
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-label="Close menu"
            >
              <div className="relative w-6 h-3.5 flex flex-col justify-between">
                <span className="block w-full h-[2px] bg-white rounded-full rotate-45 translate-y-[6px]" />
                <span className="block w-full h-[2px] bg-white rounded-full -rotate-45 -translate-y-[6px]" />
              </div>
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-8 sm:px-10 md:px-12 pt-2">
            <nav className="flex flex-col gap-6 sm:gap-7">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={closeMenu}
                    className={`relative text-lg sm:text-xl font-medium font-geist text-white tracking-[-0.32px] leading-6 w-fit transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button in Menu */}
            <button
              type="button"
              className="mt-10 sm:mt-12 w-full h-12 sm:h-14 bg-[#00B1F1] rounded-[100px] shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span className="text-base sm:text-lg font-semibold text-white tracking-[-0.32px] leading-6">
                Get a Quote
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}