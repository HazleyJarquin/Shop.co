import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { VisuallyHidden } from "../VisuallyHidden";

interface Props {
  drawerTrigger: React.ReactNode;
  drawerContent: React.ReactNode;
  title?: string;
  hideTitle?: boolean;
  className?: string;
}

export const CustomDrawer = ({
  drawerContent,
  drawerTrigger,
  title = "Menu",
  hideTitle = false,
  className,
}: Props) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{drawerTrigger}</DrawerTrigger>
      <DrawerContent aria-describedby={undefined} className={className}>
        <DrawerHeader>
          <DrawerTitle>
            {hideTitle ? <VisuallyHidden>{title}</VisuallyHidden> : title}
          </DrawerTitle>
        </DrawerHeader>
        {drawerContent}
      </DrawerContent>
    </Drawer>
  );
};
