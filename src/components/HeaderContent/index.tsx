import Image from "next/image";
import { Button } from "../ui/button";
import { Statistics } from "../Statistics";
import { productStatistics } from "@/utils/header/productStatistics";

export const HeaderContent = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-between px-20">
      <div className="w-1/2 h-full flex flex-col gap-6 justify-center">
        <h1 className="text-6xl font-bold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-lg text-gray-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button className="py-6 w-36 rounded-full">Shop now</Button>

        <div className="flex items-center gap-5">
          {productStatistics.map((product) => {
            return (
              <Statistics
                key={product.id}
                name={product.name}
                number={`${product.number.toLocaleString()}+`}
              />
            );
          })}
        </div>
      </div>
      <Image
        src="/images/Models.png"
        alt="Models"
        width={900}
        height={900}
        className="w-1/2 h-full object-contain"
        priority
      />
    </div>
  );
};
