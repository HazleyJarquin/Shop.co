import React from "react";
import { OpinionCard } from "../OpinionCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Opinions = {
  id: number;
  name: string;
  opinion: string;
  rating: number;
};

const opinions: Opinions[] = [
  {
    id: 1,
    name: "Sarah M",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor consectetur dignissimos officiis esse voluptatem, ea fuga aspernatur et voluptatum necessitatibus repudiandae similique reprehenderit totam corrupti harum eos perferendis nemo!",
    rating: 5,
  },
  {
    id: 2,
    name: "John D",
    opinion:
      "The best app I've ever used. It's so easy to use and the support is amazing. I would recommend it to anyone.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael R",
    opinion:
      "Great experience overall. The UI is clean, and the app runs smoothly. Could use some minor improvements, but still fantastic.",
    rating: 4,
  },
  {
    id: 4,
    name: "Jessica T",
    opinion:
      "Good app, but I experienced a few bugs while using it. Customer support was helpful, though!",
    rating: 3,
  },
  {
    id: 5,
    name: "Daniel K",
    opinion:
      "Absolutely love it! The features are well-thought-out, and it saves me so much time. Highly recommended.",
    rating: 5,
  },
  {
    id: 6,
    name: "Emily C",
    opinion:
      "It's a decent app, but I found the navigation a bit confusing at first. Once you get used to it, it's fine.",
    rating: 4,
  },
  {
    id: 7,
    name: "Robert W",
    opinion:
      "I had high expectations, and this app delivered. Smooth experience, and the design is just beautiful.",
    rating: 5,
  },
  {
    id: 8,
    name: "Laura P",
    opinion:
      "It's a good app, but I think it lacks some important features. Hopefully, they will add them in future updates.",
    rating: 3,
  },
  {
    id: 9,
    name: "Steven H",
    opinion:
      "Amazing! Super intuitive and well-designed. Definitely worth downloading!",
    rating: 5,
  },
  {
    id: 10,
    name: "Sophia L",
    opinion:
      "I had some trouble signing up, but once I got in, everything worked perfectly. Solid app overall.",
    rating: 4,
  },
];

export const HappyCustomers = () => {
  return (
    <div className="p-20 py-28 w-full h-full">
      <h1 className="text-4xl font-bold text-center mb-10 uppercase">
        Our Happy Customers
      </h1>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent>
          {opinions.map((o) => (
            <CarouselItem
              key={o.id}
              className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <OpinionCard
                key={o.id}
                name={o.name}
                opinion={o.opinion}
                rating={o.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
