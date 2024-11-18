"use client";

import { Sidebar, useSidebar } from "@/components/ui/sidebar";
import { useCardItems } from "@/redux/redux-store";
import { Plus } from "lucide-react";
import SideBarItem from "./side-bar-item";

export function AppSidebar() {
  const { setOpen } = useSidebar();
  const items = useCardItems();

  // console.log(items);

  return (
    <Sidebar className="min-w-80 w-1/3" side="right">
      <div className="h-full flex flex-col">
        {/* sidebar header */}
        <div className="p-4 border-b-2 flex justify-between items-center gap-10">
          <span>shopping card</span>
          <button onClick={() => setOpen(false)}>
            <Plus className="rotate-45" />
          </button>
        </div>
        {/* sidebar content */}
        <div className="my-4 flex-1 flex flex-col items-center justify-center">
          {items.length ? (
            <div className="flex-1 flex flex-col gap-4 items-start">
              {items.map((item, key) => (
                <SideBarItem item={item} key={key} />
              ))}
            </div>
          ) : (
            <span>سبد خالیه بریم خرید...</span>
          )}
        </div>
      </div>
    </Sidebar>
  );
}
