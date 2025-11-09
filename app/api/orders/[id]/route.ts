import { NextRequest, NextResponse } from "next/server";
import { updateStatus } from "../_memory";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;              // 👈 await the async params
  const { status } = await req.json();

  const updated = updateStatus(id, status);
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}
