import React from "react";
import { FooterColumn } from "./components/FooterColumn";

import Link from "next/link";
import { Divider } from "../Divider";
import { useFooterData } from "@/utils/footer/useFooterData";

export const Footer = () => {
  const {
    companyOptions,
    faqOptions,
    helpOptions,
    resourcesOptions,
    socialMedia,
  } = useFooterData();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col gap-4 bg-white px-10 py-5">
      <div className="w-full h-full flex flex-col gap-2 xl:flex-row justify-around items-center">
        <div className="w-full xl:w-[20%] flex flex-col items-center gap-2">
          <h1 className="text-5xl uppercase font-bold">Shop.co</h1>
          <p className="text-center text-sm text-gray-500">
            We have clothes that suits your style and which you are proud to
            wear. From women to men.
          </p>

          <div className="w-full flex justify-center gap-2">
            {socialMedia.map((social) => (
              <Link
                className="flex items-center p-2 gap-2 rounded-full text-black border-2"
                key={social.name}
                href={social.href}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 xl:hidden">
          <FooterColumn title="Company" options={companyOptions} />
          <FooterColumn title="Help" options={helpOptions} />
          <FooterColumn title="FAQ" options={faqOptions} />
          <FooterColumn title="Resources" options={resourcesOptions} />
        </div>

        <div className="hidden w-[80%] xl:flex justify-around">
          <FooterColumn title="Company" options={companyOptions} />
          <FooterColumn title="Help" options={helpOptions} />
          <FooterColumn title="FAQ" options={faqOptions} />
          <FooterColumn title="Resources" options={resourcesOptions} />
        </div>
      </div>
      <Divider />
      <p className="w-full text-gray-500 text-sm px-10">
        © {currentYear} Shop.co. All rights reserved.
      </p>
    </footer>
  );
};
