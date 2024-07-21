"use client"

import React from "react";
import Dashboard from "@/components/Dashboard";
import { useSession, signIn, signOut } from "next-auth/react";

function page() {
  const { data: session } = useSession();
  return <>{session ? <Dashboard /> : <h2>Please Login</h2>}</>;
}

export default page;
