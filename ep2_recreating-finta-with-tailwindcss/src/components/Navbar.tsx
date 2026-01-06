import Link from "next/link";
import React from "react";
import Image from "next/image";
import { title } from "process";
import { link } from "fs";
 const Navbar = () => {
  const links = [
    {
      href: "/founders",
      title: "Founders",
    },
    {
      href: "/guide",
      title: "Guide",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/login",
      title: "Login",
    },
  ];
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Link href="/">
        <Image
          draggable="false"
          loading="lazy"
          src="/logo.svg"
          alt="logo"
          width={68}
          height={24}
        />
      </Link>
      <div className="flex items-center gap-6">
      {links.map((link,index) => (
        <Link href={link.href} key={index} className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200">{link.title}</Link>    
      ))}
      <button className="bg-blue-500 py-1.5 px-4 text-white rounded-xl font-medium shadow-lg text-shadow-md tracking-wide">Get Started</button></div>
    </div>
  );
};

export default Navbar;
