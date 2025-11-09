"use client";
import { MENU } from "../../testData";
import { useCart } from "../store/cart";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function MenuPage() {
  const add = useCart(s => s.add);
  const sp = useSearchParams();
  const table = sp.get("table") ?? "T1";

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex items-center justify-between py-2">
        <h1 className="text-2xl font-bold">Menu</h1>
        <Link href={`/cart?table=${table}`} className="underline">Cart</Link>
      </header>

      {MENU.map(cat => (
        <section key={cat.id} className="mb-6">
          <h2 className="text-xl font-semibold mb-3">{cat.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cat.items.map(item => (
              <div key={item.id} className="rounded-2xl shadow p-4">
                <div className="font-medium">{item.name}</div>
                {item.description && <div className="text-sm opacity-70">{item.description}</div>}
                <div className="mt-2 font-semibold">₹{(item.priceCents/100).toFixed(2)}</div>
                <button
                  onClick={()=>add({ id: item.id, name: item.name, priceCents: item.priceCents })}
                  className="mt-3 px-3 py-2 rounded-xl bg-black text-white"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
