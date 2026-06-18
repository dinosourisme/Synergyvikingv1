import { useEffect, useRef } from 'react';
import logo from '../../assets/services/Container.svg';

const services = [
  {
    number: '01',
    title: 'SILO Load Testing',
    description:
      'Certified structural integrity and load testing for offshore containers, diving chambers, and subsea enclosures. Tested, documented, and ready for operation. Certified structural integrity and load testing for offshore containers, diving chambers, and subsea enclosures. Tested, documented, and ready for operation. Certified structural integrity and load testing for offshore containers, diving chambers, and subsea enclosures. Tested, documented, and ready for operation.',
    image: logo,
  },
  {
    number: '02',
    title: 'Chamber Outfitting',
    description:
      'Full systems outfitting for hyperbaric and decompression chambers - gas panels, communications, lighting, and medical equipment, installed and commissioned by our team. Tested, documented, and ready for operation. Certified structural integrity and load testing for offshore containers, diving chambers, and subsea enclosures. Tested, documented, and ready for operation.',
    image: logo,
  },
];

const partners = [
  { logo: "url1", name: "Logoipsum" },
  { logo: "url2", name: "Logoipsum" },
  { logo: "url3", name: "logoipsum" },
  { logo: "url4", name: "logoipsum" },
  { logo: "url5", name: "Logoipsum" },
  { logo: "url6", name: "logoipsum" },
  { logo: "url7", name: "Logoipsum" },
];

export default function Services() {
  const marqueeRef = useRef(null);

// Adjustable speed — change this value as needed
const SPEED = 0.5; // pixels per frame

useEffect(() => {
  const marquee = marqueeRef.current;
  if (!marquee) return;

  let animationId;
  let position = 0;
  let isPaused = false;

  const handleMouseEnter = () => { isPaused = true; };
  const handleMouseLeave = () => { isPaused = false; };

  marquee.addEventListener('mouseenter', handleMouseEnter);
  marquee.addEventListener('mouseleave', handleMouseLeave);

  const animate = () => {
    if (!isPaused) {
      position -= SPEED;
      if (Math.abs(position) >= marquee.scrollWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
    }
    animationId = requestAnimationFrame(animate);
  };

  animationId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationId);
    marquee.removeEventListener('mouseenter', handleMouseEnter);
    marquee.removeEventListener('mouseleave', handleMouseLeave);
  };
}, []);

  return (
    <div className="w-full bg-white font-geist">
      {/* Hero Section */}
      <section className="relative w-full bg-[#00151C] pt-[7px] pb-[120px] px-10">
        {/* Label */}
        <div className="flex items-center gap-[17px] mb-8">
          <div className="w-3 h-3 bg-[#00B1F1]" />
          <span
            className="text-lg leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal"
          >
            OUR Services
          </span>
        </div>

        {/* Heading */}
        <h2
          className="max-w-[1051px] ml-[370px] text-[60px] leading-[72px] tracking-[-2.2px] text-white font-normal font-ptserif"
        >
          Our goal is to be recognised as the most trusted, safety-first diving equipment company serving the global offshore and subsea industry.
        </h2>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-black/30" />

      {/* Services List */}
      <section className="relative w-full max-w-[1440px] mx-auto pt-[47px] pb-[80px] px-10">
        {services.map((service, index) => (
          <div key={service.number} className="relative mb-[80px] last:mb-0">
            {/* Number */}
            <div className="absolute left-0 top-0 text-[48px] leading-[58px] tracking-[-2.4px] font-medium text-[#00B1F1]">
              {service.number}
            </div>

            {/* Content */}
            <div className="ml-[289px] max-w-[1071px]">
              {/* Title & Description */}
              <div className="mb-[12px]">
                <h3 className="text-[40px] leading-[48px] tracking-[-2.4px] font-medium text-[#121212] mb-3 font-geist">
                  {service.title}
                </h3>
                <p className="text-2xl leading-[40px] tracking-[-0.32px] text-[rgba(18,18,18,0.8)] font-geist font-normal"
                
                >
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="max-w-[1024px] h-[254px] w-full rounded-md overflow-hidden mt-[48px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Partners Ticker */}
      <section className="w-full max-w-[1440px] mx-auto py-[100px] px-10">
        {/* Heading */}
        <div className="text-center mb-[56px]">
          <h2
            className="text-[60px] leading-[52px] tracking-[-1.6px] text-[#1C1C1C] font-normal mb-4 font-ptserif"
            
          >
            200+
          </h2>
          <p className="text-2xl leading-6 tracking-[-0.32px] text-[#1C1C1C] font-normal font-geist">
            Partners and logistics collaborators.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden w-full">
  <div
    ref={marqueeRef}
    className="flex items-center gap-0 will-change-transform"
    style={{ width: 'max-content' }}
  >
    {[...partners, ...partners].map((partner, index) => (
      <div
        key={index}
        className="flex items-center justify-center gap-2 w-[200px] h-[156px] border border-[#C6C7CC] shrink-0 px-4"
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-8 h-8 object-contain"
        />
        <span className="text-sm font-medium text-black whitespace-nowrap">
          {partner.name}
        </span>
      </div>
    ))}
  </div>
</div>
      </section>
    </div>
  );
}