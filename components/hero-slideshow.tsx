"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    image: "/images/hotel-room-1.jpg",
    title: "Welcome to B Capital Hotel",
    subtitle: "Experience luxury, comfort, and exceptional service in the heart of the city",
    animation: "zoom-in-pan-right",
  },
  {
    image: "/images/Prying room.jpg",
    title: "Islamic Prayer Room ",
    subtitle: "Quite Islamic Prayer Room for every traveler",
    animation: "zoom-out-pan-left",
  },
  {
    image: "/images/restaurant-2.jpg",
    title: "Exquisite Dining Experience",
    subtitle: "Savor culinary excellence in our elegant restaurant",
    animation: "zoom-in-rotate",
  },
  {
    image: "/images/event-hall.jpg",
    title: "Perfect Venue for Events",
    subtitle: "Host your special occasions in our sophisticated event spaces",
    animation: "pan-up-zoom-in",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // Increased duration to 8 seconds for smoother video-like experience

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative h-[70vh] w-full overflow-hidden will-change-auto"
      style={{
        transformStyle: "flat",
        isolation: "isolate",
        contain: "layout style paint",
      }}
    >
      <style jsx>{`
        @keyframes zoom-in-pan-right {
          0% { transform: scale(1) translateX(0); }
          100% { transform: scale(1.1) translateX(-2%); }
        }
        
        @keyframes zoom-out-pan-left {
          0% { transform: scale(1.1) translateX(-2%); }
          100% { transform: scale(1) translateX(2%); }
        }
        
        @keyframes zoom-in-rotate {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.08) rotate(1deg); }
        }
        
        @keyframes pan-up-zoom-in {
          0% { transform: scale(1) translateY(0); }
          100% { transform: scale(1.05) translateY(-3%); }
        }
        
        .zoom-in-pan-right {
          animation: zoom-in-pan-right 8s ease-in-out infinite;
        }
        
        .zoom-out-pan-left {
          animation: zoom-out-pan-left 8s ease-in-out infinite;
        }
        
        .zoom-in-rotate {
          animation: zoom-in-rotate 8s ease-in-out infinite;
        }
        
        .pan-up-zoom-in {
          animation: pan-up-zoom-in 8s ease-in-out infinite;
        }
      `}</style>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            contain: "layout style paint",
            isolation: "isolate",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              contain: "layout style paint",
              willChange: index === currentSlide ? "transform" : "auto",
            }}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className={`object-cover scale-110 ${index === currentSlide ? slide.animation : ""}`}
              priority={index === 0}
              style={{
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
                perspective: "1000px",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div
        className="relative z-10 h-full flex items-center justify-center"
        style={{
          transform: "translateZ(0)",
          contain: "layout style",
          isolation: "isolate",
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">{slides[currentSlide].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground text-lg px-8 py-3">
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/room">Explore Rooms</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{
          transform: "translate(-50%, 0) translateZ(0)",
          contain: "layout style",
          isolation: "isolate",
        }}
      >
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
