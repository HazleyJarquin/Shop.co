import { linksNavigations } from "@/utils/navbar/linksNavigations";
import Link from "next/link";
import { CustomInput } from "../CustomInput";
import { CircleUserRoundIcon, Search, ShoppingCartIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full bg-white p-5 px-7 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <h1 className="text-5xl uppercase">Shop.co</h1>

      <div className="flex space-x-4">
        {linksNavigations.map((link) => {
          return (
            <Link href={link.path} key={link.id}>
              {link.title}
            </Link>
          );
        })}
      </div>

      <CustomInput
        icon={Search}
        placeholder="Search for products"
        className="w-[577px]"
      />

      <div className="flex space-x-4">
        <Link href={"/cart"}>
          <ShoppingCartIcon />
        </Link>

        <Link href={"/profile"}>
          <CircleUserRoundIcon />
        </Link>
      </div>
    </div>
  );
};
