"use client";

import Breadcrumbs from "@/components/breadcrumbs";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useItemBySlug, useCardItemBySlug } from "@/redux/redux-store";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

const Product = () => {
  const params = useParams<{ product: string }>();
  const product = useItemBySlug(params.product);
  const cardProduct = useCardItemBySlug(params.product);

  if (!product?.findedItem) {
    notFound();
  } else {
    return (
      <div className="w-ful py-8 bg-slate-100 flex items-center justify-center">
        <MaxWidthWrapper
          maxWidth="max-w-screen-xl"
          className="p-5 sm:p-8 md:p-16 lg:p-20 flex flex-col md:flex-row bg-background rounded-lg"
        >
          <Image
            src={product.findedItem.image}
            alt={product.findedItem.title}
            className="w-full md:w-1/2 aspect-square h-auto"
            width={512}
            height={512}
          />
          <Breadcrumbs
            link={`products/${product.productType}/${product.findedItem.slug}`}
          />
        </MaxWidthWrapper>
      </div>
    );
  }
};

export default Product;
