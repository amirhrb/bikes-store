import { Disc } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { aparat } from "@/app/fonts/aparat";
import { yekan } from "@/app/fonts/YekanBakh/yekan";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { racingSans } from "@/app/fonts/racing-sans";

export type BannerTypes = {
  heading: string;
  title: string;
  detail: string;
  image: string;
  lists?: string[];
  button: string;
  align: "center" | "start" | "end";
  className?: string;
};

interface BannerComponent
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  banner: BannerTypes;
}

const Banner = (props: BannerComponent) => {
  const {
    heading,
    title,
    detail,
    image,
    lists,
    button,
    align = "start",
    className,
  } = props.banner;

  const alignClass =
    align === "center"
      ? "items-center"
      : align === "start"
      ? "items-start"
      : "items-end";
  return (
    <div
      className={`${className} relative w-full h-fit min-h-[480px] lg:min-h-[90dvh] flex justify-center items-center text-background bg-no-repeat bg-center bg-cover lg:bg-fixed`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <MaxWidthWrapper maxWidth="max-w-screen-xl" className="h-full px-10 my-8">
        <div className={`relative z-20 flex flex-col ${alignClass} gap-y-8`}>
          <h5 className={`${aparat.className} text-xl`}>{heading}</h5>
          <h2
            className={` text-5xl`}
            style={{
              fontFamily: `${aparat.style.fontFamily}, ${racingSans.style.fontFamily}`,
            }}
          >
            {title}
          </h2>
          <span>{detail}</span>
          {lists?.length ? (
            <ul className="max-w-fit grid grid-cols-2 gap-y-2">
              {lists.map((list) => (
                <li
                  key={crypto.randomUUID()}
                  className="flex items-center gap-2"
                >
                  <Disc className="text-primary size-3" /> <span>{list}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <Link
            href="/"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: `${yekan.className} w-fit text-xl rounded-none hover:!bg-primary-focused`,
            })}
          >
            {button}
          </Link>
        </div>
      </MaxWidthWrapper>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-banner-gradient" />
    </div>
  );
};

export default Banner;
