import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import cardReducer, { CardItemType, selectItems } from "@/redux/redux-slices";
import { db } from "@/lib/db";

export const createStore = () =>
  configureStore({
    reducer: cardReducer,
    // preloadedState: loadState("card"),
  });

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useCardItems = () => useSelector(selectItems);
export const useItemBySlug = (slug: string) => {
  const items = db;
  const findedItem =
    items.bycicles.find((item) => item.slug === slug) ||
    items.accessories.find((item) => item.slug === slug) ||
    undefined;

  return findedItem;
};
