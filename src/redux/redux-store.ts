import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import cardReducer, { selectItems } from "@/redux/redux-slices";

export const createStore = () =>
  configureStore({
    reducer: cardReducer,
    // preloadedState: loadState("card"),
  });

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useCardItems = () => useSelector(selectItems);
export const useCardItemBySlug = (slug: string) => {
  const items = useCardItems();
  const findedItem = items.find((item) => item.slug === slug);
  return findedItem;
};
