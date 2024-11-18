"use client";

import Image from "next/image";
import Link from "next/link";
import { AlignJustify, ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import MaxWidthWrapper from "./max-width-wrapper";
import { useCardItems } from "@/redux/redux-store";
import { useSidebar } from "@/components/ui/sidebar";

export const navLinks = [
  { title: "خانه", src: "/" },
  { title: "دوچرخه‌ها", src: "/bycicles" },
  { title: "لوازم", src: "/accessories" },
  { title: "درباره ما", src: "/about-us" },
  { title: "تماس", src: "/contact" },
];

const Navbar = () => {
  const items = useCardItems();

  const { setOpen } = useSidebar();

  return (
    <header className="w-full h-20 absolute left-0 top-0 z-30 flex items-center justify-center text-secondary">
      <MaxWidthWrapper maxWidth="max-w-screen-xl">
        <div className="w-full p-5 flex items-center justify-between">
          <Image src="/asset/logo-1.png" alt="logo" height={80} width={80} />
          <nav className="hidden sm:block">
            <ul className="flex items-center justify-between">
              {navLinks.map((link, key) => (
                <li key={key} className="p-2 text-lg font-semibold">
                  <Link href={link.src}>{link.title.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden sm:flex relative w-20  items-center justify-center">
            <button onClick={() => setOpen(true)}>
              <ShoppingCart />
              <Badge
                variant="secondary"
                className="absolute right-0 -top-2 cursor-pointer"
              >
                {items.length}
              </Badge>
            </button>
          </div>
          <AlignJustify className="sm:hidden size-10 p-2 bg-background text-primary rounded-sm" />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
