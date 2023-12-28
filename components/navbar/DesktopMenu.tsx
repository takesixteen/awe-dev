import React from "react";
import Link from "next/link";

import { navLinks } from "@/constants";

const DesktopMenu: React.FC = () => {
  // Add your component logic here

  return (
    <ul className="text-white gap-x-8 hidden md:flex text-sm lg:text-base">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href} aria-label={link.ariaLabel}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
