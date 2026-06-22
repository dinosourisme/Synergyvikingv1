import anyaSharma from '../../assets/aboutusfolder/team1.png';
import benCarter from '../../assets/aboutusfolder/team2.png';
import chloeWong from '../../assets/aboutusfolder/team3.png';
import davidRodriguez from '../../assets/aboutusfolder/team4.png';
import emilyChen from '../../assets/aboutusfolder/team5.png';
import samuelJones from '../../assets/aboutusfolder/team6.png';
import omarKhan from '../../assets/aboutusfolder/team7.png';
import isabellaRossi from '../../assets/aboutusfolder/team8.png';
// by Siddhi Vejare (18 june 2026)

const TEAM = [
  { name: 'Anya Sharma', role: 'Head of AI & Analytics', photo: anyaSharma },
  { name: 'Ben Carter', role: 'Director of AI Operations', photo: benCarter },
  { name: 'Chloe Wong', role: 'Lead IT Systems Architect', photo: chloeWong },
  { name: 'David Rodriguez', role: 'Supply Chain Strategist', photo: davidRodriguez },
  { name: 'Emily Chen', role: 'Global Freight Manager', photo: emilyChen },
  { name: 'Samuel Jones', role: 'Customer Success Lead', photo: samuelJones },
  { name: 'Omar Khan', role: 'Head of Business', photo: omarKhan },
  { name: 'Isabella Rossi', role: 'Senior Product Manager', photo: isabellaRossi },
];

function TeamSection() {
  return (
    <section className="bg-white px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-ptserif font-normal text-brand-ink text-[28px] sm:text-[34px] md:text-[46px] lg:text-[60px] leading-[1.15] sm:leading-[1.2] tracking-tightest2 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          Our Team
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="border border-[#C6C7CC] rounded-md overflow-hidden flex flex-col transition-all duration-300 lg:hover:shadow-lg lg:hover:border-[#00B1F1]/30"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[414px] object-cover"
              />
              <div className="p-2.5 sm:p-3 md:p-4 flex flex-col gap-1 sm:gap-1.5">
                <h3 className="font-sans font-medium text-brand-ink text-sm sm:text-base md:text-lg leading-[20px] sm:leading-[24px] md:leading-[27px] tracking-[-0.28px] sm:tracking-[-0.32px] md:tracking-[-0.36px]">
                  {member.name}
                </h3>
                <p className="font-geist-mono font-normal uppercase text-brand-slate text-[10px] sm:text-xs md:text-sm leading-[15px] sm:leading-[18px] md:leading-[21px] tracking-tightmono">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;