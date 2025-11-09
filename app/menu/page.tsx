import { Suspense } from "react";
import MenuClient from "./menu-client";

// Optional: if you want to avoid SSG for this route
// export const dynamic = "force-dynamic";

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto p-4">Loading menu…</div>}>
      <MenuClient />
    </Suspense>
  );
}
