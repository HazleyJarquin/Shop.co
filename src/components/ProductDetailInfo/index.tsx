import { IProducts } from "@/interfaces/products/IProducts";
import React from "react";
interface Props {
  product: IProducts;
}

export const ProductsDetailInfo = ({ product }: Props) => {
  return <h1>{product?.name}</h1>;
};
