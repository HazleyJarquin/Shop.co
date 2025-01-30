import Image from "next/image";
import { Button } from "../ui/button";
import { Statistics } from "../Statistics";
import { productStatistics } from "@/utils/header/productStatistics";

export const HeaderContent = () => {
  return (
    <div className="flex flex-col w-full md:h-[100vh] px-10 md:flex-row items-center justify-between md:px-20">
      <div className="w-full mt-10 md:w-1/2 md:mt-0 h-full flex flex-col gap-6 justify-center items-center">
        <h1 className="text-5xl text-center md:text-6xl font-bold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-center ml-2 md:ml-0 md:text-base text-lg text-gray-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button className="py-6 w-full md:w-36 rounded-full">Shop now</Button>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productStatistics.map((product, index) => (
            <div
              key={product.id}
              className={
                index === 2
                  ? "col-span-2 flex justify-center lg:col-span-1"
                  : ""
              }
            >
              <Statistics
                isFirst={index === 0}
                name={product.name}
                number={`${product.number.toLocaleString()}+`}
              />
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/Models.png"
        alt="Models"
        width={900}
        height={900}
        className="w-full md:w-1/2 h-full object-contain"
        priority
      />
    </div>
  );
};
