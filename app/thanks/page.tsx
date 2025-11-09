import { Suspense } from "react";
import ThanksClient from "./thanks-client";

// Optional: disable static generation if desired
// export const dynamic = "force-dynamic";

export default function ThanksPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] grid place-items-center">Loading...</div>}>
      <ThanksClient />
    </Suspense>
  );
}
