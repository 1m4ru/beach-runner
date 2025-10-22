import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { ContactForm } from "@/components/contact-form"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Stats />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}
