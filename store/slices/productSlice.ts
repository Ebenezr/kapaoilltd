import { StateCreator, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/server/models/product.model";
import ProductState from "../types/iProductState";

const useProdStore: StateCreator<ProductState> = (set, get) => ({
  currentProduct: {
    id: 1,
    name: "",
    description: "",
    price: 0,
    rating: 0,
    image_url: "",
    size: "",
    reviews: [],
    categoryId: 1,
    discountId: 1,
  },
  products: [],
  categories: [],
  setCurrentProduct: (params: Product) => {
    set((state) => ({
      currentProduct: params,
    }));
  },
});

export default useProdStore;
