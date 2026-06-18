import { Link } from 'react-router-dom';
import footerImage from '../../../assets/Footer/ship.png';

const sitemapLinksLeft = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const sitemapLinksRight = [
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
      {/* Background Image Section - Full Width */}
      <div className="relative w-full h-[1020px]">
        <img
          src={footerImage}
          alt="Offshore vessel"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,21,28,0) 0%, rgba(0,21,28,0) 55%, rgba(0,21,28,0.35) 75%, #00151C 100%)',
          }}
        />
      </div>

      {/* CTA Content - positioned over the gradient transition */}
      <div className="relative z-10 -mt-[200px] text-center px-10">
        <h2
          className="max-w-[1018px] mx-auto text-[60px] leading-[72px] tracking-[-2.2px] text-white font-normal font-ptserif mb-6"
          
        >
          Ready to take your diving operation to the next level with certified, precision-built equipment?
        </h2>
        <p className="max-w-[756px] mx-auto text-lg leading-[27px] tracking-[-0.36px] text-white mb-8 font-geist font-normal">
          Join offshore operators, naval contractors, and hyperbaric facilities worldwide who trust Synergy
        </p>

        {/* Request a Consultation Button - Fixed Hover */}
        <button
          type="button"
          className="group relative inline-flex items-center h-[68px] px-2 bg-white rounded-[50px] overflow-hidden cursor-pointer transition-all duration-300"
        >
          {/* Arrow Circle - positioned absolutely, starts on right */}
          <span className="absolute left-[18px] flex items-center justify-center w-[52px] h-[52px] bg-[#BDE74E] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10H21M21 10L13 2M21 10L13 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* Text - starts centered, shifts right on hover */}
          <span className="text-base font-medium font-geist tracking-[-0.32px] text-[#1C1C1C] pl-[18px] pr-[70px] transition-all duration-300 group-hover:pl-[78px] group-hover:pr-[18px]">
            Request a Consultation
          </span>

          {/* Arrow Circle - default visible on right */}
          <span className="absolute right-2 flex items-center justify-center w-[52px] h-[52px] bg-[#BDE74E] rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10H21M21 10L13 2M21 10L13 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Footer Links Section - Max Width Centered */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-10 pt-[151px]">
        {/* Divider */}
        <div className="w-full h-px bg-[#4A4F59] mb-[151px]" />

        {/* Links Grid */}
        <div className="flex justify-between">
          {/* Sitemap */}
          <div className="w-[544px]">
            <h3
              className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]"
            >
              SITEMAP
            </h3>
            <div className="flex gap-[164px]">
              <div className="flex flex-col gap-7">
                {sitemapLinksLeft.map((link) => (
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
                {sitemapLinksRight.map((link) => (
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
              <h3
                className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]"
                
              >
                EMAIL & SUPPORT
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
              <h3
                className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]"
                
              >
                PHONE
              </h3>
              <a
                href="tel:+9197142580533"
                className="relative text-base font-medium tracking-[-0.32px] leading-6 text-white group w-fit inline-block"
              >
                +91 9714 2580533
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            <div>
              <h3
                className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]"
                
              >
                ADDRESS
              </h3>
              <p className="text-base font-medium tracking-[-0.32px] leading-6 text-white w-[217px]">
                26 29th St - Al Qusais Industrial Area - Al Qusais Industrial Area 1 - Dubai, UAE
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="w-[210px]">
            <h3
              className="text-sm leading-[21px] font-medium font-geist-mono uppercase text-[#BDBDC2] mb-[29px]"
              
            >
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
        <div className="flex justify-between items-center mt-[151px] pb-10">
          <p
            className="text-sm leading-[21px] tracking-[-0.28px] uppercase text-[#BDBDC2] font-geist-mono"
            
          >
            All right reserve @2026
          </p>
          <p
            className="text-sm leading-[21px] tracking-[-0.28px] uppercase text-[#BDBDC2] font-geist-mono"
            
          >
            Made by INfidhi
          </p>
        </div>
      </div>
    </footer>
  );
}