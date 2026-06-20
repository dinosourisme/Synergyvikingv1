import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const STATS = [
  {
    value: 98,
    suffix: '%',
    description: 'On-time delivery rate across thousands of shipments every year.',
  },
  {
    value: 1200,
    suffix: '+',
    description: 'Shipments completed for manufacturers, retailers and distributors.',
  },
  {
    value: 300,
    suffix: '+',
    description: 'Business clients trusting Synergy Viking for consistent logistics performance.',
  },
  {
    value: 150,
    suffix: '+',
    description: 'Daily truck movements across ports, depots, warehouses and distribution centers.',
  },
  {
    value: 20,
    suffix: '+',
    description: 'Industries served including retail, food service, construction and export operations.',
  },
];

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-1">
      <motion.span className="font-sans  text-brand-lime text-[40px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[1] tracking-[-1px]">
        {display}
      </motion.span>
      <span className="font-sans  text-brand-lime text-[40px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[1] tracking-[-1px]">
        {suffix}
      </span>
    </span>
  );
}

function StatsSection() {
  return (
    <section className="bg-brand-navy px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-12 sm:py-16 md:py-[75px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px]">
        <h2 className="font-ptserif font-normal text-white text-[28px] sm:text-[34px] md:text-[46px] lg:text-[60px] leading-[1.15] sm:leading-[1.2] tracking-tightest2 max-w-[1200px]">
          Tracing our path of relentless innovation and sustainable
          expansion — numbers here.
        </h2>

        <div className="flex flex-col">
          {STATS.map((stat) => (
            <div
              key={stat.description}
              className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-3 md:gap-0 py-6 sm:py-7 md:py-8 border-b border-white/40"
            >
              <div className="md:w-1/2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-geist text-white/70 text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[27px] tracking-tightstat md:w-1/2 md:max-w-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;