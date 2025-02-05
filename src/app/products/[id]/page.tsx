import { ProductsDetailInfo } from "@/components/ProductDetailInfo";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_ENV === "production"
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const res = await fetch(`${BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Producto no encontrado",
      description: "Este producto no existe o fue eliminado.",
    };
  }

  const data = await res.json();

  return {
    title: data.name,
    description: data.description || "Detalles del producto",
  };
}

// Generación de páginas estáticas
export async function generateStaticParams() {
  const res = await fetch(`${BASE_URL}/api/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return [];
  }

  const products = await res.json();

  return products.map((product: { id: string }) => ({
    id: product.id,
  }));
}

export const dynamicParams = true;

const fetchProductById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/api/products/${id}`, {
    next: { revalidate: 60, tags: ["productsbyid"] },
  });

  if (!res.ok) {
    throw new Error("Error fetching product");
  }

  return res.json();
};

export default async function ProductsDetailPage({ params }: Props) {
  const id = (await params).id;
  const product = await fetchProductById(id);

  return (
    <div className="w-full h-auto xl:h-[100vh] px-20 flex justify-center items-center">
      <ProductsDetailInfo product={product} />
    </div>
  );
}
