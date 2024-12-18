"use client";

import Image from "next/image";
import Rating from "./rating";
import { racingSans } from "@/app/fonts/racing-sans";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { ItemTypes } from "@/lib/db";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  addCardItem,
  decreaseItemCount,
  increaseItemCount,
  sizesArray,
} from "@/redux/redux-slices";
import { useToast } from "@/hooks/use-toast";
import { useCardItemBySlug } from "@/redux/redux-store";

type SizeType = {
  size: "L" | "M" | "XL" | "nosize";
  price: number | null;
};

const ItemCard = ({ item }: { item: ItemTypes }) => {
  const dispatch = useDispatch();
  const cardItem = useCardItemBySlug(item.slug);

  const { toast } = useToast();

  const isNosizeItem = item.sizes.nosize.price ? true : false;

  const [activeType, setActiveType] = useState<SizeType>({
    size: "nosize",
    price: isNosizeItem ? item.sizes.nosize.price : null,
  });

  const buyItem = () => {
    if (!activeType.price) {
      toast({
        variant: "destructive",
        title: "یه مشکلی پیش اومده",
        description: "اول سایز رو انتخاب کن!",
        className: "w-fit p-4 px-8 left-[-50%] translate-x-[50%]",
      });
    } else {
      dispatch(
        addCardItem({
          slug: item.slug,
          category: item.category.en,
          image: item.image,
          title: item.title,
          price: activeType.price || 0,
          size: activeType.size,
        })
      );
    }
  };
  const increamentItem = () => {
    if (cardItem) {
      dispatch(
        increaseItemCount({
          slug: cardItem.slug,
          size: activeType.size,
          price: activeType.price || 0,
        })
      );
    }
  };
  const decreamentItem = () => {
    if (cardItem) {
      dispatch(
        decreaseItemCount({ slug: cardItem.slug, size: activeType.size })
      );
    }
  };
  const sortedPrices = [...Object.values(item.sizes)]
    .map((size) => size.price)
    .filter((price) => price !== null)
    .sort();

  const minPrice = sortedPrices[0];
  const maxPrice = sortedPrices[sortedPrices.length - 1];
  return (
    <div className="flex flex-col items-start justify-between gap-2">
      <div className="group relative w-full cursor-pointer">
        <Link href={`/products/${item.slug}`}>
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-auto"
            width={100}
            height={100}
          />
        </Link>
        {cardItem?.sizes[activeType.size].count &&
        cardItem?.sizes[activeType.size].count > 0 ? (
          <div className="absolute right-4 top-4 flex gap-2">
            <button onClick={increamentItem}>
              <Plus className="opacity-0 group-hover:opacity-100 size-8 p-2 bg-neutral-200 hover:bg-neutral-100 text-neutral-800 rounded-full" />
            </button>
            <button onClick={decreamentItem}>
              <Minus className="opacity-0 group-hover:opacity-100 size-8 p-2 bg-neutral-200 hover:bg-neutral-100 text-neutral-800 rounded-full" />
            </button>
          </div>
        ) : (
          <button onClick={buyItem}>
            <ShoppingCart className="opacity-0 group-hover:opacity-100 absolute right-4 top-4 size-8 p-2 bg-neutral-200 hover:bg-neutral-100 text-neutral-800 rounded-full" />
          </button>
        )}
      </div>
      <span className="text-muted text-sm">{item.category.fa}</span>
      <h2
        className={`${racingSans.className} scroll-m-20 pb-2 text-base font-semibold tracking-tight first:mt-0`}
      >
        <Link href={`/products/${item.slug}`}>{item.title}</Link>
      </h2>
      <Rating rate={item.rating} />
      {item.sizes.nosize.price ? (
        <span>
          ریال
          {item.sizes.nosize.price.toLocaleString("en-US", {
            useGrouping: true,
          })}
        </span>
      ) : activeType.price ? (
        <span>
          ریال
          {activeType.price.toLocaleString("en-US", {
            useGrouping: true,
          })}
        </span>
      ) : (
        <span>
          ریال
          {minPrice.toLocaleString("en-US", {
            useGrouping: true,
          })}{" "}
          -{" "}
          {maxPrice.toLocaleString("en-US", {
            useGrouping: true,
          })}{" "}
        </span>
      )}
      <div className="flex gap-2">
        {!isNosizeItem &&
          sizesArray.map((size) => (
            <Button
              key={size}
              onClick={() =>
                setActiveType({
                  size,
                  price: item.sizes[size].price,
                })
              }
              variant="outline"
              className={`
                hover:border-neutral-500
                ${
                  activeType.size === size
                    ? "!border-neutral-800"
                    : "border-input"
                }
              min-w-6 min-h-6 h-auto px-2 py-1 text-xs text-foreground hover:text-foreground hover:bg-background rounded-sm`}
            >
              {size}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default ItemCard;
