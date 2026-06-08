import { NextResponse } from "next/server";

const backendUrl = process.env.RAG_BACKEND_URL || "http://127.0.0.1:8000";

export async function POST(request) {
  try {
    const body = await request.json();
    const query = String(body.query || "").trim();

    if (!query) {
      return NextResponse.json(
        { error: "La question est vide." },
        { status: 400 }
      );
    }

    const response = await fetch(`${backendUrl}/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Le RAG n'est pas disponible pour le moment." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ answer: data.answer || "" });
  } catch {
    return NextResponse.json(
      { error: "Impossible de contacter le RAG." },
      { status: 503 }
    );
  }
}
