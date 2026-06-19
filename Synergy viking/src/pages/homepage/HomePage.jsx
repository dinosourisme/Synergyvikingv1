
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
  { number: '08+', description: 'Years of experience delivering certified diving equipment to global offshore operations' },
  { number: '04', description: 'Continents served with our precision-built diving systems and support equipment' },
  { number: '24/7', description: 'Technical support and emergency response for all deployed equipment worldwide' },
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
    description: 'We eliminate inefficiencies by synchronizing every stage of your diving operation with precision-engineered equipment.',
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
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Vertical Sidebar Label */}
        <div className="absolute left-10 top-[119px] w-[175px]">
          <span className="font-geist-mono text-lg leading-[26px] uppercase text-white [text-orientation:mixed] rotate-180">
            COMMERCIAL DIVING EQUIPMENT
          </span>
        </div>

        {/* Hero Content */}
        <div className="absolute left-[340px] top-[99px]">
          <h1 className="font-ptserif text-[60px] leading-[84px] tracking-[-2.2px] text-white font-normal mb-1">
            Synergy viking
          </h1>
          <p className="text-[40.5px] leading-[44px] tracking-[-1px] uppercase text-white/80 font-medium">
            Where Precision Meets the Deep.
          </p>
        </div>

        {/* Get a Quote Button */}
        <Link
          to="/contact"
          className="absolute left-[340px] top-[260px] inline-flex items-center justify-center h-10 px-5 bg-[#00B1F1] rounded-[100px] shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-105"
        >
          <span className="text-base font-semibold text-white tracking-[-0.32px] leading-6">
            Get a Quote
          </span>
        </Link>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-[300px] right-10 h-[88px] flex items-center justify-center border-t border-white">
          <p className="text-lg leading-[27px] tracking-[-0.36px] text-white font-medium max-w-[1060px] text-center">
            Synergy is the India’s leading manufacturer and supplier of commercial diving equipment - trusted by offshore operators, navies, and diving contractors across 4 continents since 2000.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative w-full bg-white py-[60px] px-10">
        <div className="flex justify-between items-center gap-12 max-w-[1440px] mx-auto">
          {/* Left Image */}
          <div className="w-[680px] h-[656px] rounded-md overflow-hidden shrink-0">
            <img
              src={introImage}
              alt="Introduction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-[60px] w-[632px]">
            <h2 className="font-ptserif text-[30px] leading-[40px] tracking-[-0.4px] text-[#121212] font-normal">
              Experience a seamless, uninterrupted flow from the surface to the seabed with our comprehensive diving solutions.
            </h2>

            <div className="flex flex-col gap-[50px]">
              {/* Stats */}
              <div className="flex flex-col gap-7">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start gap-[147px]">
                      <span className="font-ptserif text-[48px] leading-[58px] tracking-[-2.4px] text-[#121212] font-normal shrink-0">
                        {stat.number}
                      </span>
                      <p className="text-lg leading-6 tracking-[-0.3px] text-[#5E5E5E] w-[425px]">
                        {stat.description}
                      </p>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="w-full h-px bg-[#C6C7CC] mt-7" />
                    )}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <Link
                to="/about"
                className="inline-flex items-center justify-center w-[191px] h-10 bg-black rounded-[100px] shadow-[0px_2px_2.667px_-0.667px_rgba(42,42,42,0.1),0px_0.667px_0.667px_rgba(42,42,42,0.08),inset_0px_2px_2px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-105"
              >
                <span className="text-base font-semibold text-white tracking-[-0.32px] leading-6">
                  Learn More about us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative w-full bg-[#00151C] py-[50px] px-10">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-ptserif text-[60px] leading-[84px] tracking-[-2.2px] text-white font-normal mb-[34px]">
            Services
          </h2>

          <div className="w-full h-px bg-[#C6C7CC] mb-[54px]" />

          <div className="grid grid-cols-[120px_minmax(0,1fr)_408px] gap-x-[60px] gap-y-[64px] items-start">
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
                      className="inline-flex items-center justify-center h-10 px-5 bg-white rounded-[100px] transition-transform duration-300 hover:scale-105"
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
      <section className="relative w-full bg-white py-[61px] px-10">
        {/* Label */}
        <div className="flex items-center gap-[17px] mb-[30px]">
          <div className="w-3 h-3 bg-[#00B1F1]" />
          <span className="font-geist-mono text-lg leading-[21px] tracking-[-0.28px] uppercase text-[#1C1C1C]">
            OUR vision
          </span>
        </div>

        <h2 className="font-ptserif max-w-[976px] ml-[378px] text-[60px] leading-[72px] tracking-[-2.2px] text-[#121212] font-normal mb-[60px]">
          Our goal is to be recognised as the most trusted, safety-first diving equipment company serving the global offshore and subsea industry.
        </h2>

        {/* Vision Cards Grid */}
        <div className="flex gap-5 max-w-[1440px] mx-auto">
          {visionCards.map((card, index) => (
            <div
              key={index}
              className={`w-[325px] h-[450px] rounded-md p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] cursor-default ${card.bg}`}
            >
              <div>
                <h3 className={`text-[32px] leading-[42px] tracking-[-1.28px] font-medium mb-6 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-base leading-6 tracking-[-0.32px] font-medium ${card.textColor}`}>
                  {card.description}
                </p>
              </div>
              {/* Static icon placeholder */}
              <div className="w-[150px] h-[150px] opacity-30">
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
      <section className="relative w-full bg-[#00151C] py-[50px] px-10" ref={timelineRef}>
        <div className="flex gap-[124px] max-w-[1440px] mx-auto">
          {/* Left - Fixed Content */}
          <div className="w-[666px] shrink-0 sticky top-[100px] self-start">
            <div className="flex items-center gap-[17px] mb-[30px]">
              <div className="w-3 h-3 bg-[#00B1F1]" />
              <span className="font-geist-mono text-lg leading-[21px] tracking-[-0.28px] uppercase text-white">
                how we work?
              </span>
            </div>
            <h2 className="font-ptserif text-[60px] leading-[72px] tracking-[-2.2px] text-white font-normal">
              Precision manufacturing built for every depth, every project, every time.
            </h2>
          </div>

          {/* Right - Scrollable Timeline */}
          <div className="w-[578px] relative">
            {/* Timeline Line */}
            <div className="absolute left-[30px] top-0 w-[2px] h-full">
              {/* Dashed background */}
              <div className="absolute inset-0 border-l border-dashed border-[#4A4F59]" />
              {/* Blue progress fill */}
              <div
                className="absolute top-0 left-0 w-full bg-[#00B1F1] transition-all duration-100"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Timeline Items */}
            <div className="relative pb-[100px]">
              {timelinePhases.map((phase) => (
                <div key={phase.number} className="relative pl-[100px] mb-[200px] last:mb-0">
                  {/* Number Circle */}
                  <div className="absolute left-0 top-0 w-[60px] h-[60px] rounded-full bg-[#1C1C1C] border border-[#4A4F59] flex items-center justify-center">
                    <span className="text-lg leading-[27px] tracking-[-0.36px] text-white">
                      {phase.number}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="w-[478px] h-[268px] rounded-md overflow-hidden mb-4">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[40px] leading-[42px] tracking-[-1.28px] text-white font-medium mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-xl leading-7 tracking-[-0.32px] text-[#BDBDC2] max-w-[478px]">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="relative w-full bg-white py-[50px] px-10">
        {/* Label */}
        <div className="flex items-center gap-[17px] mb-[30px]">
          <div className="w-3 h-3 bg-[#00B1F1]" />
          <span className="font-geist-mono text-lg leading-[21px] tracking-[-0.28px] uppercase text-[#1C1C1C]">
            how we work?
          </span>
        </div>

        <h2 className="font-ptserif max-w-[1310px] text-[60px] leading-[72px] tracking-[-2.2px] text-[#1C1C1C] font-normal mb-[53px]">
          Every piece of equipment your dive operation needs - manufactured, certified, and delivered by Synergy.
        </h2>

        {/* Product Cards */}
        <div className="flex gap-10 max-w-[1440px] mx-auto">
          {productCards.map((card, index) => (
            <div
              key={index}
              className="relative w-[453px] h-[549px] rounded-md overflow-hidden group cursor-default transition-transform duration-300 hover:scale-[1.02]"
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
              <div className="absolute top-2 right-4 w-2.5 h-2.5 bg-white rounded-full" />

              {/* Title */}
              <h3 className="absolute bottom-8 left-8 text-[32px] leading-[42px] tracking-[-1.28px] font-medium text-white max-w-[393px]">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}