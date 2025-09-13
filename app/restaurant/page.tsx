import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Utensils, Wine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/restaurant-2.jpg" alt="Restaurant Interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Fine Dining Restaurant</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
            Savor exquisite flavors in an elegant atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground">
              Make Reservation
            </Button>
            <Link href="/menu">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Culinary Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our restaurant offers a sophisticated dining experience featuring a carefully curated menu of local and
                international cuisine. Each dish is prepared with the finest ingredients and presented with artistic
                flair by our talented culinary team.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're joining us for a business lunch, romantic dinner, or special celebration, our elegant
                atmosphere and exceptional service create the perfect setting for any occasion.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Operating Hours</p>
                    <p className="text-muted-foreground">6:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Capacity</p>
                    <p className="text-muted-foreground">120 Guests</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/food-platter.jpg" alt="Signature Dish" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

 

      {/* Atmosphere Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Elegant Atmosphere</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Experience dining in our beautifully designed spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/images/restaurant-1.jpg" alt="Main Dining Area" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Main Dining Area</h3>
                  <p className="text-lg">Spacious and elegant with panoramic views</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/images/restaurant-2.jpg" alt="Private Dining Room" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Private Dining</h3>
                  <p className="text-lg">Intimate spaces for special occasions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dessert Showcase Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Signature Desserts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Indulge in our exquisite collection of handcrafted desserts, prepared by our talented pastry chefs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Chocolate Cake */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/desert/1.jpg"
                alt="Chocolate Cake"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Chocolate Cake</h3>
              </div>
            </div>

            {/* Donut */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/desert/donut.jpg"
                alt="Chocolate Donut"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Chocolate Donut</h3>
              </div>
            </div>

            {/* Eclair */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/desert/2.jpg"
                alt="Eclair"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Eclair</h3>
              </div>
            </div>

            {/* Chocolate Tart */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/desert/3.jpg"
                alt="Chocolate Tart"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Chocolate Tart</h3>
              </div>
            </div>

            {/* Birthday Cake */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/desert/birthday-cake.jpg"
                alt="Birthday Cake"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Birthday Cake</h3>
              </div>
            </div>

            {/* Chocolate Log */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/desert/4.jpg"
                alt="Chocolate Log Cake"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Chocolate Log</h3>
              </div>
            </div>

            {/* Swiss Roll */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
               src="/Desert/torta-1.jpg"
                alt="Swiss Roll"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Swiss Roll</h3>
              </div>
            </div>

            {/* Brownie Tray */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                 src="/desert/torta-2.jpg"
                alt="Brownie Tray"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">Brownie Tray</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground">
              View Full Dessert Menu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
