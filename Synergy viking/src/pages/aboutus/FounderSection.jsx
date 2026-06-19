import founderPhoto from '../../assets/aboutusfolder/founder-photo.png';
import backgroundPhoto from '../../assets/aboutusfolder/Background Pattern.svg'
// by Siddhi Vejare (18 june 2026)

function FounderSection() {
  return (
    <section className="bg-white px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row rounded-md overflow-hidden">
          {/* Photo — first on mobile, right on desktop */}
          <div className="w-full md:w-1/2 lg:w-[680px] h-[260px] sm:h-[320px] md:h-[600px] lg:h-[750px] order-first md:order-last">
            <img
              src={founderPhoto}
              alt="Mohak, Founder of Synergy Viking"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text card — second on mobile, left on desktop */}
          <div className="relative w-full md:w-1/2 lg:w-[680px] min-h-[480px] sm:min-h-[520px] md:min-h-[600px] lg:h-[750px] bg-stone-50 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between overflow-hidden">
            {/* Background pattern placeholder */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src={backgroundPhoto}
                alt=""
                className="w-full h-full object-cover opacity-100"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-14">
              <h2 className="font-ptserif font-normal text-brand-ink text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.15] sm:leading-[1.2] tracking-tightest2">
                Meet the founder
              </h2>
              <p className="font-geist font-medium text-brand-ink text-lg sm:text-xl md:text-[26px] lg:text-[32px] leading-[1.4] sm:leading-[1.35] md:leading-[1.3] lg:leading-[42px] tracking-tighthead max-w-[568px]">
                &ldquo;I started Synergy Viking with a simple belief that logistics should empower businesses, not limit them. Every shipment deserves clarity, safety &amp; care.&rdquo;
              </p>
            </div>

            <p className="relative z-10 font-geist font-medium text-base sm:text-lg md:text-xl leading-[24px] sm:leading-[28px] tracking-[-0.32px] sm:tracking-[-0.4px] text-brand-gray mt-8 sm:mt-10">
              Mohak, Founder Synergy Viking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;