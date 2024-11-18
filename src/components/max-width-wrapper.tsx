import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MaxWidthWrapper
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?:
    | "max-w-xs"
    | "max-w-sm"
    | "max-w-md"
    | "max-w-lg"
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full"
    | "max-w-max"
    | "max-w-min"
    | "max-w-fit"
    | "max-w-prose"
    | "max-w-screen-sm"
    | "max-w-screen-md"
    | "max-w-screen-lg"
    | "max-w-screen-xl"
    | "max-w-screen-2xl";
  className?: string;
}

const MaxWidthWrapper = ({
  children,
  maxWidth = "max-w-xl",
  className,
  ...props
}: MaxWidthWrapper) => {
  return (
    <div className={`${maxWidth} ${className} w-full`} {...props}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
