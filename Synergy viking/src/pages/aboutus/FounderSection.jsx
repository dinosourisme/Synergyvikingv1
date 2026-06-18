import founderPattern from '../../assets/aboutusfolder/founder-pattern.svg'
import founderPhoto from '../../assets/aboutusfolder/founder-photo.png'
// by Siddhi Vejare (18 june 2026)

function FounderSection() {
  return (
    <section className="bg-white px-6 sm:px-10 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row rounded-md overflow-hidden">
          {/* Left: text card */}
          <div className="relative w-full md:w-[680px] min-h-[560px] md:h-[750px] bg-brand-cream p-8 sm:p-12 md:p-14 flex flex-col justify-between overflow-hidden">
            <img
              src={founderPattern}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
            />

            <div className="relative z-10 flex flex-col gap-10 md:gap-14">
              <h2 className="font-ptserif font-normal text-brand-ink text-[40px] sm:text-[50px] md:text-[60px] leading-[1.2] tracking-tightest2">
                Meet the founder
              </h2>
              <p className="font-geist font-medium text-brand-ink text-[22px] sm:text-[28px] md:text-[32px] leading-[1.3] md:leading-[42px] tracking-tighthead max-w-[568px]">
                &ldquo;I started Synergy Viking with a simple belief that
                logistics should empower businesses, not limit them. Every
                shipment deserves clarity, safety &amp;&rdquo;
              </p>
            </div>

            <p className="relative z-10 font-geist font-medium text-xl leading-[28px] tracking-[-0.4px] text-brand-gray mt-10">
              Mohak, Founder Synergy Viking
            </p>
          </div>

          {/* Right: photo */}
          <div className="w-full md:w-[680px] h-[320px] sm:h-[460px] md:h-[750px]">
            <img
              src={founderPhoto}
              alt="Placeholder — Mohak, Founder of Synergy Viking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
