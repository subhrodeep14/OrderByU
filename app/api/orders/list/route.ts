import { NextResponse } from "next/server";
import { listActive } from "../_memory";

export async function GET() {
  return NextResponse.json({ orders: listActive() });
}
