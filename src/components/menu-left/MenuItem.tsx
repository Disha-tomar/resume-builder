import menuLeftData, { MenuLeftData } from "@/data/menuLeft";
import { ReactNode } from "react";

type MenuItemProps = {
  children: ReactNode;
  title: string;
};

export default function MenuItem(props: MenuItemProps) {
  return <div>{props.children}</div>;
}
