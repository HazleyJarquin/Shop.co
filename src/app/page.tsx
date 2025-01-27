import { BrandsCarousel } from "@/components/BrandsCarousel";
import { HeaderContent } from "@/components/HeaderContent";

export default function Home() {
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
    </div>
  );
}
