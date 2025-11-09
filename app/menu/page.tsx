"use client";
import { MENU } from "../../testData";
import { useCart } from "../store/cart";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import AddToCartButton from "../../component/AddToCartButton";


export default function MenuPage() {
 
  const sp = useSearchParams();
  const table = sp.get("table") ?? "T1";
  const add = useCart(state => state.add);

  const handleAddToCart = (itemData: { id: string; name: string; priceCents: number; qty: number }) => {
    add(itemData); 
  };
  return (
    <div className="max-w-4xl mx-auto  bg-white text-black min-h-[80vh]">
      <div className="underline bg-amber-700 p-4 text-white ">
        <header className="flex items-center justify-between py-2">
          <h1 className="text-2xl font-bold">Menu</h1>
          <Link href={`/cart?table=${table}`} className="underline-none font-bold text-2xl">Cart</Link>
        </header>
      </div>
      <div>
        {MENU.map(cat => (
          <section key={cat.id} className="mb-6 p-4">
            <h2 className="text-xl font-semibold mb-3">{cat.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.items.map(item => (
                <div key={item.id} className="rounded-2xl shadow-xl h-48 flex justify-between items-center  p-4">
                  <div>
                  
                  <div className="font-medium">{item.name}</div>
                  {item.description && <div className="text-sm opacity-70">{item.description}</div>}
                  <div className="mt-2 font-semibold">₹{(item.priceCents / 100).toFixed(2)}</div>
                  {/* <button
                  onClick={()=>add({ id: item.id, name: item.name, priceCents: item.priceCents })}
                  className="mt-3 px-3 py-2 rounded-xl bg-black text-white"
                >
                  Add
                </button> */}
                  <AddToCartButton
                    id={item.id}
                    name={item.name}
                    priceCents={item.priceCents}
                    onAdd={handleAddToCart}
                  />
                  </div>
                  <div>
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-xl mt-2"
                    />
                  )}
                  </div>
                </div>
              ))}

            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
