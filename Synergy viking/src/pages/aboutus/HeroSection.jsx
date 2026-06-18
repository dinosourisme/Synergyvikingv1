import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import heroImg1 from '../../assets/aboutusfolder/hero-truck-1.png'
import heroImg2 from '../../assets/aboutusfolder/hero-truck-2.png'
import heroImg3 from '../../assets/aboutusfolder/hero-truck-3.png'
import arrowIcon from '../../assets/aboutusfolder/arrow-icon.svg'

function HeroSection() {
  const contentRef = useRef(null)

  const isInView = useInView(contentRef, {
    amount: 0.25,
    once: false,
  })

  return (
    <section className="bg-white">
      {/* Dark intro block */}
      <div className="bg-brand-navy px-6 sm:px-10 pt-28 pb-16 md:pt-10 md:pb-20">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-start gap-6 md:gap-20">
          <div className="flex items-center gap-[17px] shrink-0 md:pt-2">
            <span className="w-3 h-3 bg-brand-sky inline-block" />
            <span className="font-geist-mono font-normal text-lg leading-[21px] tracking-tightmono uppercase text-white">
              Product
            </span>
          </div>
          <h1 className="md:ml-25 font-ptserif font-normal text-white text-[36px] sm:text-[48px] md:text-[60px] leading-[1.2] tracking-tightest2 max-w-[1100px]">
            We are redefining how goods move with the right technology and a
            commitment to dependable transportation
          </h1>
        </div>
      </div>

      {/* Images + paragraph */}
      <div
        ref={contentRef}
        className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Images scroll normally */}
          <div className="flex flex-col gap-4">
            <img
              src={heroImg1}
              alt="Placeholder — diving cabin operation photo 1"
              className="w-full h-auto rounded-md object-cover"
            />
            <img
              src={heroImg2}
              alt="Placeholder — diving cabin operation photo 2"
              className="w-full h-auto rounded-md object-cover"
            />
            <img
              src={heroImg3}
              alt="Placeholder — diving cabin operation photo 3"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Right: Sticky & centered text */}
          <div className="md:relative">
            <div className="md:sticky md:top-0 md:h-screen md:flex md:items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <p className="font-geist font-normal text-brand-ink text-[20px] sm:text-[26px] md:text-[32px] leading-[1.5] md:leading-[52px] tracking-tightbody">
                  Synergy designed 10ft containerized dive control cabin with hp
                  cylinder rack and three diver mix gas panel are one of our best
                  sellers. The insulated air conditioned container is perfect for
                  offshore marine job where space is the issue. The gas quads are
                  kept outside and connected to container. The supervisor has all
                  the equipment that he needs at his command to ensure safe
                  diving operations in relative comfort and unencumbered by
                  weather.
                </p>

                <motion.button
                  type="button"
                  aria-label="Learn more"
                  className="mt-10 w-14 h-14 rounded-full bg-brand-lime flex items-center justify-center transition-transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <img src={arrowIcon} alt="" className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection