// pages/login.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Navbar from "@/components/navbar";

const Login = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/";
    }
  }, [status]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 px-40">
        <h1 className="text-3xl font-bold mb-6">Login Page</h1>
        <div className="space-y-4">
          {session ? (
            <div>
              <p className="text-xl">Signed in as {session.user?.email}</p>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xl">You are not signed in</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
