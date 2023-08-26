"use client";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { navigationMenuTriggerStyle } from "./../ui/navigation-menu";
import { useEffect } from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./../ui/navigation-menu";
import Link from "next/link";
import Header from "../Header";

const Navbar = () => {
  return (
    <nav className="flex container mx-auto justify-between items-center h-20 px-12 z-10 sticky top-0 bg-white">
      <Link href={'/'}><Image src={"/dinoLogo.png"} alt="website logo" width={150} height={150} /></Link>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-5">
            <Link href={'/women'}><NavigationMenuTrigger>Female</NavigationMenuTrigger></Link>
            <Link href={'/men'}><NavigationMenuTrigger>Males</NavigationMenuTrigger></Link>
            <Link href={'/kids'}><NavigationMenuTrigger>Kids</NavigationMenuTrigger></Link>
              <Link href={'/allproducts'}><NavigationMenuTrigger>All Products</NavigationMenuTrigger></Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex bborder-dotted border-2 border-grey-600 space-x-2">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <button>
      <div className="p-2 mx-20 rounded-full bg-gray-300">
      <Link href={'/cart'}><ShoppingCart className="relative" /></Link>
        {/* <span className="absolute mx-16 top-2 right-24 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          5
        </span> */}
      </div>
      </button>
      <Header/>
    </nav>
  );
};
export default Navbar;