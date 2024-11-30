import { saveState } from "@/lib/localstorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardItemType = {
  title: string;
  slug: string;
  image: string;
  sizes: {
    L: { price: number; count: number };
    M: { price: number; count: number };
    XL: { price: number; count: number };
    nosize: { price: number; count: number };
  };
  category: string;
};

export type StateType = {
  items: CardItemType[];
};

type AddItemType = {
  slug: string;
  category: string;
  image: string;
  title: string;
  price: number;
  size: "M" | "L" | "XL" | "nosize";
};

const initialState: StateType = {
  items: [],
};

export const sizesArray: ["M", "L", "XL"] = ["M", "L", "XL"];

export const totalPriceFn = (itemArray: CardItemType[]) => {
  const counterForTotal = itemArray.reduce((acc, item) => {
    const counterForItem = Object.values(item.sizes)
      .filter((item) => item.count > 0)
      .reduce((acc, curr) => {
        return acc + curr.count * curr.price;
      }, 0);
    return acc + counterForItem;
  }, 0);
  return counterForTotal;
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    initializeState: (state, action: PayloadAction<StateType>) => {
      const localState = action.payload.items.filter((item) => {
        return Object.values(item.sizes).some((size) => size.count > 0);
      });
      state.items.push(...localState);
    },
    addCardItem: (state, action: PayloadAction<AddItemType>) => {
      if (!state.items.some((i) => i.slug === action.payload.slug)) {
        const sizes = {
          L: { price: 0, count: 0 },
          M: { price: 0, count: 0 },
          XL: { price: 0, count: 0 },
          nosize: { price: 0, count: 0 },
        };
        sizes[action.payload.size].price = action.payload.price;
        sizes[action.payload.size].count = 1;
        const cardItemData = {
          title: action.payload.title,
          slug: action.payload.slug,
          image: action.payload.image,
          sizes,
          category: action.payload.category,
        };
        state.items.push(cardItemData);
        saveState(state, "card");
      } else {
        const updatedItemIndex = state.items.findIndex(
          (item) => item.slug === action.payload.slug
        );
        state.items[updatedItemIndex].sizes[action.payload.size].price =
          action.payload.price;
        state.items[updatedItemIndex].sizes[action.payload.size].count = 1;
        saveState(state, "card");
      }
    },
    deleteCardItem: (state, action: PayloadAction<{ slug: string }>) => {
      const deletedItemIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug
      );
      state.items.splice(deletedItemIndex, 1);
      saveState(state, "card");
    },
    increaseItemCount: (
      state,
      action: PayloadAction<{
        slug: string;
        size: "L" | "M" | "XL" | "nosize";
        price: number;
      }>
    ) => {
      const updatedItemIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug
      );
      state.items[updatedItemIndex].sizes[action.payload.size].price =
        action.payload.price;
      ++state.items[updatedItemIndex].sizes[action.payload.size].count;
      saveState(state, "card");
    },
    decreaseItemCount: (
      state,
      action: PayloadAction<{ slug: string; size: "L" | "M" | "XL" | "nosize" }>
    ) => {
      const updatedItemIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug
      );

      if (state.items[updatedItemIndex].sizes[action.payload.size].count >= 1) {
        --state.items[updatedItemIndex].sizes[action.payload.size].count;
      }
      const totalItemsCount = Object.values(
        state.items[updatedItemIndex].sizes
      ).reduce((totalItems, item) => totalItems + item.count, 0);
      if (totalItemsCount === 0) {
        state.items.splice(updatedItemIndex, 1);
      }
      saveState(state, "card");
    },
    clearCard: () => ({ items: [] }),
    checkOutCard: (state) => state,
  },
});

export default cardSlice.reducer;
export const selectItems = (state: StateType) => state.items;
export const {
  initializeState,
  addCardItem,
  deleteCardItem,
  increaseItemCount,
  decreaseItemCount,
  clearCard,
  checkOutCard,
} = cardSlice.actions;
