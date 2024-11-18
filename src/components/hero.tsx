import { aparat } from "@/app/fonts/aparat";
import { racingSans } from "@/app/fonts/racing-sans";
import { Disc } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { yekan } from "@/app/fonts/YekanBakh/yekan";
import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";

const Hero = () => {
  return (
    <div
      className={`${aparat.className} relative min-h-0 sm:min-h-[580px] md:min-h-dvh pt-20 flex justify-center text-background bg-no-repeat bg-center bg-cover`}
      style={{ backgroundImage: `url(/asset/bike-hero.jpg)` }}
    >
      <MaxWidthWrapper maxWidth="max-w-screen-xl">
        <div className="relative w-full px-5 py-20 z-20 flex flex-col gap-8">
          <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            محصول جدید
          </h4>
          <h1
            className={`${racingSans.className} scroll-m-20 md:w-2/5 lg:w-1/3 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight`}
          >
            Kryo X26 MTB
          </h1>
          <div className="flex flex-col gap-2">
            <h5 className="text-xl">ویژگی‌ها:</h5>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-5">
                <Disc /> <span>فریم ۱۸&rdquo; سبک</span>
              </li>
              <li className="flex gap-5">
                <Disc /> <span>دوشاخه فنری فولادی</span>
              </li>
              <li className="flex gap-5">
                <Disc /> <span>فریم سخت فولادی</span>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: `${yekan.className} w-fit text-xl rounded-none hover:!bg-primary-focused`,
            })}
          >
            خرید
          </Link>
        </div>
      </MaxWidthWrapper>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-hero-gradient" />
    </div>
  );
};

export default Hero;
