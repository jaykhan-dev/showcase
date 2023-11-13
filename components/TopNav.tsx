import Link from "next/link";
import React from "react";

export default function TopNav() {
  return (
    <nav className="flex items-center space-x-10 w-full justify-center">
      <Link href="/three">Three</Link>
      <Link href="/notion">Notion</Link>
      <Link href="Framer">Framer</Link>
    </nav>
  );
}
