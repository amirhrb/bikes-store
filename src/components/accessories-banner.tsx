import { aparat } from "@/app/fonts/aparat";
import MaxWidthWrapper from "./max-width-wrapper";
import { db } from "@/lib/db";
import ItemCard from "@/components/item-card";

const AccessoriesBanner = () => {
  return (
    <div
      className={`${aparat.className} relative min-h-0 sm:min-h-[600px] md:min-h-dvh py-20 flex justify-center`}
    >
      <MaxWidthWrapper maxWidth="max-w-screen-xl" className="px-5">
        <h2 className="scroll-m-20 pb-10 text-center text-5xl font-semibold tracking-tight first:mt-0">
          لوازم جانبی
        </h2>
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-5 ">
          {db.accessories.map((item) => (
            <ItemCard item={item} key={item.slug} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AccessoriesBanner;
