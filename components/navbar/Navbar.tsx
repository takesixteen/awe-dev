import React from "react";
import Link from "next/link";

import DesktopMenu from "./DesktopMenu";
import ContactButton from "./ContactButton";

const Navbar: React.FC = () => {
  return (
    <nav className="h-navbar-desktop bg-specialRed ">
      <div className="flex master-container h-full items-center justify-between">
        {/* Business Name */}
        <Link
          href="/"
          aria-label="Home"
          className="capitalize font-bold text-xl md:text-lg lg:text-xl text-white"
        >
          Auto Wheels &amp; <br /> Exhaust
        </Link>

        <DesktopMenu />

        <ContactButton />
      </div>
    </nav>
  );
};

export default Navbar;
