import { IProducts } from "@/interfaces/products/IProducts";
import { supabase } from "@/lib/supabaseClient";
import { useQuery } from "react-query";

const fetchProducts = async (): Promise<IProducts[]> => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error(error.message);
  return data;
};

export const useGetAllProducts = () => {
  return useQuery("products", fetchProducts, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
