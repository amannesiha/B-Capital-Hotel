import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Utensils, Calendar, Bed, Wifi, Car, Coffee, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background" style={{ isolation: "isolate", contain: "layout style" }}>
      <Navigation />

      <HeroSlideshow />

      {/* Reservation Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Book Your Stay</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose from our selection of luxurious rooms and suites
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="checkin" className="block text-sm font-medium text-foreground mb-2">Check-in</label>
                <Input type="date" id="checkin" className="bg-input border-border" />
              </div>
              <div>
                <label htmlFor="checkout" className="block text-sm font-medium text-foreground mb-2">Check-out</label>
                <Input type="date" id="checkout" className="bg-input border-border" />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">Guests</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Search Rooms
                </Button>
              </div>
            </div>
          </div>

          {/* Room List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Deluxe Room */}
            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/hotel-room-1.jpg"
                  alt="Deluxe Room"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  $120/night
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Deluxe Room</h3>
                <p className="text-muted-foreground mb-4">
                  Spacious room with modern amenities, perfect for business and leisure travelers.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-primary" />
                    <span className="text-sm">King Size Bed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span className="text-sm">Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="h-4 w-4 text-primary" />
                    <span className="text-sm">Coffee Machine</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Up to 2 Guests</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Executive Suite */}
            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/hotel-room-2.jpg"
                  alt="Executive Suite"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  $200/night
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Executive Suite</h3>
                <p className="text-muted-foreground mb-4">
                  Premium suite with separate living area, ideal for extended stays and business meetings.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-primary" />
                    <span className="text-sm">King Size Bed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span className="text-sm">Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="h-4 w-4 text-primary" />
                    <span className="text-sm">Mini Bar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Up to 4 Guests</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Presidential Suite */}
            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/hotel-room-1.jpg"
                  alt="Presidential Suite"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  $350/night
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Presidential Suite</h3>
                <p className="text-muted-foreground mb-4">
                  Luxurious suite with panoramic views, perfect for special occasions and VIP guests.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-primary" />
                    <span className="text-sm">King Size Bed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span className="text-sm">Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="h-4 w-4 text-primary" />
                    <span className="text-sm">Full Kitchen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Up to 6 Guests</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Special Offers */}
          <div className="mt-12 bg-primary/10 dark:bg-primary/20 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Special Offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Free Airport Shuttle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Complimentary Breakfast</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Late Check-out Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Why Choose B Capital Hotel?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the perfect blend of modern amenities and exceptional hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative h-32 w-full mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/modern-hotel-wifi-lounge-area-with-people-using-la.jpg"
                    alt="Free Wi-Fi Service"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Wi-Fi</h3>
                <p className="text-muted-foreground">High-speed internet access throughout the hotel</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative h-32 w-full mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Prying room.jpg"
                    alt="Muslim Prayer Room"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Islamic Prayer Room</h3>
                <p className="text-muted-foreground">Quiet Islamic Prayer Room for every traveler</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative h-32 w-full mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/elegant-room-service-tray-with-gourmet-food-and-co.jpg"
                    alt="24/7 Room Service"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Room Service</h3>
                <p className="text-muted-foreground">Round-the-clock service for your convenience</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative h-32 w-full mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/gym.jpg"
                    alt="Modern Hotel Fitness Center"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fitness Center</h3>
                <p className="text-muted-foreground">Modern gym with state-of-the-art equipment</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative h-32 w-full mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/airport-shuttle.png"
                    alt="Complimentary Airport Shuttle Service"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Airport Shuttle</h3>
                <p className="text-muted-foreground">Complimentary transportation to and from airport</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Comfortable Accommodations</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Modern rooms designed for your comfort and relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/images/hotel-room-1.jpg" alt="Deluxe Room" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Deluxe Rooms</h3>
                  <p className="text-lg">Spacious rooms with modern amenities</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/images/hotel-room-2.jpg" alt="Executive Suite" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Executive Suites</h3>
                  <p className="text-lg">Premium suites for business travelers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button className="bg-primary hover:bg-secondary text-primary-foreground">View All Rooms</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Exquisite Dining Experience</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Indulge in our carefully crafted menu featuring local and international cuisine. Our elegant restaurant
                provides the perfect atmosphere for both business meals and romantic dinners.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Utensils className="h-6 w-6 text-primary" />
                <span className="text-foreground">Fine Dining Restaurant</span>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-foreground">Open Daily 6:00 AM - 11:00 PM</span>
              </div>
              <div className="flex gap-4">
                <Link href="/restaurant">
                  <Button className="bg-primary hover:bg-secondary text-primary-foreground">View Restaurant</Button>
                </Link>
                <Link href="/menu">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    See Menu
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/restaurant-1.jpg" alt="Restaurant Interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/event-hall.jpg" alt="Event Hall" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Perfect Venue for Events</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Host your special occasions in our elegant event spaces. From intimate gatherings to grand celebrations,
                we provide the perfect setting with professional service.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Wedding Receptions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Corporate Events</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Private Parties</span>
                </div>
              </div>
              <Link href="/events">
                <Button className="bg-primary hover:bg-secondary text-primary-foreground">Plan Your Event</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
