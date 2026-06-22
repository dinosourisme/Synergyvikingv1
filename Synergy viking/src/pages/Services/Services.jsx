import { useEffect, useRef } from 'react';
import { partners } from './data/partners.js';
import { services } from './data/service.js';

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
      <section className="relative w-full bg-[#00151C]">

  {/* ✅ Inner div matches services section: max-w + mx-auto + all padding inside */}
  <div className="max-w-[90rem] mx-auto pt-4 pb-16 px-5 sm:px-6 md:px-8 lg:pt-2 lg:pb-[7.5rem] lg:px-10">

    {/* Label */}
    <div className="flex items-center gap-3 md:gap-[1.0625rem] mb-6 md:mb-8">
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
      <span className="text-sm md:text-lg leading-relaxed tracking-tight uppercase text-white font-geist-mono font-normal">
        OUR Services
      </span>
    </div>

    {/* Heading — flex spacer mirrors services row layout */}
    <div className="flex flex-col lg:flex-row lg:gap-[5rem]">
      <div className="hidden lg:block lg:shrink-0 lg:w-[7.8125rem]" />
      <h2 className="flex-1 max-w-full lg:-mt-[3.125rem] xl:-mt-[3.125rem] lg:max-w-[65.6875rem] text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.75rem] leading-tight md:leading-[1.2] lg:leading-[4.5rem] tracking-tight text-white font-normal font-ptserif">
        Our goal is to be recognised as the most trusted, safety-first diving equipment company serving the global offshore and subsea industry.
      </h2>
    </div>

  </div>
</section>

      {/* Divider */}
      <div className="w-full h-px bg-black/30" />

      {/* Services List */}
      <section className="relative w-full max-w-[90rem] mx-auto pt-8 pb-12 px-5 sm:px-6 md:px-8 md:pt-10 md:pb-16 lg:pt-[2.9375rem] lg:pb-[5rem] lg:px-10">
        {services.map((service) => (
          <div key={service.number} className="mb-12 md:mb-16 lg:mb-[5rem] last:mb-0">
            <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[5rem]">
              {/* Number */}
              <div className="text-4xl sm:text-5xl md:text-[3rem] leading-[1.2] md:leading-[3.625rem] tracking-tight font-medium text-[#00B1F1] mb-2 md:mb-0 md:shrink-0 lg:w-[7.8125rem]">
                {service.number}
              </div>

              {/* Content */}
              <div className="flex-1 max-w-full lg:max-w-[66.9375rem]">
                {/* Title & Description */}
                <div className="mb-3 md:mb-[0.75rem]">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight sm:leading-[1.2] md:leading-[1.2] lg:leading-[3rem] tracking-tight font-medium text-[#121212] mb-2 md:mb-3 font-geist">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-[1.6] md:leading-[1.7] lg:leading-[2.5rem] tracking-tight text-[rgba(18,18,18,0.8)] font-normal font-geist">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="max-w-full lg:max-w-[64rem] w-full rounded-md overflow-hidden mt-6 md:mt-8 lg:mt-[3rem]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[11.25rem] sm:h-[12.5rem] md:h-[13.75rem] lg:h-[15.875rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Partners Ticker */}
      <section className="w-full max-w-[90rem] mx-auto py-12 sm:py-16 md:py-20 lg:py-[6.25rem] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-[3.5rem]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-tight lg:leading-[3.25rem] tracking-tight text-[#1C1C1C] font-normal mb-3 md:mb-4 font-ptserif">
            200+
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-6 tracking-tight text-[#1C1C1C] font-normal font-geist">
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
                className="flex items-center justify-center gap-2 w-[8.75rem] h-[6.25rem] sm:w-[10rem] sm:h-[7.5rem] md:w-[11.25rem] md:h-[8.75rem] lg:w-[12.5rem] lg:h-[9.75rem] border border-[#C6C7CC] shrink-0 px-3 md:px-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                />
                <span className="text-xs sm:text-sm font-medium text-black whitespace-nowrap">
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