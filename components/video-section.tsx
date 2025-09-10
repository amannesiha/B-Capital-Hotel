"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    const video = document.getElementById("hotel-video") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
        setIsPlaying(false)
      } else {
        video.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Experience B Capital Hotel</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Take a virtual tour of our luxurious facilities and amenities
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
            <video
              id="hotel-video"
              className="w-full h-full object-cover"
              poster="/images/hotel-exterior.jpg"
              onEnded={handleVideoEnd}
              controls={isPlaying}
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button
                  onClick={handlePlayClick}
                  size="lg"
                  className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-6 h-auto"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
