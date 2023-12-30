"use client";

import React from "react";
import Link from "next/link";

import { NAV_ITEMS } from "@/constants";

type MobileNavItemProps = {
  navItem: (typeof NAV_ITEMS)[number];
};

const MobileNavItem: React.FC<MobileNavItemProps> = ({ navItem }) => {
  return <Link href={"#"} className="w-full block">{navItem.label}</Link>;
};

export default MobileNavItem;
