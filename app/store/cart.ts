"use client";
import { create } from "zustand";

export type CartItem = { id: string; name: string; priceCents: number; qty: number };

type State = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  clear: () => void;
  totalCents: () => number;
};

export const useCart = create<State>((set, get) => ({
  items: [],
  add: (item) => {
    const ex = get().items.find(i => i.id === item.id);
    if (ex) return set({ items: get().items.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i) });
    set({ items: [...get().items, { ...item, qty: 1 }] });
  },
  inc: (id) => set({ items: get().items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i) }),
  dec: (id) => set({ items: get().items.flatMap(i => i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i]) }),
  clear: () => set({ items: [] }),
  totalCents: () => get().items.reduce((s, i) => s + i.priceCents * i.qty, 0),
}));
