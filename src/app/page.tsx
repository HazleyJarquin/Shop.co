import { BrandsCarousel } from "@/components/BrandsCarousel";
import { BrowseDressStyle } from "@/components/BrowseDressStyle";
import { Divider } from "@/components/Divider";
import { HappyCustomers } from "@/components/HappyCustomer";
import { HeaderContent } from "@/components/HeaderContent";
import { NewArrivalsProducts } from "@/components/NewArrivalsProducts";
import { ProductsCarousel } from "@/components/ProductsCarousel";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  href: string;
}

const TOPSELLING: Product[] = [
  {
    id: "1",
    name: "Vertical Striped Shirt",
    image: "/clothe/VerticalStripedShirt.png",
    price: 212,
    originalPrice: 232,
    href: "/product/1",
    rating: 5.0,
  },
  {
    id: "2",
    name: "Courage Graphic T-shirt",
    image: "/clothe/CourageGraphicTShirt.png",
    price: 145,
    href: "/product/2",
    rating: 4.0,
  },
  {
    id: "3",
    name: "Loose Fit Bermuda Shorts",
    image: "/clothe/LooseFitBermudaShorts.png",
    price: 80,
    href: "/product/3",
    rating: 3.0,
  },
  {
    id: "4",
    name: "Faded Skinny Jeans",
    image: "/clothe/FadedSkinnyJeans.png",
    price: 210,
    href: "/product/4",
    rating: 4.5,
  },
];

export const metadata = {
  title: "Shop.co - Tienda de Moda y Estilo",
  description:
    "Compra las mejores prendas y accesorios en Shop.co. Descubre ropa de alta calidad de las mejores marcas.",
  keywords: "ropa, moda, tienda online, shop.co, ecommerce, tendencias de moda",
  robots: "index, follow",
  openGraph: {
    title: "Shop.co - Tienda de Moda y Estilo",
    description:
      "Encuentra las últimas tendencias de moda en Shop.co. Compra ropa y accesorios para todos los estilos.",
    url: "https://shop.co",
    images: [
      {
        url: "https://shop.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imagen destacada de Shop.co",
      },
    ],
  },
};

const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

export default async function Home() {
  const productsData = await getProducts();
  return (
    <div className="w-full h-[100%] flex flex-col">
      <HeaderContent />
      <BrandsCarousel
        brands={[
          "/images/Versace.png",
          "/images/Zara.png",
          "/images/Gucci.png",
          "/images/Prada.png",
          "/images/CalvinKlein.png",
        ]}
      />
      <NewArrivalsProducts productsData={productsData} />
      <Divider />
      <ProductsCarousel title="Top Selling" products={TOPSELLING} />
      <BrowseDressStyle />
      <HappyCustomers />
    </div>
  );
}
