import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { Hero } from "@/components/home/Hero"
import { BusinessChallenges } from "@/components/home/BusinessChallenges"
import { SolutionsGrid } from "@/components/home/SolutionsGrid"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { Industries } from "@/components/home/Industries"
import { WhyRudrx } from "@/components/home/WhyRudrx"
import { SuccessStories } from "@/components/home/SuccessStories"
import { TechnologyEcosystem } from "@/components/home/TechnologyEcosystem"
import { DeliveryProcess } from "@/components/home/DeliveryProcess"
import { Insights } from "@/components/home/Insights"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BusinessChallenges />
        <SolutionsGrid />
        <FeaturedProducts />
        <Industries />
        <WhyRudrx />
        <SuccessStories />
        <TechnologyEcosystem />
        <DeliveryProcess />
        <Insights />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
