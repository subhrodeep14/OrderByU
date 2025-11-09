"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Thanks() {
  const sp = useSearchParams();
  const table = sp.get("table") ?? "T1";
  return (
    <div className="min-h-[60vh] grid place-items-center p-4 text-center">
      <div>
        <h1 className="text-2xl font-bold mb-2">Order placed 🎉</h1>
        <p className="opacity-75">We’re preparing your food.</p>
        <Link className="inline-block mt-4 underline" href={`/menu?table=${table}`}>
          Back to Menu
        </Link>
      </div>
    </div>
  );
}
