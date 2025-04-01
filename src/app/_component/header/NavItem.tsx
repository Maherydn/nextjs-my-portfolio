"use client";

import React from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  isMobile?: boolean;
  close?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, isMobile, close }) => {
  return (
    <li>
      <Link
        href={href}
        onClick={close}
        className={`px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 duration-150 ${
          isMobile ? "block text-white text-base font-medium" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
