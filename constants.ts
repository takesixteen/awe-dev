type NavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export const navLinks: NavLink[] = [
  {
    label: "Promotions",
    href: "/promotions",
    ariaLabel: "Promotions",
  },
  {
    label: "Tires",
    href: "/tires",
    ariaLabel: "Tires",
  },
  {
    label: "Batteries",
    href: "/batteries",
    ariaLabel: "Batteries",
  },
  {
    label: "Services",
    href: "/services",
    ariaLabel: "Services",
  },
];
