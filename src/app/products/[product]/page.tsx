"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useCardItemBySlug, useCardItems } from "@/redux/redux-store";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ product: string }>();
  const product = useCardItemBySlug(params.product);
  const products = useCardItems();

  console.log(products);

  if (!product) {
    notFound();
  } else if (!product.slug) {
    return (
      <div className="w-ful p-8 flex items-center justify-center">
        <MaxWidthWrapper
          maxWidth="max-w-screen-lg"
          className="py-8 bg-slate-200 min-h-[460px] rounded-lg"
        >
          <div className="w-40 h-40 bg-slate-300 rounded-lg" />
        </MaxWidthWrapper>
      </div>
    );
  } else {
    return (
      <div className="w-ful p-8 flex items-center justify-center">
        <MaxWidthWrapper
          maxWidth="max-w-screen-lg"
          className="py-8 bg-slate-200 min-h-[460px] rounded-lg"
        >
          <Image
            src={product.image}
            alt={product.title}
            className="w-40 h-auto"
            width={100}
            height={100}
          />
        </MaxWidthWrapper>
      </div>
    );
  }
};

export default Page;
