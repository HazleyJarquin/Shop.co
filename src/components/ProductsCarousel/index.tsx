import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProductCard } from "../ProductCard";
import { NotFoundMessage } from "../NotFoundMessage";

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
  notFoundMessage: string;
}

export const ProductsCarousel = ({
  title = "NEW ARRIVALS",
  products,
  className,
  notFoundMessage,
}: Props) => {
  return (
    <section
      className={cn(
        `w-full h-auto md:${
          !products.length
            ? "h-full flex justify-center items-center"
            : "h-[100vh]"
        } px-20 py-8`,
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 uppercase">
          {title}
        </h2>

        {!products.length ? (
          <NotFoundMessage message={notFoundMessage} />
        ) : (
          <ProductCard products={products} />
        )}

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
