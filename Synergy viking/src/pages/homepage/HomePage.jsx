import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/home/hero_bg.svg';
import introImage from '../../assets/home/intro_factory.svg';
import servicesImage from '../../assets/home/services_tech.svg';
import timelineImg1 from '../../assets/home/timeline_1.svg';
import timelineImg2 from '../../assets/home/timeline_1.svg';
import timelineImg3 from '../../assets/home/timeline_1.svg';
import timelineImg4 from '../../assets/home/timeline_1.svg';
import productImg1 from '../../assets/home/timeline_1.svg';
import productImg2 from '../../assets/home/timeline_1.svg';
import productImg3 from '../../assets/home/timeline_1.svg';
import React from 'react';

const stats = [
  { number: '08+', description: 'Products across our range, covering everything from hyperbaric chambers and dive stations to personal diver gear and underwater tools.' },
  { number: '04', description: 'Continents supplied with certified, MCA-compliant diving equipment, shipped from our Dubai facility to wherever your operations demand.' },
  { number: '24/7', description: 'Dedicated support and an extensive spares inventory, ensuring your equipment stays operational when it matters most.' },
];

const servicesPreview = [
  {
    number: '01',
    title: 'SILO Load Testing',
    description: 'Certified structural integrity and load testing for offshore containers, diving chambers, and subsea enclosures. Tested, documented, and ready for operation.',
  },
  {
    number: '02',
    title: 'Chamber Outfitting',
    description: 'Full systems outfitting for hyperbaric and decompression chambers - gas panels, communications, lighting, and medical equipment, installed and commissioned by our team.',
  },
];

const visionCards = [
  {
    title: 'Precision Engineering',
    description: 'We design and build every piece of equipment to meet the highest standards of safety and performance, ensuring reliability in the most demanding underwater environments.',
    bg: 'bg-[#00B1F1]',
    textColor: 'text-white',
  },
  {
    title: 'End-to-End Ownership',
    description: 'Gain absolute peace of mind with 24/7 real-time tracking and comprehensive equipment lifecycle management.',
    bg: 'bg-[#F0F0EB]',
    textColor: 'text-[#1C1C1C]',
  },
  {
    title: 'Global Standards',
    description: 'Our flexible infrastructure grows with your business, ensuring compliance with international diving safety standards.',
    bg: 'bg-[#1C1C1C]',
    textColor: 'text-white',
  },
  {
    title: 'Always Available',
    description: 'Leveraging advanced data to anticipate needs and deliver proactive support for uninterrupted operations.',
    bg: 'bg-[#F0F0EB]',
    textColor: 'text-[#1C1C1C]',
  },
];

const timelinePhases = [
  {
    number: '01',
    title: 'Design phase',
    description: 'We analyze your cargo requirements and optimize routes for maximum efficiency and safety.',
    image: timelineImg1,
  },
  {
    number: '02',
    title: 'Fabrication phase',
    description: 'Our performance-driven fleet takes over, managing every detail with precision and care.',
    image: timelineImg2,
  },
  {
    number: '03',
    title: 'Supply phase',
    description: 'Stay informed with 24/7 tracking and automated updates throughout the delivery process.',
    image: timelineImg3,
  },
  {
    number: '04',
    title: 'Maintenance phase',
    description: 'We complete the cycle with reliable last-mile fulfilment and ongoing equipment support.',
    image: timelineImg4,
  },
];

const productCards = [
  {
    title: 'Launch & Recovery Systems',
    image: productImg1,
  },
  {
    title: 'Power Packs',
    image: productImg2,
  },
  {
    title: 'Diver Support Equipment',
    image: productImg3,
  },
];

export default function Home() {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const progress = Math.max(0, Math.min(1,
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full font-geist">
      {/* Hero Section */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-0 lg:aspect-[1304/863] flex flex-col overflow-hidden bg-brand-navy">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Header spacer */}
        <div className="h-16 sm:h-[4.5rem] md:h-20 shrink-0" />

        {/* Main content area */}
        <div className="relative flex-1 flex flex-col justify-center px-5 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="max-w-[2000px] mx-auto w-full relative lg:-translate-y-40 -mt-8 ">
            {/* Sidebar label — horizontal on mobile, left sidebar on lg+ */}
            <div className="mb-3 sm:mb-4 lg:mb-0 lg:absolute lg:left-0 lg:top-0">
              <p className="text-white uppercase font-geist-mono font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-[18px] sm:leading-[20px] md:leading-[24px] lg:leading-[26px] tracking-wide">
                COMMERCIAL
                <span className="mx-2 lg:hidden">·</span>
                <br className="hidden lg:block" />
                DIVING
                <span className="mx-2 lg:hidden">·</span>
                <br className="hidden lg:block" />
                EQUIPMENT
              </p>
            </div>

            {/* Hero copy */}
            <div className="lg:ml-[300px] xl:ml-[340px] xl:mb-[250px] mb-60 lg:max-w-[688px] xl:-mt-[20px]">
              <div className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <h1 className="text-white font-ptserif font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.15] sm:leading-[1.15] md:leading-[1.1] lg:leading-[84px] tracking-[-1px] sm:tracking-[-1.4px] md:tracking-[-1.8px] xl:tracking-[-2.2px]">
                  Synergy Viking
                </h1>
                <p className="uppercase font-geist font-medium text-[16px] sm:text-[20px] md:text-[28px] lg:text-[38px] xl:text-[40.5px] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] lg:leading-[44px] tracking-[-0.3px] sm:tracking-[-0.6px] md:tracking-[-0.8px] text-white/80">
                  WHERE PRECISION MEETS THE DEEP.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center h-10 px-6 bg-[#00B1F1] rounded-full text-white font-geist font-semibold text-sm sm:text-base leading-6 tracking-[-0.32px] shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] active:scale-95 transition-transform hover:scale-105"
              >
                Get a Quote
                <span className="ml-1.5 h-1.5 bg-white rounded-full transition-all duration-300 w-0 opacity-0 lg:group-hover:w-1.5 lg:group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative w-full border-t border-white/30 shrink-0">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-8 lg:pl-[300px]">
            <p className="text-white font-geist font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px] tracking-[-0.1px] sm:tracking-[-0.15px] md:tracking-[-0.2px] lg:tracking-[-0.36px]">
              Synergy is the India&apos;s leading manufacturer and supplier of commercial diving equipment - trusted by offshore operators, navies, and diving contractors across 4 continents since 2000.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[60px] px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 sm:gap-12 lg:gap-12 max-w-[1440px] mx-auto">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 xl:w-[680px] aspect-[680/656] rounded-md overflow-hidden shrink-0">
            <img
              src={introImage}
              alt="Introduction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[60px] w-full lg:w-1/2 xl:w-[632px]">
            <h2 className="font-ptserif text-xl sm:text-2xl md:text-[26px] lg:text-[30px] leading-[1.4] sm:leading-[1.35] md:leading-[40px] tracking-[-0.3px] md:tracking-[-0.4px] text-[#121212] font-normal">
              Experience a complete, uncompromising approach to commercial diving equipment ; from first design brief to final delivery, backed by a team that stays with you long after the job is done.
            </h2>

            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
              {/* Stats */}
              <div className="flex flex-col gap-6 sm:gap-7">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 md:gap-8 lg:gap-[60px]">
                      <span className="font-ptserif text-3xl sm:text-4xl md:text-[48px] leading-[1.2] sm:leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.4px] text-[#121212] font-normal shrink-0">
                        {stat.number}
                      </span>
                      <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-[24px] md:leading-[27px] tracking-[-0.2px] sm:tracking-[-0.3px] text-[#5E5E5E] w-full sm:max-w-[425px]">
                        {stat.description}
                      </p>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="w-full h-px bg-[#C6C7CC] mt-6 sm:mt-7" />
                    )}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <Link
                to="/about"
                className="inline-flex items-center justify-center w-full sm:w-[191px] h-10 bg-black rounded-full shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] active:scale-95 transition-transform hover:scale-105"
              >
                <span className="text-base font-semibold text-white tracking-[-0.32px] leading-6">
                  Learn more about us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative w-full bg-[#00151C] py-16 sm:py-20 md:py-24 lg:py-[50px] px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-ptserif text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] sm:leading-[1.15] md:leading-[84px] tracking-[-1.2px] sm:tracking-[-1.6px] md:tracking-[-2.2px] text-white font-normal mb-6 sm:mb-8 lg:mb-[34px]">
            Services
          </h2>

          <div className="w-full h-px bg-[#C6C7CC] mb-8 sm:mb-10 lg:mb-[54px]" />

          {/* Mobile/Tablet: Image on top, then compact services */}
          <div className="lg:hidden">
            {/* Image */}
            <div className="w-full aspect-[408/433] rounded-md overflow-hidden mb-8 sm:mb-10">
              <img
                src={servicesImage}
                alt="Services"
                className="w-full h-full object-cover"
              />
            </div>

            {servicesPreview.map((service, index) => (
              <div key={service.number} className={`${index > 0 ? 'mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/20' : ''}`}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-sm sm:text-base font-medium text-white/60">{service.number}</span>
                  <h3 className="text-xl sm:text-2xl md:text-[28px] leading-[1.2] sm:leading-[1.15] tracking-[-0.8px] sm:tracking-[-1.2px] font-medium text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-[17px] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-[-0.2px] sm:tracking-[-0.3px] text-white/80">
                  {service.description}
                </p>
              </div>
            ))}

            <Link
              to="/services"
              className="mt-8 sm:mt-10 inline-flex items-center justify-center w-full h-12 px-5 bg-white rounded-full active:scale-95 transition-transform hover:scale-105"
            >
              <span className="text-base font-medium text-[#1C1C1C] tracking-[-0.32px] leading-6">
                Explore Our Services
              </span>
            </Link>
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden lg:grid lg:grid-cols-[120px_minmax(0,1fr)_408px] lg:gap-x-[60px] lg:gap-y-[64px] lg:items-start">
            {servicesPreview.map((service, index) => (
              <React.Fragment key={service.number}>
                <div className="text-[48px] leading-none tracking-[-2.4px] font-medium text-white pt-1">
                  {service.number}
                </div>

                <div>
                  <h3 className="text-[34px] leading-[40px] tracking-[-1.2px] font-medium text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="max-w-[480px] text-[17px] leading-[26px] tracking-[-0.3px] text-white/80">
                    {service.description}
                  </p>
                </div>

                {index === 0 ? (
                  <div className="row-span-2 flex flex-col items-start gap-4">
                    <div className="w-[408px] h-[433px] rounded-md overflow-hidden">
                      <img
                        src={servicesImage}
                        alt="Services"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center h-10 px-5 bg-white rounded-full transition-transform duration-300 hover:scale-105"
                    >
                      <span className="text-base font-medium text-[#1C1C1C] tracking-[-0.32px] leading-6">
                        Explore Our Services
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[61px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-3 md:gap-[17px] mb-6 sm:mb-8 lg:mb-[30px]">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
          <span className="font-geist-mono text-sm sm:text-base md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-[#1C1C1C]">
            OUR vision
          </span>
        </div>

        <h2 className="font-ptserif max-w-full lg:max-w-[976px] lg:ml-[378px] text-[24px] sm:text-[28px] md:text-4xl lg:text-5xl xl:text-[60px] leading-[1.3] sm:leading-[1.25] md:leading-[1.15] lg:leading-[72px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-2px] xl:tracking-[-2.2px] text-[#121212] font-normal mb-10 sm:mb-12 lg:mb-[60px]">
          Our goal is to be recognised as the most trusted, safety-first diving equipment company serving the global offshore and subsea industry.
        </h2>

        {/* Vision Cards — vertical stack on mobile, 4-col on desktop */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-5 max-w-[1440px] mx-auto">
          {visionCards.map((card, index) => (
            <div
              key={index}
              className={`w-full lg:w-[325px] lg:h-[450px] rounded-md p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] cursor-default ${card.bg}`}
            >
              <div>
                <h3 className={`text-2xl sm:text-[28px] lg:text-[32px] leading-[1.2] sm:leading-[1.15] lg:leading-[42px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.28px] font-medium mb-4 sm:mb-5 lg:mb-6 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-sm sm:text-base leading-6 tracking-[-0.2px] sm:tracking-[-0.32px] font-medium ${card.textColor}`}>
                  {card.description}
                </p>
              </div>
              {/* Decorative circles — hidden on mobile */}
              <div className="hidden lg:block w-[150px] h-[150px] opacity-30">
                <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="75" cy="75" r="70" stroke="currentColor" strokeWidth="1" className={card.textColor} />
                  <circle cx="75" cy="75" r="50" stroke="currentColor" strokeWidth="1" className={card.textColor} />
                  <circle cx="75" cy="75" r="30" stroke="currentColor" strokeWidth="1" className={card.textColor} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative w-full bg-[#00151C] py-16 sm:py-20 md:py-24 lg:py-[50px] px-5 sm:px-6 md:px-8 lg:px-10" ref={timelineRef}>
        <div className="flex flex-col lg:flex-row lg:gap-[60px] xl:gap-[124px] max-w-[1440px] mx-auto">
          {/* Left - Fixed Content */}
          <div className="w-full lg:w-[500px] xl:w-[666px] lg:shrink-0 lg:sticky lg:top-[100px] lg:self-start mb-10 sm:mb-12 lg:mb-0">
            <div className="flex items-center gap-3 md:gap-[17px] mb-6 sm:mb-8 lg:mb-[30px]">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
              <span className="font-geist-mono text-sm sm:text-base md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-white">
                how we work?
              </span>
            </div>
            <h2 className="font-ptserif text-[24px] sm:text-[28px] md:text-4xl lg:text-5xl xl:text-[60px] leading-[1.3] sm:leading-[1.25] md:leading-[1.15] lg:leading-[72px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-2px] xl:tracking-[-2.2px] text-white font-normal">
              Precision manufacturing built for every depth, every project, every time.
            </h2>
          </div>

          {/* Right - Timeline */}
          <div className="w-full lg:w-[500px] xl:w-[578px] relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] sm:left-[20px] lg:left-[30px] top-0 w-[2px] h-full">
              <div className="absolute inset-0 border-l border-dashed border-[#4A4F59]" />
              <div
                className="absolute top-0 left-0 w-full bg-[#00B1F1] transition-all duration-100"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Timeline Items */}
            <div className="relative pb-12 sm:pb-16 lg:pb-[100px]">
              {timelinePhases.map((phase) => (
                <div key={phase.number} className="relative pl-10 sm:pl-[70px] lg:pl-[100px] mb-12 sm:mb-16 lg:mb-[200px] last:mb-0">
                  {/* Number Circle + Title inline on mobile */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-[#1C1C1C] border border-[#4A4F59] flex items-center justify-center shrink-0">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg leading-[27px] tracking-[-0.36px] text-white">
                        {phase.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-[1.2] sm:leading-[1.15] lg:leading-[42px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.28px] text-white font-medium">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="w-full aspect-[478/268] rounded-md overflow-hidden mb-3 sm:mb-4">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-[28px] lg:leading-7 tracking-[-0.2px] sm:tracking-[-0.32px] text-[#BDBDC2] max-w-full lg:max-w-[478px]">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[50px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-3 md:gap-[17px] mb-6 sm:mb-8 lg:mb-[30px]">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
          <span className="font-geist-mono text-sm sm:text-base md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-[#1C1C1C]">
            OUR PRODUCTS
          </span>
        </div>

        <h2 className="font-ptserif max-w-full lg:max-w-[1310px] text-[24px] sm:text-[28px] md:text-4xl lg:text-5xl xl:text-[60px] leading-[1.3] sm:leading-[1.25] md:leading-[1.15] lg:leading-[72px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-2px] xl:tracking-[-2.2px] text-[#1C1C1C] font-normal mb-10 sm:mb-12 lg:mb-[53px]">
          Every piece of equipment your dive operation needs - manufactured, certified, and delivered by Synergy.
        </h2>

        {/* Product Cards — vertical stack on mobile, 3-col on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 max-w-[1440px] mx-auto">
          {productCards.map((card, index) => (
            <div
              key={index}
              className="relative w-full lg:w-[400px] xl:w-[453px] h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[549px] rounded-md overflow-hidden group cursor-default transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-50" />

              {/* Indicator Dot */}
              <div className="absolute top-3 right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full" />

              {/* Title */}
              <h3 className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-[1.2] sm:leading-[1.15] lg:leading-[42px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.28px] font-medium text-white max-w-[260px] sm:max-w-[320px] lg:max-w-[393px]">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}