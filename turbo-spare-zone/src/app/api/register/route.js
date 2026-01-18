import { NextResponse } from "next/server";
import { users } from "@/lib/users";

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "All fields required" },
      { status: 400 }
    );
  }

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  users.push({
    id: Date.now().toString(),
    name,
    email,
    password, // ⚠️ hash later
  });

  return NextResponse.json({ success: true });
}