import { aparat } from "@/app/fonts/aparat";
import MaxWidthWrapper from "./max-width-wrapper";
import { CirclePlay } from "lucide-react";

const JoinProgramBanner = () => {
  return (
    <div className="py-24 flex flex-col items-center bg-[#f5f5f5]">
      <MaxWidthWrapper
        maxWidth="max-w-screen-lg"
        className="px-8 flex flex-col items-center gap-8"
      >
        <h2 className={`${aparat.className} text-5xl`}>عضو برنامه #اکو شوید</h2>

        <div
          className="relative w-full min-h-[540px] flex flex-col items-center text-background bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(/asset/join-programme.jpg)` }}
        >
          <div className="absolute z-20 bottom-0 right-0 p-4 flex flex-col items-start gap-4">
            <CirclePlay className="size-16" absoluteStrokeWidth />
            <h4 className={`${aparat.className} text-2xl`}>
              تماشای ویدیو کامل
            </h4>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-banner-gradient" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default JoinProgramBanner;
