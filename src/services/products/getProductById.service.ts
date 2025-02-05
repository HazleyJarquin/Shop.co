import axios from "axios";
import { IProducts } from "@/interfaces/products/IProducts";
import { useQuery } from "react-query";

const fetchProductById = async (id: string) => {
  const { data } = await axios.get<IProducts>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
  );
  return data;
};

export const useGetProductById = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};
