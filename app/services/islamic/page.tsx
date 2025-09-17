import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function IslamicServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/Prying room.jpg" alt="Islamic Prayer Room" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Islamic Prayer Room</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">
            Quiet and comfortable prayer space available for our guests
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
          <h2 className="text-3xl font-bold text-foreground">Facilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Clean prayer mats and ablution area</li>
            <li>Clearly marked Qibla direction</li>
            <li>Open during hotel hours; special access on request</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}


