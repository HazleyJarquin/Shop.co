"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Props {
  brands: string[];
}

export const BrandsCarousel = ({ brands }: Props) => {
  return (
    <div className="w-full bg-black py-8">
      <Carousel
        className="w-full max-w-6xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {brands.map((brand, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/3">
              <div className="flex items-center justify-center">
                <Image
                  src={brand}
                  alt="Brand logo"
                  width={200}
                  height={80}
                  priority
                  className="h-4 md:h-8 object-contain brightness-0 invert"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
