export async function fetchProductById(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/products/${id}`, {
    next: { revalidate: 60, tags: ["productsbyid"] },
  });

  if (!res.ok) {
    throw new Error("Error fetching product");
  }

  return res.json();
}

export async function fetchAllProducts() {
  const res = await fetch(`${process.env.BASE_URL}/api/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}
