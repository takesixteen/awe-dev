"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

import { navLinks } from "@/constants";

import { ChevronDown } from "lucide-react";
import DesktopMenuDropdown from "./DesktopMenuDropdown";

const DesktopMenu: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => {
    setShowDropdown((prev) => !prev);
  }, []);

  return (
    <div ref={navRef}>
      <ul className="text-white/80 gap-x-8 hidden md:flex text-sm lg:text-base">
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              ariaLabel={link.ariaLabel}
              toggleDropdown={toggleDropdown}
            />
          </li>
        ))}
      </ul>

      {showDropdown && <DesktopMenuDropdown />}
    </div>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  ariaLabel: string;
  toggleDropdown: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  ariaLabel,
  toggleDropdown,
}) => {
  return (
    <li>
      <Link
        href={href}
        aria-label={ariaLabel}
        onClick={
          label === "Services"
            ? (e) => {
                e.preventDefault();
                toggleDropdown();
              }
            : undefined
        }
      >
        {label === "Services" ? (
          <span className="flex items-center ">
            {label}
            <ChevronDown className="ml-1" />
          </span>
        ) : (
          <>{label}</>
        )}
      </Link>
    </li>
  );
};

export default DesktopMenu;
