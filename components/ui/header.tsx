"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="relative z-30 mt-2 w-full md:mt-5">
      <div className="absolute top-0 left-0 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center gap-3">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 text-white text-xl font-bold">XCelsior AI</span>
          </div>
        </div>
      </div>
    </header>
  );
}
