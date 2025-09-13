"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Restaurant", href: "/restaurant" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Menu", href: "/menu" },
  { name: "Events", href: "/events" },
  { name: "Room", href: "/room" },
]

interface NavigationProps {
  overlay?: boolean
}

export function Navigation({ overlay = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`${
        overlay
          ? "absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/20"
          : "bg-background border-b border-border sticky top-0 z-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/hotel-logo.png"
              alt="B Capital Hotel Logo"
              width={85}
              height={85}
              className="object-contain"
            />
            <div className={`text-2xl font-bold ${overlay ? "text-white" : "text-primary"}`}>B Capital Hotel</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  overlay
                    ? "text-white hover:text-primary-light transition-colors duration-200 font-medium"
                    : "text-foreground hover:text-primary transition-colors duration-200 font-medium"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/room">
              <Button className="bg-primary hover:bg-secondary text-primary-foreground">Book Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={overlay ? "text-white hover:bg-white/20" : "text-foreground"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 border-t ${
                overlay ? "bg-black/80 backdrop-blur-sm border-white/20" : "bg-card border-border"
              }`}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    overlay ? "text-white hover:text-primary-light" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/room" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
