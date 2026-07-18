import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { Hero } from "@/components/home/Hero"
import { SolutionsGrid } from "@/components/home/SolutionsGrid"
import { DeliveryProcess } from "@/components/home/DeliveryProcess"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolutionsGrid />
        <DeliveryProcess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
