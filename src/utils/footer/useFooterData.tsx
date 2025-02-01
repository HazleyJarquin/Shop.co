import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export const useFooterData = () => {
  const companyOptions = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Works", href: "/works" },
    { name: "Career", href: "/career" },
  ];
  const helpOptions = [
    { name: "Customer Support", href: "/customer-support" },
    { name: "Delivery Details", href: "/delivery-details" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];
  const faqOptions = [
    { name: "Account", href: "/account" },
    { name: "Manage Deliveries", href: "/manage-deliveries" },
    { name: "Orders", href: "/orders" },
    { name: "Payments", href: "/payments" },
  ];
  const resourcesOptions = [
    { name: "Free eBooks", href: "/free-ebooks" },
    { name: "Development Tutorial", href: "/development-tutorial" },
    { name: " How to - Blog", href: "/how-to" },
    { name: "Youtube Playlist", href: "/youtube-playlist" },
  ];

  const socialMedia = [
    { name: "Facebook", icon: <FacebookIcon size={15} />, href: "/facebook" },
    {
      name: "Instagram",
      icon: <InstagramIcon size={15} />,
      href: "/instagram",
    },
    { name: "Twitter", icon: <TwitterIcon size={15} />, href: "/twitter" },
    { name: "LinkedIn", icon: <LinkedinIcon size={15} />, href: "/linkedin" },
  ];
  return {
    companyOptions,
    helpOptions,
    faqOptions,
    resourcesOptions,
    socialMedia,
  };
};
