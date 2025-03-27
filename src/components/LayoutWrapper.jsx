"use client";
import Link from "next/link";

export default function LayoutWrapper({ children }) {
  return (
    <div className=" mx-auto">
      <main className=" min-h-screen p-6 bg-[#6952ff17]">{children}</main>
    </div>
  );
}