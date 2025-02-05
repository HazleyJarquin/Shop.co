import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { StarRating } from "../StarRating";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  rating: number;
  href: string;
}

interface Props {
  title?: string;
  products: Product[];
  className?: string;
}

export const ProductsCarousel = ({
  title = "NEW ARRIVALS",
  products,
  className,
}: Props) => {
  return (
    <section className={cn("w-full h-auto md:h-[100vh] px-20 py-8", className)}>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 uppercase">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const discountedPrice = product.discount
              ? product.price - (product.price * product.discount) / 100
              : product.price;

            return (
              <Link key={product.id} href={product.href} className="group">
                <div className="bg-pastelPink rounded-lg overflow-hidden mb-3 aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="900"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-medium text-sm mb-2">{product.name}</h3>

                <div className="mb-2">
                  <StarRating rating={product.rating} />
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold">
                    ${discountedPrice.toFixed(2)}{" "}
                  </span>
                  {product.discount && (
                    <>
                      <span className="text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-vividRed text-sm bg-pastelPink ">
                        -{product.discount}%{" "}
                      </span>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="text-sm font-medium border-2 rounded-full p-2 px-5"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};
