

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0e12] border-t border-[#1f2128] py-4 px-6 md:px-8 mt-auto">
      <div className="w-full flex items-center justify-between">
        {/* Left Side Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImg}
            alt="FitLog Logo"
            width={32} 
            height={32}
            className="h-7 w-auto object-contain"/>

          <span className="text-xl font-extrabold tracking-wider text-white uppercase">
            FIT<span className="text-white">LOG</span>
          </span>
        </Link>

        {/* Right Side Copyright */}
        <p className="text-xs text-zinc-500 font-medium">
          © {new Date().getFullYear()} FitLog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;