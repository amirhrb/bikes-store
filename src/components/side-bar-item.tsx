"use client";

import Image from "next/image";
import { racingSans } from "@/app/fonts/racing-sans";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { CardItemType, deleteCardItem, sizesArray } from "@/redux/redux-slices";
import { useCardItemBySlug } from "@/redux/redux-store";
import { Badge } from "./ui/badge";

const SideBarItem = ({ item }: { item: CardItemType }) => {
  const dispatch = useDispatch();
  const itemBySlug = useCardItemBySlug(item.slug);

  const deleteItem = () => {
    if (itemBySlug) {
      dispatch(deleteCardItem({ slug: itemBySlug.slug }));
    }
  };
  return (
    <div className="w-full flex items-start justify-between gap-4">
      <Link href="/" className="self-center">
        <Image
          src={item.image}
          alt={item.title}
          className="w-20 h-auto"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between items-start">
        <span className="text-muted text-sm">{item.category}</span>
        <h2
          className={`${racingSans.className} scroll-m-20 pb-2 text-base font-semibold tracking-tight first:mt-0`}
        >
          <Link href="/">{item.title}</Link>
        </h2>
        <div className="flex flex-col gap-2">
          {item.sizes.nosize.count > 0 && (
            <span>
              ریال
              {item.sizes.nosize.price.toLocaleString("en-US", {
                useGrouping: true,
              })}{" "}
              * {item.sizes.nosize.count}
            </span>
          )}
          {item.sizes &&
            sizesArray.map(
              (size, key) =>
                item.sizes[size].count > 0 && (
                  <span key={key}>
                    <Badge variant="default" className="border-2">
                      {size}
                    </Badge>{" "}
                    ریال
                    {item.sizes[size].price.toLocaleString("en-US", {
                      useGrouping: true,
                    })}{" "}
                    * {item.sizes[size].count}
                  </span>
                )
            )}
        </div>
      </div>

      <button className="self-center" onClick={deleteItem}>
        <Plus className="rotate-45 border border-foreground rounded-full" />
      </button>
    </div>
  );
};

export default SideBarItem;
