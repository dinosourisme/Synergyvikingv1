import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImg1 from '../../assets/aboutusfolder/hero-truck-1.png';
import heroImg2 from '../../assets/aboutusfolder/hero-truck-2.png';
import heroImg3 from '../../assets/aboutusfolder/hero-truck-3.png';

// Same text as before, split into 3 lines (no words changed/removed).
const LINES = [
  'Synergy designed 10ft containerized dive control cabin with hp cylinder rack and three diver mix gas panel are one of our best sellers.',
  'The insulated air conditioned container is perfect for offshore marine job where space is the issue. The gas quads are kept outside and connected to container.',
  'The supervisor has all the equipment that he needs at his command to ensure safe diving operations in relative comfort and unencumbered by weather.',
];

const FULL_TEXT = LINES.join(' ');

function Word({ word, progress, range }) {
  const color = useTransform(progress, range, ['#B9B9B9', '#1C1C1C']);
  return <motion.span style={{ color }}>{word}</motion.span>;
}

function ScrollRevealParagraph({ lines, progress, className }) {
  const totalWords = FULL_TEXT.split(' ').length;
  let globalIndex = 0;

  return (
    <div className={className}>
      {lines.map((line, lineIdx) => {
        const lineWords = line.split(' ');
        return (
          <div key={lineIdx} className="flex flex-wrap gap-x-[0.3em]">
            {lineWords.map((word, wordIdx) => {
              const start = globalIndex / totalWords;
              const end = start + 1 / totalWords;
              globalIndex += 1;
              return (
                <Word
                  key={wordIdx}
                  word={word}
                  progress={progress}
                  range={[start, end]}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function HeroSection() {
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start 0.85', 'end 0.4'],
  });

  return (
    <section className="bg-white">
      {/* Dark intro block */}
      <section className="relative w-full bg-[#00151C]  pt-4 pb-16 px-5 sm:px-6 md:px-8 lg:pt-[7px] lg:pb-[120px] lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-3 md:gap-[17px] mb-6 md:mb-8">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00B1F1]" />
          <span className="text-sm md:text-lg leading-[21px] tracking-[-0.28px] uppercase text-white font-geist-mono font-normal">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-full lg:-mt-[50px] xl:-mt-[50px] lg:max-w-[1051px] lg:ml-[205px] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight md:leading-[1.2] lg:leading-[72px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] xl:tracking-[-2.2px] text-white font-normal font-ptserif">
          We are redefining how goods move with the right technology and a commitment to dependable transportation
        </h2>
      </section>

      {/* Images + paragraph */}
      <div
        ref={contentRef}
        className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left: Images */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={heroImg1}
              alt="Diving cabin operation photo 1"
              className="w-full h-auto rounded-md object-cover"
            />
            <img
              src={heroImg2}
              alt="Diving cabin operation photo 2"
              className="w-full h-auto rounded-md object-cover"
            />
            <img
              src={heroImg3}
              alt="Diving cabin operation photo 3"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Right: Text - Sticky on desktop, static on mobile */}
          <div className="md:relative">
            <div className="md:sticky md:top-0 md:h-screen md:flex md:items-center">
              {/* Mobile/Tablet: Static render without animation */}
              <div className="md:hidden">
                <p className="font-geist font-normal text-brand-ink text-lg sm:text-xl md:text-[26px] leading-[1.6] md:leading-[1.5] tracking-tight">
                  {FULL_TEXT}
                </p>
              </div>

              {/* Desktop: Word-by-word scroll reveal, 3 lines */}
              <div className="hidden md:block">
                <ScrollRevealParagraph
                  lines={LINES}
                  progress={scrollYProgress}
                  className="font-geist font-normal text-[26px] lg:text-[32px] leading-[1.5] lg:leading-[52px] tracking-tight flex flex-col gap-y-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;