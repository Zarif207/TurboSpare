"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "@/lib/toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.fire({ icon: "error", title: "All fields are required" });
      return;
    }

    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      toast.fire({ icon: "error", title: "Invalid credentials" });
      return;
    }

    toast.fire({ icon: "success", title: "Welcome back!" });
    router.replace("/");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 rounded-xl border bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 bg-yellow-400 text-black rounded
          hover:bg-yellow-500 transition disabled:opacity-60 font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </main>
  );
}