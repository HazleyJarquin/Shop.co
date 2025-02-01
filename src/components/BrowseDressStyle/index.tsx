import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Category {
  title: string;
  image: string;
  href: string;
}

interface Props {
  title?: string;
  categories?: Category[];
  className?: string;
}

export const BrowseDressStyle = ({
  title = "BROWSE BY DRESS STYLE",
  categories = defaultCategories,
  className,
}: Props) => {
  return (
    <section
      className={cn(
        "w-full px-5 md:px-20 py-8 bg-pastelPink rounded-lg h-[100vh]",
        className
      )}
    >
      <div className="container mx-auto w-full lg:w-[50%] h-full flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase">
          {title}
        </h2>

        <div className="grid grid-cols-5 grid-rows-6 gap-4 flex-1">
          <Card className="col-span-2 row-span-3 overflow-hidden">
            <CardContent className="p-0 h-full">
              <Link href={categories[0].href} className="relative block h-full">
                <Image
                  src={categories[0].image || "/placeholder.svg"}
                  alt={categories[0].title}
                  fill
                  sizes="900"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  {categories[0].title}
                </h3>
              </Link>
            </CardContent>
          </Card>

          <Card className="col-span-3 row-span-3 col-start-3 overflow-hidden">
            <CardContent className="p-0 h-full">
              <Link href={categories[1].href} className="relative block h-full">
                <Image
                  src={categories[1].image || "/placeholder.svg"}
                  alt={categories[1].title}
                  fill
                  sizes="900"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  {categories[1].title}
                </h3>
              </Link>
            </CardContent>
          </Card>

          <Card className="col-span-3 row-span-3 col-start-1 row-start-4 overflow-hidden">
            <CardContent className="p-0 h-full">
              <Link href={categories[2].href} className="relative block h-full">
                <Image
                  src={categories[2].image || "/placeholder.svg"}
                  alt={categories[2].title}
                  fill
                  sizes="900"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  {categories[2].title}
                </h3>
              </Link>
            </CardContent>
          </Card>

          <Card className=" col-span-2 row-span-3 col-start-4 row-start-4 overflow-hidden">
            <CardContent className="p-0 h-full">
              <Link href={categories[3].href} className="relative block h-full">
                <Image
                  src={categories[3].image || "/placeholder.svg"}
                  alt={categories[3].title}
                  fill
                  sizes="900"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  {categories[3].title}
                </h3>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const defaultCategories = [
  {
    title: "Casual",
    image: "/images/Model1.png",
    href: "/categories/casual",
  },
  {
    title: "Formal",
    image: "/images/Model2.png",
    href: "/categories/formal",
  },
  {
    title: "Party",
    image: "/images/Model3.png",
    href: "/categories/party",
  },
  {
    title: "Gym",
    image: "/images/Model4.png",
    href: "/categories/gym",
  },
];
