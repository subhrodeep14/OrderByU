"use client";
import { useEffect, useState } from "react";

type Order = {
  id: string;
  tableLabel: string;
  status: "PENDING"|"ACCEPTED"|"IN_PROGRESS"|"READY"|"SERVED"|"CANCELLED";
  totalCents: number;
  items: { id: string; name: string; priceCents: number; qty: number }[];
  createdAt: string;
};

export default function Kitchen() {
  const [orders, setOrders] = useState<Order[]>([]);

  const load = async () => {
    const r = await fetch("/api/orders/list", { cache: "no-store" });
    const d = await r.json();
    setOrders(d.orders);
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 2000); // 2s polling for demo
    return () => clearInterval(t);
  }, []);

  const update = async (id: string, status: Order["status"]) => {
    const r = await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!r.ok) alert("Update failed");
    else load();
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kitchen Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {orders.map(o => (
          <div key={o.id} className="rounded-2xl shadow p-4">
            <div className="flex justify-between">
              <div className="font-semibold">Table {o.tableLabel}</div>
              <div className="text-sm">{o.status}</div>
            </div>
            <ul className="mt-2 text-sm">
              {o.items.map(it => <li key={it.id}>• {it.name} × {it.qty}</li>)}
            </ul>
            <div className="mt-2 font-semibold">Total ₹{(o.totalCents/100).toFixed(2)}</div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {["ACCEPTED","IN_PROGRESS","READY","SERVED","CANCELLED"].map(s => (
                <button key={s} onClick={()=>update(o.id, s as any)} className="px-3 py-1 rounded-xl border">
                  {s}
                </button>
              ))}
            </div>
          </div>
        ))}
        {orders.length === 0 && <div className="opacity-60">No active orders.</div>}
      </div>
    </div>
  );
}
