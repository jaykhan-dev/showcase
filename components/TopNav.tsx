"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface Link {
  id: number;
  name: string;
  link: string;
}

const links: Link[] = [
  { id: 1, name: "Three", link: "/three" },
  { id: 2, name: "Notion", link: "/notion" },
  { id: 3, name: "Framer", link: "/framer" },
];
export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex items-center space-x-10 w-full justify-center py-4 uppercase fixed top-0">
      {links.map((link: Link) => (
        <Link
          className={
            router.pathname == link.link
              ? "text-blue-500"
              : "hover:text-blue-500 duration-300"
          }
          key={link.id}
          href={link.link}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
