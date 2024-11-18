"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { createStore, StoreType } from "./redux-store";
import { initializeState, StateType } from "./redux-slices";
import { loadState } from "@/lib/localstorage";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<StoreType | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  useEffect(() => {
    const persistedItems: StateType = loadState("card");
    const initialState: StateType = persistedItems?.items.length
      ? persistedItems
      : { items: [] };

    if (storeRef.current) {
      storeRef.current.dispatch(initializeState(initialState));
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
