import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">B Capital Hotel</h3>
            <p className="text-white/80 leading-relaxed">
              Experience luxury and comfort at B Capital Hotel. Your perfect stay awaits with our exceptional service
              and modern amenities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/restaurant" className="block text-white/80 hover:text-white transition-colors">
                Restaurant
              </Link>
              <Link href="/events" className="block text-white/80 hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/gallery" className="block text-white/80 hover:text-white transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2">
              <p className="text-white/80">Room Service</p>
              <p className="text-white/80">Conference Facilities</p>
              <p className="text-white/80">Event Planning</p>
              <p className="text-white/80">Catering Services</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white/80">+251 911 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white/80">info@bcapitalhotel.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white/80">123 Capital Street, Dire City Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">© 2025 B Capital Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
