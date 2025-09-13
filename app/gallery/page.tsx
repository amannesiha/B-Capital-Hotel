"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  // Rooms
  {
    src: "/images/hotel-room-1.jpg",
    alt: "Deluxe Room",
    category: "Rooms",
  },
  {
    src: "/images/hotel-room-2.jpg",
    alt: "Executive Suite",
    category: "Rooms",
  },
  // Restaurant
  {
    src: "/images/restaurant-1.jpg",
    alt: "Restaurant Dining Area",
    category: "Restaurant",
  },
  {
    src: "/images/restaurant-2.jpg",
    alt: "Restaurant Interior",
    category: "Restaurant",
  },
  {
    src: "/images/food-platter.jpg",
    alt: "Signature Dish",
    category: "Restaurant",
  },
  // Meeting Hall
  {
    src: "/images/event-hall.jpg",
    alt: "Event Hall",
    category: "Meeting Hall",
  },
  // Swimming Pool
  {
    src: "/luxury-hotel-swimming-pool-area.jpg",
    alt: "Swimming Pool",
    category: "Swimming Pool",
  },
  {
    src: "/hotel-pool-deck-with-lounge-chairs.jpg",
    alt: "Pool Deck",
    category: "Swimming Pool",
  },
  // Outdoor
  {
    src: "/images/hotel-exterior.jpg",
    alt: "Hotel Exterior",
    category: "Outdoor",
  },
  {
    src: "/images/hotel-exterior-2.jpg",
    alt: "Hotel Front View",
    category: "Outdoor",
  },
  {
    src: "/hotel-garden-and-outdoor-seating-area.jpg",
    alt: "Garden Area",
    category: "Outdoor",
  },
]

const categories = ["Swimming Pool", "Rooms", "Restaurant", "Meeting Hall", "Outdoor"]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Rooms")

  const filteredImages = galleryImages.filter((image) => image.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0">
          <Image src="/images/hotel-room-1.jpg" alt="Hotel Gallery Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">B Capital Hotel Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Explore our beautiful hotel through these carefully curated images showcasing our rooms, dining areas, and
            facilities
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">{activeCategory}</h2>
            <p className="text-muted-foreground">
              {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"} in this category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
