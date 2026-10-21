import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { OfferSection } from '@/components/landing/offer-section'
import { ProblemSection } from '@/components/landing/problem-section'
import { SignupSection } from '@/components/landing/signup-section'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <OfferSection />
        <SignupSection />
      </main>
      <SiteFooter />
    </>
  )
}
