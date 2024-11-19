import React from "react";
import { Outlet } from "react-router-dom";
import { Chart, History, List, Logo, Cart } from "../assets/images";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface INavItem {
  icon: string;
  text: string;
}
const NavItem = ({ icon, text }: INavItem) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <div className="cursor-pointer">
            <img width="30px" height="30px" src={icon} />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
const Layout = () => {
  const navList: INavItem[] = [
    {
      icon: List,
      text: "items",
    },
    {
      icon: History,
      text: "history",
    },
    {
      icon: Chart,
      text: "statistics",
    },
  ];
  return (
    <div className="bg-base w-full h-screen flex justify-between items-center">
      <div className="bg-white h-full w-23 flex flex-col justify-between items-center py-9">
        <div>
          <img src={Logo} />
        </div>
        <div className="flex flex-col justify-between items-center gap-16 text-4xl">
          {navList.map((item, i) => {
            return <NavItem key={i} icon={item.icon} text={item.text} />;
          })}
        </div>
        <div className="bg-orange-400 p-3 rounded-full">
          <img src={Cart} width="20px" />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>cart</div>
    </div>
  );
};

export default Layout;
