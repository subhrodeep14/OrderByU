"use client";
import { useCart } from "../store/cart";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function CartPage() {
  const items = useCart(s => s.items);
  const totalCents = useCart(s => s.totalCents)();
  const clear = useCart(s => s.clear);
  const sp = useSearchParams();
  const table = sp.get("table") ?? "T1";
  const router = useRouter();
  const [notes, setNotes] = useState("");

  const place = async () => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tableLabel: table, items, notes }),
    });
    if (res.ok) {
      clear();
      router.push(`/thanks?table=${table}`);
    } else {
      alert("Failed to place order");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-amber-50 text-black h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? <p>No items.</p> : (
        <>
          <ul className="space-y-2">
            {items.map(i => (
              <li key={i.id} className="flex justify-between">
                <span>{i.name} × {i.qty}</span>
                <span>₹{((i.priceCents*i.qty)/100).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <textarea
            className="w-full border rounded-xl p-2 mt-4"
            placeholder="Add notes (no onion, spicy, etc.)"
            value={notes} onChange={e=>setNotes(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="text-xl font-semibold">Total: ₹{(totalCents/100).toFixed(2)}</div>
            <button onClick={place} className="px-4 py-2 rounded-xl bg-green-600 text-white">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
