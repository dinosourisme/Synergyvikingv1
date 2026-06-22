import { Link } from 'react-router-dom';
import footerImage from '../../../assets/Footer/ship.png';

const sitemapLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About us', to: '/about' },
  { label: 'Contact us', to: '/contact' },
  { label: 'Term & Service', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
];

const socialLinks = [
  { label: 'X/Twitter', href: 'https://twitter.com' },
  { label: 'Youtube', href: 'https://youtube.com' },
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <footer className="relative w-full font-geist overflow-hidden bg-[#00151C]">
      {/* Background Image Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[850px] xl:h-[1020px]">
        <img
          src={footerImage}
          alt="Offshore vessel"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,21,28,0) 0%, rgba(0,21,28,0) 55%, rgba(0,21,28,0.35) 75%, #00151C 100%)',
          }}
        />
      </div>

      {/* CTA Content */}
      <div className="relative z-10 -mt-[80px] sm:-mt-[120px] md:-mt-[160px] lg:-mt-[200px] text-center px-5 sm:px-6 md:px-8 lg:px-10">
        <h2 className="max-w-[1018px] mx-auto text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight sm:leading-[1.2] md:leading-[1.25] lg:leading-[72px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] xl:tracking-[-2.2px] text-white font-normal font-ptserif mb-4 sm:mb-5 md:mb-6">
          Ready to take your diving operation to the next level with certified, precision-built equipment?
        </h2>
        <p className="max-w-[756px] mx-auto text-base sm:text-lg leading-relaxed sm:leading-[27px] tracking-[-0.2px] sm:tracking-[-0.36px] text-white mb-6 sm:mb-7 md:mb-8 font-normal font-geist px-2 sm:px-0">
          Join offshore operators, naval contractors, and hyperbaric facilities worldwide who trust Synergy
        </p>

        <button
          type="button"
          className="group relative inline-flex items-center h-[52px] sm:h-[60px] md:h-[68px] px-2 bg-white rounded-[50px] overflow-hidden cursor-pointer transition-all duration-300 active:scale-95 md:active:scale-100"
        >
          <span className="absolute left-[14px] sm:left-[16px] md:left-[18px] flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] md:w-[52px] md:h-[52px] bg-[#BDE74E] rounded-full transition-all duration-300 opacity-0 md:group-hover:opacity-100 -translate-x-2 md:group-hover:translate-x-0">
            <svg width="18" height="16" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[20px] sm:h-[18px] md:w-[22px] md:h-[20px]">
              <path d="M1 10H21M21 10L13 2M21 10L13 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm sm:text-base font-medium font-geist tracking-[-0.32px] text-[#1C1C1C] pl-[16px] pr-[56px] sm:pl-[18px] sm:pr-[64px] md:pr-[70px] transition-all duration-300 md:group-hover:pl-[78px] md:group-hover:pr-[18px]">
            Request a Consultation
          </span>
          <span className="absolute right-2 flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] md:w-[52px] md:h-[52px] bg-[#BDE74E] rounded-full transition-all duration-300 md:group-hover:opacity-0 md:group-hover:translate-x-2">
            <svg width="18" height="16" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[20px] sm:h-[18px] md:w-[22px] md:h-[20px]">
              <path d="M1 10H21M21 10L13 2M21 10L13 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>

      {/* Footer Links Section */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[151px]">
        {/* Divider */}
        <div className="w-full h-px bg-[#4A4F59] mb-[60px] sm:mb-[80px] md:mb-[100px] lg:mb-[151px]" />

        {/* Mobile & Tablet Layout (< lg) */}
        <div className="lg:hidden">
          {/* Row 1: Sitemap + Social */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Sitemap */}
            <div>
              <h3 className="text-xs sm:text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-5 sm:mb-6">
                SITEMAP
              </h3>
              <div className="flex flex-col gap-4 sm:gap-5">
                {sitemapLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="relative text-sm sm:text-base font-medium font-geist tracking-[-0.32px] leading-6 text-white group w-fit"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs sm:text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-5 sm:mb-6">
                SOCIAL
              </h3>
              <div className="flex flex-col gap-4 sm:gap-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-sm sm:text-base font-medium tracking-[-0.32px] leading-6 text-white group w-fit"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Address */}
          <div className="mt-12 sm:mt-14 md:mt-16">
            <h3 className="text-xs sm:text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-5 sm:mb-6">
              ADDRESS
            </h3>
            <p className="text-sm sm:text-base font-medium tracking-[-0.32px] leading-6 text-white">
              26 29th St - Al Qusais Industrial Area - Al Qusais Industrial Area 1 - Dubai, UAE
            </p>
          </div>

          {/* Row 3: Email & Support + Phone */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 mt-12 sm:mt-14 md:mt-16">
            <div>
              <h3 className="text-xs sm:text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-5 sm:mb-6">
                EMAIL AND SUPPORT
              </h3>
              <a
                href="mailto:hello@synergyviking.com"
                className="relative text-sm sm:text-base font-medium font-geist tracking-[-0.32px] leading-6 text-white group w-fit inline-block break-all"
              >
                hello@synergyviking.com
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-5 sm:mb-6">
                PHONE
              </h3>
              <a
                href="tel:+9197142580533"
                className="relative text-sm sm:text-base font-medium tracking-[-0.32px] leading-6 text-white group w-fit inline-block"
              >
                +91 97142 58053
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout (≥ lg) */}
        <div className="hidden lg:flex lg:justify-between lg:gap-8">
          {/* Sitemap */}
          <div className="w-[544px]">
            <h3 className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]">
              SITEMAP
            </h3>
            <div className="flex gap-[164px]">
              <div className="flex flex-col gap-7">
                {sitemapLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="relative text-base font-medium font-geist tracking-[-0.32px] leading-6 text-white group w-fit"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-7">
                {sitemapLinks.slice(4).map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="relative text-base font-medium font-geist tracking-[-0.32px] leading-6 text-white group w-fit"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Email & Support + Phone + Address */}
          <div className="w-[314px] flex flex-col gap-[29px]">
            <div>
              <h3 className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]">
                EMAIL AND SUPPORT
              </h3>
              <a
                href="mailto:hello@synergyviking.com"
                className="relative text-base font-medium font-geist tracking-[-0.32px] leading-6 text-white group w-fit inline-block"
              >
                hello@synergyviking.com
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            <div>
              <h3 className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]">
                PHONE
              </h3>
              <a
                href="tel:+9197142580533"
                className="relative text-base font-medium tracking-[-0.32px] leading-6 text-white group w-fit inline-block"
              >
                +91 97142 58053
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            <div>
              <h3 className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]">
                ADDRESS
              </h3>
              <p className="text-base font-medium tracking-[-0.32px] leading-6 text-white w-[217px]">
                26 29th St - Al Qusais Industrial Area - Al Qusais Industrial Area 1 - Dubai, UAE
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="w-[210px]">
            <h3 className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]">
              SOCIAL
            </h3>
            <div className="flex flex-col gap-7">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-base font-medium tracking-[-0.32px] leading-6 text-white group w-fit"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col justify-center items-center gap-2 mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[151px] pb-6 sm:pb-8 md:pb-10 sm:flex-row sm:justify-between sm:gap-0">
          <p className="text-xs sm:text-sm leading-[21px] tracking-[-0.28px] uppercase text-[#BDBDC2] font-geist-mono">
            All Right Reserve@2026
          </p>
          <p className="text-xs sm:text-sm leading-[21px] tracking-[-0.28px] uppercase text-[#BDBDC2] font-geist-mono">
            Made by Infidhi
          </p>
        </div>
      </div>
    </footer>
  );
}