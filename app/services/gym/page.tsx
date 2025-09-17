import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GymServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/gym.jpg" alt="Hotel Gym" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Fitness Center</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">
            Stay active with our fully equipped modern gym available to all guests
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl font-bold text-foreground">Amenities</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Cardio machines and free weights</li>
            <li>Clean locker rooms and showers</li>
            <li>Complimentary towels and water</li>
            <li>Open daily 6:00 AM - 11:00 PM</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}


