import { FacebookIcon, Instagram, Twitter } from "lucide-react";
import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import { aparat } from "@/app/fonts/aparat";

const Footer = () => {
  return (
    <footer className="flex justify-center  bg-[#161616] text-neutral-50">
      <MaxWidthWrapper maxWidth="max-w-screen-xl" className="px-10">
        <div className="py-24 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b-2 border-b-neutral-800">
          <div className="h-full flex flex-col items-center sm:items-start">
            <Image
              src="/asset/logo-1.png"
              alt="logo"
              width={120}
              height={120}
            />
          </div>
          <section className="flex flex-col items-center sm:items-start">
            <h2 className={`${aparat.className} text-2xl my-2`}>
              لینک‌های مفید
            </h2>
            <nav aria-label="Usefull Links">
              <ul className="flex flex-col items-center sm:items-start">
                <li>
                  <Link href="#">خانه</Link>
                </li>
                <li>
                  <Link href="#">فروشگاه</Link>
                </li>
                <li>
                  <Link href="#">درباره ما</Link>
                </li>
                <li>
                  <Link href="#">تماس</Link>
                </li>
              </ul>
            </nav>
          </section>
          <section className="flex flex-col items-center sm:items-start">
            <h2 className={`${aparat.className} text-2xl my-2`}>حساب</h2>
            <nav aria-label="Account">
              <ul className="flex flex-col items-center sm:items-start">
                <li>
                  <Link href="#">ورود مشتری</Link>
                </li>
                <li>
                  <Link href="#">ورود فروشنده</Link>
                </li>
                <li>
                  <Link href="#">آدرس‌ها</Link>
                </li>
                <li>
                  <Link href="#">روش‌های تسویه</Link>
                </li>
              </ul>
            </nav>
          </section>
          <section className="flex flex-col items-center sm:items-start">
            <h2 className={`${aparat.className} text-2xl my-2`}>مجموعه ما</h2>
            <nav aria-label="Our collection">
              <ul className="flex flex-col items-center sm:items-start">
                <li>
                  <Link href="#">دوچرخه‌های کوهستانی</Link>
                </li>
                <li>
                  <Link href="#">دوچرخه‌های شهری</Link>
                </li>
                <li>
                  <Link href="#">دوچرخه‌های خاص</Link>
                </li>
                <li>
                  <Link href="#">دوچرخه‌های برقی</Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="flex items-center justify-between">
          <span>Copyright © 2024 Cycle Shop</span>
          <div className="py-12 flex items-center justify-between gap-x-5">
            <Instagram />
            <Twitter />
            <FacebookIcon />
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
