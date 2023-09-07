"use client";
import Link from "next/link";
import React from "react";
const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul
      className={`text-md justify-center flex gap-4 w-full items-center ${
        mobile && "flex-col h-full"
      }`}
    >
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">Amin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/User">User</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <button>Signout</button>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <button>Signin</button>
      </li>
    </ul>
  );
};

export default NavItem;
