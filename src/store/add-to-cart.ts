import { Item } from "@/types";
import { create } from "zustand";

interface CartStore {
	cart: Item[];
	addToCart: (item: Item) => void;
	removeFromCart: (id: number) => void;
}

export const useCart = create<CartStore>((set) => ({
	cart: [],
	addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
	removeFromCart: (id) =>
		set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));
