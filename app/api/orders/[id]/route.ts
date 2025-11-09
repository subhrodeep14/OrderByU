import { NextRequest, NextResponse } from "next/server";
import { updateStatus } from "../_memory";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { status } = await req.json();
  const updated = updateStatus(params.id, status);
  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated);
}
