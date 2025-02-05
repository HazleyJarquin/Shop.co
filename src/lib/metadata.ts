import { Metadata } from "next";

export async function generateMetadata(params: {
  id: string;
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.id}`,
    { cache: "no-store" }
  );

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
