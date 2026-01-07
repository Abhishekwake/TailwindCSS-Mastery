"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const links = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "about",
      href: "/",
    },
    {
      title: "login",
      href: "/",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="md:shadow-aceternity relative mx-auto mt-5 flex max-w-4xl items-center justify-between border border-neutral-200 bg-purple-800 px-8 py-3 md:rounded-full">
        <Image src="/logo-white.svg" alt="logo" height={40} width={40} />
        <div className="mr-5 hidden gap-5 text-sm text-neutral-200 md:flex">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className="transition duration-300 hover:text-neutral-900"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Image src="/menu.png" alt="hamburger" width={25} height={25} />
        </button>
        {open && (
          <div className="shadow-aceternity absolute inset-x-0 top-20 mx-auto max-w-[90%] rounded-md bg-white">
            <div className="flex flex-col items-center gap-5 p-4 text-sm text-neutral-200 md:hidden">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="text-black transition duration-300 hover:text-neutral-900"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
