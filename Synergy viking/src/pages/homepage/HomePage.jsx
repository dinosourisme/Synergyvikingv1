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

import icon1 from '../../assets/home/arrowbox.svg';
import icon2 from '../../assets/home/circle.svg';
import icon3 from '../../assets/home/circlesbox.svg';
import icon4 from '../../assets/home/Container.svg';

import React from 'react';
import { motion } from 'framer-motion';

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

const CARDS = [
  {
    bg: '#00B1F1',
    textColor: '#FFFFFF',
    title: 'Precision\nEngineering',
    body: 'Built to the deepest standard. Every system we manufacture is designed with zero tolerance for failure – engineered to IMCA, ADCI, and ISO specifications, where diver safety is never a compromise.',
    icon: icon1,
    iconScale: 1,
  },
  {
    bg: '#F0F0EB',
    textColor: '#1C1C1C',
    title: 'End-to-End\nOwnership',
    body: 'From design brief to operational deployment, we take full responsibility for every stage: fabrication, testing, certification, delivery, and lifetime support, all under one roof.',
    icon: icon2,
    iconScale: 1.1,
  },
  {
    bg: '#1C1C1C',
    textColor: '#FFFFFF',
    title: 'Global\nStandards',
    body: 'Synergy holds ISO 9001, ISO 14001 and ISO 45001 certifications, meaning our quality, environmental, and safety management systems meet the highest international benchmarks, every time.',
    icon: icon3,
    invertIcon: true,
    iconScale: 1.4,
  },
  {
    bg: '#F0F0EB',
    textColor: '#1C1C1C',
    title: 'Always\nAvailable',
    body: 'We maintain an extensive inventory of diving equipment and spares to support our clients\u2019 operations 24/7, 365 days a year \u2014 because downtime underwater is never an option.',
    icon: icon4,
    iconScale: 1.1,
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
      <section className="relative w-full min-h-[32.5rem] sm:min-h-[36.25rem] md:min-h-[40rem] lg:min-h-0 lg:aspect-[1304/863] flex flex-col overflow-hidden bg-brand-navy">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-[65%_center] md:object-top"
        />

        {/* Header spacer */}
        <div className="h-16 sm:h-[4.5rem] md:h-20 shrink-0" />

        {/* Main content area */}
        <div className="relative flex-1 flex flex-col justify-center px-5 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="max-w-[90rem] mx-auto w-full relative lg:-translate-y-10 -mt-8">
            {/* Sidebar label — horizontal on mobile, left sidebar on lg+ */}
            <div className="mb-3 sm:mb-4 lg:mb-0 lg:absolute lg:left-0 lg:top-0">
              <p className="text-white uppercase font-geist-mono font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wide">
                COMMERCIAL
                <span className="mx-2 lg:hidden">|</span>
                <br className="hidden lg:block" />
                DIVING
                <span className="mx-2 lg:hidden">|</span>
                <span className="lg:ml-2">EQUIPMENT</span>
              </p>
            </div>

            {/* Hero copy */}
            <div className="lg:ml-[18.75rem] xl:ml-[21.25rem] xl:mb-[15.625rem] mb-60 lg:max-w-[43rem] xl:-mt-[1.25rem]">
              <div className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <h1 className="text-white font-ptserif font-normal text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[3.75rem] leading-[1.15] tracking-tight">
                  Synergy Viking
                </h1>
                <p className="uppercase font-geist font-medium text-base sm:text-xl md:text-[1.75rem] lg:text-[2.375rem] xl:text-[2.53125rem] leading-[1.2] tracking-tight text-white/80">
                  WHERE PRECISION MEETS THE DEEP.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center h-10 px-6 bg-[#00B1F1] rounded-full text-white font-geist font-semibold text-sm sm:text-base leading-6 tracking-tight shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] active:scale-95 transition-transform hover:scale-105"
              >
                Get a Quote
                <span className="ml-1.5 h-1.5 bg-white rounded-full transition-all duration-300 w-0 opacity-0 lg:group-hover:w-1.5 lg:group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative w-full border-t border-white/30 shrink-0">
          <div className="max-w-[90rem] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-8 lg:pl-[18.75rem]">
            <p className="text-white font-geist font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-tight">
              Synergy is the India&apos;s leading manufacturer and supplier of commercial diving equipment - trusted by offshore operators, navies, and diving contractors across 4 continents since 2000.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[3.75rem] px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-12 lg:gap-[3.75rem] max-w-[90rem] mx-auto">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 rounded-md overflow-hidden shrink-0">
            <img
              src={introImage}
              alt="Introduction"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[3.75rem] w-full lg:w-1/2">
            <h2 className="font-ptserif text-xl sm:text-2xl md:text-[1.625rem] lg:text-[1.875rem] leading-[1.4] tracking-tight text-[#121212] font-normal">
              Experience a complete, uncompromising approach to commercial diving equipment ; from first design brief to final delivery, backed by a team that stays with you long after the job is done.
            </h2>

            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[3.125rem]">
              {/* Stats */}
              <div className="flex flex-col gap-6 sm:gap-7">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <motion.div
                      key={index}
                      initial={{ y: 25, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 md:gap-8 lg:gap-[3.75rem]">
                        <span className="font-ptserif text-3xl sm:text-4xl md:text-[3rem] leading-[1.2] tracking-tight text-[#121212] font-normal shrink-0">
                          {stat.number}
                        </span>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-[#5E5E5E] w-full sm:max-w-[26.5625rem]">
                          {stat.description}
                        </p>
                      </div>
                      {index < stats.length - 1 && (
                        <div className="w-full h-px bg-[#C6C7CC] mt-6 sm:mt-7" />
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <Link
                to="/about"
                className="inline-flex items-center justify-center w-full sm:w-[11.9375rem] h-10 bg-black rounded-full shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] active:scale-95 transition-transform hover:scale-105"
              >
                <span className="text-base font-semibold text-white tracking-tight leading-6">
                  Learn more about us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative w-full bg-[#00151C] py-16 sm:py-20 md:py-24 lg:py-[3.125rem] px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-ptserif text-[2rem] sm:text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] leading-[1.2] tracking-tight text-white font-normal mb-6 sm:mb-8 lg:mb-[2.125rem]">
            Services
          </h2>

          <div className="w-full h-px bg-[#C6C7CC] mb-8 sm:mb-10 lg:mb-[3.375rem]" />

          {/* Mobile/Tablet: Image on top, then compact services */}
          <div className="lg:hidden">
            {/* Image */}
            <div className="w-full aspect-square rounded-md overflow-hidden mb-8 sm:mb-10">
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
                  <h3 className="text-xl sm:text-2xl md:text-[1.75rem] leading-[1.2] tracking-tight font-medium text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-[1.0625rem] leading-relaxed tracking-tight text-white/80">
                  {service.description}
                </p>
              </div>
            ))}

            <Link
              to="/services"
              className="mt-8 sm:mt-10 inline-flex items-center justify-center w-full h-12 px-5 bg-white rounded-full active:scale-95 transition-transform hover:scale-105"
            >
              <span className="text-base font-medium text-[#1C1C1C] tracking-tight leading-6">
                Explore Our Services
              </span>
            </Link>
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden lg:grid lg:grid-cols-[7.5rem_minmax(0,1fr)_25.5rem] lg:gap-x-[3.75rem] lg:gap-y-16 lg:items-start">
            {servicesPreview.map((service, index) => (
              <React.Fragment key={service.number}>
                <div className="text-[3rem] leading-none tracking-tight font-medium text-white pt-1">
                  {service.number}
                </div>

                <div>
                  <h3 className="text-[2.125rem] leading-[2.5rem] tracking-tight font-medium text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="max-w-[30rem] text-[1.0625rem] leading-[1.625rem] tracking-tight text-white/80">
                    {service.description}
                  </p>
                </div>

                {index === 0 ? (
                  <div className="row-span-2 flex flex-col items-start gap-4">
                    <div className="w-[25.5rem] h-[27.0625rem] rounded-md overflow-hidden">
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
                      <span className="text-base font-medium text-[#1C1C1C] tracking-tight leading-6">
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
      <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[3.8125rem] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-3 md:gap-[1.0625rem] mb-6 sm:mb-8 lg:mb-[1.875rem]">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
          <span className="font-geist-mono text-sm sm:text-base md:text-lg leading-[1.3125rem] tracking-tight uppercase text-[#1C1C1C]">
            OUR vision
          </span>
        </div>

        <h2 className="font-ptserif max-w-full lg:max-w-[61rem] lg:-mt-[3.75rem] lg:ml-[23.625rem] text-2xl sm:text-[1.75rem] md:text-4xl lg:text-5xl xl:text-[3.75rem] leading-[1.3] tracking-tight text-[#121212] font-normal mb-10 sm:mb-12 lg:mb-[3.75rem]">
          Our goal is to be recognised as the most trusted, safety-first diving equipment company serving the global offshore and subsea industry.
        </h2>

        {/* Vision Cards — vertical stack on mobile/tablet, 4-col grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5 max-w-[90rem] mx-auto">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="w-full h-auto lg:h-[28.125rem] p-6 sm:p-7 lg:p-8 flex flex-col relative overflow-hidden"
              style={{
                background: card.bg,
                borderRadius: '0.375rem',
              }}
            >
              {/* Card title */}
              <h3
                className="text-2xl sm:text-[1.75rem] lg:text-[2rem] leading-[1.25] tracking-tight mb-2 sm:mb-3 lg:mb-4"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 500,
                  color: card.textColor,
                  whiteSpace: 'pre-line',
                  marginTop: 0,
                }}
              >
                {card.title}
              </h3>

              {/* Card body */}
              <p
                className="text-sm sm:text-[0.9375rem] lg:text-base leading-relaxed tracking-tight"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 500,
                  color: card.textColor,
                  margin: 0,
                }}
              >
                {card.body}
              </p>

              {/* Icon — desktop only */}
              <div className="hidden lg:block absolute bottom-8 left-8">
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{
                    width: '5rem',
                    height: '5rem',
                    objectFit: 'contain',
                    filter: card.invertIcon ? 'brightness(0) invert(1)' : 'none',
                    transform: `scale(${card.iconScale || 1})`,
                    transformOrigin: 'bottom left',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative w-full bg-[#00151C] py-16 sm:py-20 md:py-24 lg:py-[3.125rem] px-5 sm:px-6 md:px-8 lg:px-10" ref={timelineRef}>
        <div className="flex flex-col lg:flex-row lg:ml-[0.625rem] lg:gap-[3.75rem] xl:gap-[7.75rem] max-w-[90rem] mx-auto">
          {/* Left - Fixed Content */}
          <div className="w-full lg:w-[31.25rem] xl:w-[41.625rem] lg:shrink-0 lg:sticky lg:top-[6.25rem] lg:self-start mb-10 sm:mb-12 lg:mb-0">
            <div className="flex items-center gap-3 md:gap-[1.0625rem] mb-6 sm:mb-8 lg:mb-[1.875rem]">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
              <span className="font-geist-mono text-sm sm:text-base md:text-lg leading-[1.3125rem] tracking-tight uppercase text-white">
                how we work?
              </span>
            </div>
            <h2 className="font-ptserif text-2xl sm:text-[1.75rem] md:text-4xl lg:text-5xl xl:text-[3.75rem] leading-[1.3] tracking-tight text-white font-normal">
              Precision manufacturing built for every depth, every project, every time.
            </h2>
          </div>

          {/* Right - Timeline */}
          <div className="w-full lg:w-[31.25rem] xl:w-[36.125rem] relative">
            {/* Timeline Line */}
            <div className="absolute left-[0.9375rem] sm:left-[1.25rem] lg:left-[1.875rem] top-0 w-0.5 h-full">
              <div className="absolute inset-0 border-l border-dashed border-[#4A4F59]" />
              <div
                className="absolute top-0 left-0 w-full bg-[#00B1F1] transition-all duration-100"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Timeline Items */}
            <div className="relative pb-12 sm:pb-16 lg:pb-[6.25rem]">
              {timelinePhases.map((phase) => (
                <div key={phase.number} className="relative pl-10 sm:pl-[4.375rem] lg:pl-[6.25rem] mb-12 sm:mb-16 lg:mb-[12.5rem] last:mb-0">
                  {/* Number Circle + Title inline on mobile */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[3.75rem] lg:h-[3.75rem] rounded-full bg-[#1C1C1C] border border-[#4A4F59] flex items-center justify-center shrink-0">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg leading-[1.6875rem] tracking-tight text-white">
                        {phase.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.2] tracking-tight text-white font-medium">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="w-full aspect-video rounded-md overflow-hidden mb-3 sm:mb-4">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-[#BDBDC2] max-w-full lg:max-w-[29.875rem]">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[3.125rem] px-5 sm:px-6 md:px-8 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-3 md:gap-[1.0625rem] mb-6 sm:mb-8 lg:mb-[1.875rem]">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
          <span className="font-geist-mono text-sm sm:text-base md:text-lg leading-[1.3125rem] tracking-tight uppercase text-[#1C1C1C]">
            How we work?
          </span>
        </div>

        <h2 className="font-ptserif max-w-full lg:max-w-[81.875rem] text-2xl sm:text-[1.75rem] md:text-4xl lg:text-5xl xl:text-[3.75rem] leading-[1.3] tracking-tight text-[#1C1C1C] font-normal mb-10 sm:mb-12 lg:mb-[3.3125rem]">
          Every piece of equipment your dive operation needs - manufactured, certified, and delivered by Synergy.
        </h2>

        {/* Product Cards — vertical stack on mobile, 3-col grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[90rem] mx-auto">
          {productCards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-[20rem] sm:h-[23.75rem] md:h-[28.125rem] lg:h-[31.25rem] xl:h-[34.3125rem] rounded-md overflow-hidden group cursor-default transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
              <h3 className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2rem] leading-[1.2] tracking-tight font-medium text-white max-w-[16.25rem] sm:max-w-[20rem] lg:max-w-[24.5625rem]">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}