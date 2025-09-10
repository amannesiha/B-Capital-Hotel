import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Clock, Star, Heart, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create magical moments with our elegant wedding packages",
    features: [
      "Bridal suite preparation",
      "Customized decorations",
      "Professional photography coordination",
      "Wedding cake service",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional venues for meetings, conferences, and corporate gatherings",
    features: ["Audio-visual equipment", "Business center access", "Catering services", "High-speed internet"],
  },
  {
    icon: Star,
    title: "Private Parties",
    description: "Celebrate special occasions in our beautifully appointed spaces",
    features: [
      "Flexible seating arrangements",
      "Custom menu options",
      "Entertainment coordination",
      "Dedicated event staff",
    ],
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/event-hall.jpg" alt="Event Hall" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Exceptional Events</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
            Create unforgettable memories in our elegant event spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
              Plan Your Event
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Perfect for Every Occasion</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              From intimate gatherings to grand celebrations, we have the perfect space for your event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <eventType.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl text-foreground">{eventType.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center leading-relaxed">{eventType.description}</p>
                  <div className="space-y-2">
                    {eventType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Facilities */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Event Facilities</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              State-of-the-art facilities to make your event a success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Capacity</h3>
                <p className="text-muted-foreground">Up to 200 guests</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
                <p className="text-muted-foreground">7 days a week availability</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Extended Hours</h3>
                <p className="text-muted-foreground">Events until midnight</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Full Service</h3>
                <p className="text-muted-foreground">Complete event planning</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Planning Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">How We Plan Your Event</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our experienced team will guide you through every step of the planning process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                We discuss your vision, requirements, and budget to create the perfect plan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Planning</h3>
              <p className="text-muted-foreground">
                Our team creates a detailed timeline and coordinates all aspects of your event
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Setup</h3>
              <p className="text-muted-foreground">We handle all setup details, decorations, and final preparations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Execution</h3>
              <p className="text-muted-foreground">
                Our staff ensures everything runs smoothly so you can enjoy your special day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Ready to Plan Your Event?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Let our experienced event planning team help you create an unforgettable experience. Contact us today to
            discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
                Contact Event Planner
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
