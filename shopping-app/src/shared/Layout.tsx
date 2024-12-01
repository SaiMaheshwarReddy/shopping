import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Chart, History, List, Logo, Cart } from "@/assets/images";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface INavItem {
  icon: string;
  text: string;
  path: string;
  activeItem?: string;
  handleActiveItem?: (p: string) => void;
}
const NavItem = ({
  icon,
  text,
  path,
  activeItem,
  handleActiveItem,
}: INavItem) => {
  const navigate = useNavigate();
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <div
            className="cursor-pointer relative flex justify-center h-11"
            onClick={() => {
              navigate(path);
              handleActiveItem && handleActiveItem(path);
            }}
          >
            <img width="26px" src={icon} />

            {activeItem === path && (
              <span className="absolute left-0 top-0 h-11 w-[6px] rounded-sm bg-primaryYellow"></span>
            )}
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
  const [activeItem, setActiveItem] = useState("/");

  const navList: INavItem[] = [
    {
      icon: List,
      text: "items",
      path: "/",
    },
    {
      icon: History,
      text: "history",
      path: "/shopping-history",
    },
    {
      icon: Chart,
      text: "statistics",
      path: "/statistics",
    },
  ];
  return (
    <div className="bg-base w-full h-screen flex justify-between gap-14 items-center">
      <div className="bg-white h-full min-w-23 flex flex-col justify-between items-center py-9 grow shrink basis-[7%]">
        <div>
          <img src={Logo} />
        </div>
        <div className="w-full flex flex-col justify-between items-stretch gap-12 text-4xl">
          {navList.map((item, i) => {
            return (
              <NavItem
                key={i}
                icon={item.icon}
                text={item.text}
                path={item.path}
                handleActiveItem={setActiveItem}
                activeItem={activeItem}
              />
            );
          })}
        </div>
        <div className="bg-primaryYellow p-3 rounded-full relative">
          <img src={Cart} width="20px" />
          <div className="w-5 flex justify-center items-center text-xs text-white h-5 absolute -top-1.5 -right-0.5 rounded-sm bg-primaryOrange">
            5
          </div>
        </div>
      </div>
      <div className="self-stretch grow mt-9 grow-[2] shrink basis-[67%] min-w-[480px]">
        <Outlet />
      </div>
      <div className="grow shrink basis-[26%] min-w-[250px]">cart</div>
    </div>
  );
};

export default Layout;
