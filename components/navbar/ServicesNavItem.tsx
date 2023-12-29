"use client";

import React from "react";

import { NAV_ITEMS } from "@/constants";

import { ChevronDown } from "lucide-react";

interface ServicesNavItemProps {
  navItem: (typeof NAV_ITEMS)[number];
  toggleServicesDropdown: () => void;
  showServicesDropdown: boolean;
}

const ServicesNavItem: React.FC<ServicesNavItemProps> = ({
  navItem,
  toggleServicesDropdown,
  showServicesDropdown,
}) => {
  // Implement the component logic here

  return (
    // JSX code for the component's UI
    <li>
      <button onClick={toggleServicesDropdown}>
        <span className="flex items-center ">
          {navItem.label}
          <ChevronDown className="ml-1" />
        </span>
      </button>

      {/* Dropdown */}
      {showServicesDropdown && (
        <div className="px-12 py-8 bg-special absolute top-full translate-y-2">
          <div></div>
        </div>
      )}
    </li>
  );
};

export default ServicesNavItem;
