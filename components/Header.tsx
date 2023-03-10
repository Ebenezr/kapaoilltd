"use client";

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="  h-24 w-full ">
      <div className="align-center relative mx-auto flex h-full w-full justify-center">
        <button className="absolute left-4 top-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-7 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        <Image
          className="w-auto"
          src="/logo.png"
          alt="kapa"
          width={150}
          height={80}
        />
      </div>
    </header>
  );
};

export default Header;
