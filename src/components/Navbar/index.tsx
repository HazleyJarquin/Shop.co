import { linksNavigations } from "@/utils/navbar/linksNavigations";
import Link from "next/link";
import { CustomInput } from "../CustomInput";
import {
  CircleUserRoundIcon,
  MenuIcon,
  Search,
  ShoppingCartIcon,
} from "lucide-react";
import { CustomDrawer } from "../CustomDrawer";

export const Navbar = () => {
  return (
    <div className="w-full bg-white p-5 px-7 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <CustomDrawer
        className="bg-pastelPink"
        drawerContent={
          <div className="flex flex-col items-center justify-center gap-4">
            {linksNavigations.map((link) => {
              return (
                <Link href={link.path} key={link.id}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        }
        drawerTrigger={<MenuIcon className="flex md:hidden" />}
      />

      <Link href={"/"}>
        <h1 className="text-5xl uppercase cursor-pointer">Shop.co</h1>
      </Link>

      <div className="hidden md:flex space-x-4">
        {linksNavigations.map((link) => {
          return (
            <Link href={link.path} key={link.id}>
              {link.title}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:block w-[30%]">
        <CustomInput
          icon={Search}
          placeholder="Search for products"
          className="w-full"
        />
      </div>

      <div className="flex space-x-4">
        <Search className="block md:hidden" />
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
