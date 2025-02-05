import { IProducts } from "@/interfaces/products/IProducts";
import { ProductsCarousel } from "../ProductsCarousel";

interface Props {
  productsData: IProducts[];
}

export const NewArrivalsProducts = ({ productsData }: Props) => {
  const newProducts = productsData?.filter(
    (product) =>
      new Date(product.created_at) >
      new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7)
  );

  const products = newProducts?.map((p) => {
    return {
      id: p.id ?? "",
      name: p.name ?? "",
      image: p.image_url ?? "",
      price: p.price ?? "",
      discount: p.discount ?? "",
      rating: 4.3,
      href: `/products/${p.id}`,
    };
  });
  return (
    <div className="w-full h-auto md:h-[100vh]">
      <ProductsCarousel
        title="New Arrivals"
        products={products?.slice(0, 4) ?? []}
      />
    </div>
  );
};
