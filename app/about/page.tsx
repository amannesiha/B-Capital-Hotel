import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/hotel-room-1.jpg" alt="B Capital Hotel" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About B Capital Hotel</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">Your home away from home since 2010</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-balance">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            B Capital Hotel has been a beacon of hospitality in the heart of the city for over a decade. Founded with a
            vision to provide exceptional service and comfortable accommodations, we have continuously evolved to meet
            the changing needs of our guests while maintaining our commitment to excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our dedicated team works tirelessly to ensure every guest experiences the warmth and professionalism that
            has made us a preferred choice for both business and leisure travelers. From our elegantly appointed rooms
            to our world-class dining and event facilities, every detail is designed with your comfort in mind.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Values</h2>
            <p className="text-xl text-muted-foreground text-pretty">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hospitality</h3>
                <p className="text-muted-foreground">
                  We treat every guest like family, ensuring personalized service and attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from housekeeping to dining.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Count on us for consistent, dependable service that exceeds your expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Care</h3>
                <p className="text-muted-foreground">
                  We genuinely care about your comfort and satisfaction during your stay with us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              At B Capital Hotel, we are committed to providing an exceptional experience that combines modern comfort
              with traditional hospitality. Our team of dedicated professionals is here to ensure your stay is memorable
              for all the right reasons.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What Sets Us Apart</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Personalized service tailored to each guest's unique needs and preferences
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Modern amenities and facilities designed for both comfort and functionality
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Prime location in the city center with easy access to major attractions
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Commitment to sustainability and environmental responsibility</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/restaurant-2.jpg" alt="Hotel Interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
