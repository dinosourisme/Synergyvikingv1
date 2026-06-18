import HeroSection from './HeroSection.jsx'
import FounderSection from './FounderSection.jsx'
import StatsSection from './StatsSection.jsx'
import TeamSection from './TeamSection.jsx'
// by Siddhi Vejare (18 june 2026)

/**
 * AboutUsPage
 * Merges the 4 About Us sections in order:
 *  1. HeroSection   — long image section (product eyebrow, heading, images, paragraph)
 *  2. FounderSection — "Meet the founder"
 *  3. StatsSection   — "Tracing our path..." numbers
 *  4. TeamSection    — "Our Team" grid
 *
 * Header and footer (including the boat/ship CTA section) are intentionally
 * left out — they will be added separately later.
 */
function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <FounderSection />
      <StatsSection />
      <TeamSection />
    </main>
  )
}

export default AboutUsPage
