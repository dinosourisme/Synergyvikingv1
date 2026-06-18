import { Link } from 'react-router-dom';
import logo from '../../../assets/Headers/Vector.svg'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

// By Taha Sayyed (17 June 2026)
export default function Header() {
  return (
    <header className="relative w-full h-20 bg-[#00151C] font-geist">
      {/* Logo placeholder */}
      <div className="absolute left-10 top-[25px] w-[33.35px] h-[32.54px]">
        <img src={logo} alt="Logo" className="w-full h-full" />
      </div>

      {/* Navigation */}
      <nav className="absolute left-[346px] top-[28px] h-6 flex items-center gap-[87px] hover:[&>a]:opacity-80">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="group relative text-base font-medium font-geist text-white tracking-[-0.32px] leading-6 transition-opacity duration-200 hover:!opacity-100"
          >
            {item.label}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      {/* Get a Quote Button */}
      <button
        type="button"
        className="absolute right-[66px] top-1/2 -translate-y-1/2 h-10 px-5 py-2 bg-[#00B1F1] rounded-[100px] shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 group cursor-pointer"
      >
        <span className="text-base font-semibold text-white tracking-[-0.32px] leading-6">
          Get a Quote
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    </header>
  );
}