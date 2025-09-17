import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ShuttleServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/airport-shuttle.jpg" alt="Airport Shuttle Service" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Shuttle Service</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">
            Complimentary transportation to and from the airport for a seamless travel experience
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl font-bold text-foreground">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Scheduled pickups and drop-offs</li>
            <li>Comfortable, air-conditioned vehicles</li>
            <li>Professional and courteous drivers</li>
            <li>24/7 availability upon request</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}


