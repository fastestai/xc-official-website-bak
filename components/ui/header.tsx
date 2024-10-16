"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="relative z-30 mt-2 w-full md:mt-5">
      <div className="absolute top-0 left-0 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Site Branding */}
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 text-white text-xl font-bold">
              XCelsior AI
            </span>
          </div>

          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <button className="text-white px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">
              10x Productivity Template
            </button>
            {isDropdownOpen && (
              <ul
                className="absolute left-0 mt-2 bg-gray-900 rounded-lg shadow-lg"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <li>
                  <Link
                    target="_blank"
                    href="https://cutt.ly/VeSsY4BF"
                    className="block px-4 py-2 text-white hover:bg-gray-800 whitespace-nowrap"
                  >
                    Stock economics metrics
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://cutt.ly/4eSsApji"
                    className="block px-4 py-2 text-white hover:bg-gray-800 whitespace-nowrap"
                  >
                    Stock complex metrics comparison
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://cutt.ly/ueSsSDHf"
                    className="block px-4 py-2 text-white hover:bg-gray-800 whitespace-nowrap"
                  >
                    Crypto project metrics and comparison
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://cutt.ly/FeSsDHmc"
                    className="block px-4 py-2 text-white hover:bg-gray-800 whitespace-nowrap"
                  >
                    AI apps marketing research 
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://cutt.ly/peSsFcj5"
                    className="block px-4 py-2 text-white hover:bg-gray-800 whitespace-nowrap"
                  >
                    More...
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
