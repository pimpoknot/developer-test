import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"

export function CarouselComponent() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
        
      }}
      className="w-full mx-auto mt-3"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4 ">
            <div className="p-2">
              <Card className="bg-zinc-800 border-0 cursor-pointer">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold"></span>
                </CardContent>
               
              </Card>
              <span className="text-xl tracking-wider font-mono block text-white mt-3"> #0000</span>
              <h2 className="text-xl font-normal text-gray-400 font-mono">collection name <span className="text-purple-400">◎ 0.1</span></h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
  )
}
