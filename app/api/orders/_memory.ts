export type OrderStatus = "PENDING" | "ACCEPTED" | "IN_PROGRESS" | "READY" | "SERVED" | "CANCELLED";

export type OrderItem = { id: string; name: string; priceCents: number; qty: number };
export type Order = {
  id: string;
  tableLabel: string;
  status: OrderStatus;
  notes?: string;
  totalCents: number;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
};

// module-level singleton store (resets on server restart)
const store = {
  orders: [] as Order[],
};

export function listActive() {
  return store.orders
    .filter(o => ["PENDING","ACCEPTED","IN_PROGRESS","READY"].includes(o.status))
    .sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function createOrder(payload: { tableLabel: string; items: OrderItem[]; notes?: string }) {
  const totalCents = payload.items.reduce((s,i)=>s + i.priceCents * i.qty, 0);
  const now = new Date().toISOString();
  const order: Order = {
    id: Math.random().toString(36).slice(2),
    tableLabel: payload.tableLabel,
    status: "PENDING",
    notes: payload.notes,
    totalCents,
    items: payload.items,
    createdAt: now,
    updatedAt: now,
  };
  store.orders.unshift(order);
  return order;
}

export function updateStatus(id: string, status: OrderStatus) {
  const idx = store.orders.findIndex(o => o.id === id);
  if (idx === -1) return null;
  store.orders[idx] = { ...store.orders[idx], status, updatedAt: new Date().toISOString() };
  return store.orders[idx];
}
