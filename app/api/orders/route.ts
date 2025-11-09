import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "./_memory";

export async function POST(req: NextRequest) {
  try {
    const { tableLabel, items, notes } = await req.json();
    if (!tableLabel || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const order = createOrder({ tableLabel, items, notes });
    return NextResponse.json({ ok: true, order });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
