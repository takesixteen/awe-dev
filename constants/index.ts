export const BUSINESS_TELEPHONE_NUMBER = "0183817456";
export const BUSINESS_WORKING_HOURS = [
  "Mon-Fri : 07:00 - 17:00",
  "Sat: 08:00 - 13:00",
];
export const BUSINESS_ADDRESS = "23 Nelson Mandela Dr, Mahikeng";
export const BUSINESS_ADDRESS_ON_GOOGLE_MAPS =
  "https://www.google.com/maps/place/Auto+Wheels+%26+Exhausts/@-25.8632276,25.6459493,17z/data=!3m1!4b1!4m6!3m5!1s0x1ea2cac697680bb7:0x2ad30578d491e15a!8m2!3d-25.8632276!4d25.6459493!16s%2Fg%2F1pzr6fdt5?entry=ttu";

type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Promotions",
    href: "#",
  },
  {
    label: "Tires",
    href: "#",
  },
  {
    label: "Batteries",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
];

type Service = {
  label: string;
  services: string[];
  href: string;
};

export const SERVICES_DATA: Service[] = [
  {
    label: "Brake Services",
    services: [
      "Brake fluid flush",
      "Brake pad replacement",
      "Brake inspection",
    ],
    href: "/brake-services",
  },
  {
    label: "Tires and Wheels",
    services: [
      "Tire fitting and replacement",
      "3D Wheel alignment",
      "Wheel balancing",
    ],
    href: "/tires-and-wheels",
  },
  {
    label: "ECU Diagnostics",
    services: ["Computerized system analysis", "ECU Diagnostics"],
    href: "/ecu-diagnostics",
  },
  {
    label: "Cooling System Services",
    services: ["Radiator repair and replacement", "Cooling System Services"],
    href: "/cooling-system-services",
  },
  {
    label: "Wipers and Lights",
    services: [
      "Headlight and taillight inspection and replacement",
      "Windshield wiper sales and fitting",
    ],
    href: "/wipers-and-lights",
  },
  {
    label: "Battery Services",
    services: ["Battery replacement", "Battery testing", "Battery Services"],
    href: "/battery-services",
  },
  {
    label: "Exhaust System Services",
    services: [
      "Muffler replacement",
      "Exhaust system inspection and repair",
      "Exhaust System Services",
    ],
    href: "/exhaust-system-services",
  },
  {
    label: "Oil Services",
    services: ["Fluid checks and top-ups", "Oil changes", "Oil Services"],
    href: "/oil-services",
  },
  {
    label: "Scheduled Maintenance",
    services: [
      "Manufacturer recommended services",
      "Minor and major scheduled maintenance",
      "Scheduled Maintenance",
    ],
    href: "/scheduled-maintenance",
  },
  {
    label: "Fuel System Services",
    services: ["Fuel pump replacement", "Fuel System Services"],
    href: "/fuel-system-services",
  },
  {
    label: "Engine Services",
    services: [
      "Engine overhaul (may include piston replacement, cylinder head work, etc.)",
      "Engine Services",
    ],
    href: "/engine-services",
  },
  {
    label: "Suspension Services",
    services: [
      "Suspension system inspection and repair",
      "Shock absorber replacement",
      "Suspension Services",
    ],
    href: "/suspension-services",
  },
];

// Sorting the array alphabetically based on the 'label' property using the localeCompare() method and the .toSorted() method
export const SERVICES_DATA_SORTED = SERVICES_DATA.sort((a, b) =>
  a.label.localeCompare(b.label),
);


export const AUTO_WHEELS_STATS = [
  {
    label: "Vehicles Serviced Monthly",
    value: 100,
  },
  {
    label: "Quality Tires Installed Yearly",
    value: 1000,
  },
  {
    label: "Satisfied Customers Weekly",
    value: 100,
  },
  {
    label: "Square Feet of State-of-the-Art Service Facilities",
    value: 6000,
  },
  {
    label: "Successful Repairs Completed Weekly",
    value: 200,
  },
];
