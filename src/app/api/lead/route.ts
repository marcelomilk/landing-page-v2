import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 160).toLowerCase();

  if (!name || !company || !EMAIL.test(email)) {
    return NextResponse.json(
      { error: "Preencha nome, empresa e um e-mail válido." },
      { status: 422 },
    );
  }

  try {
    await db.insert(leads).values({ name, company, email });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível registrar agora. Tente novamente." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
