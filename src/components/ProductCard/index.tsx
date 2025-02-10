import React from "react";
import { StarRating } from "../StarRating";
import Image from "next/image";

import Link from "next/link";

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
  products: Product[];
}

export const ProductCard = ({ products }: Props) => {
  return (
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
  );
};
