import anyaSharma from '../../assets/aboutusfolder/team1.png'
import benCarter from '../../assets/aboutusfolder/team2.png'
import chloeWong from '../../assets/aboutusfolder/team3.png'
import davidRodriguez from '../../assets/aboutusfolder/team4.png'
import emilyChen from '../../assets/aboutusfolder/team5.png'
import samuelJones from '../../assets/aboutusfolder/team6.png'
import omarKhan from '../../assets/aboutusfolder/team7.png'
import isabellaRossi from '../../assets/aboutusfolder/team8.png'
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
]

/**
 * Section 4 — Our Team
 * Heading followed by a 4-column grid of staff cards (2 cols tablet, 1 col mobile).
 */
function TeamSection() {
  return (
    <section className="bg-white px-6 sm:px-10 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-ptserif font-normal text-brand-ink text-[34px] sm:text-[46px] md:text-[60px] leading-[1.2] tracking-tightest2 mb-10 md:mb-16">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="border border-brand-line rounded-md overflow-hidden flex flex-col"
            >
              <img
                src={member.photo}
                alt={`Placeholder portrait — ${member.name}`}
                className="w-full h-[300px] sm:h-[360px] md:h-[414px] object-cover"
              />
              <div className="p-4 flex flex-col gap-1.5">
                <h3 className="font-sans font-medium text-brand-ink text-lg leading-[27px] tracking-[-0.36px]">
                  {member.name}
                </h3>
                <p className="font-geist-mono font-normal uppercase text-brand-slate text-sm leading-[21px] tracking-tightmono">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
