"use client";

import React, {useState} from 'react';

import { NAV_ITEMS } from '@/constants';
import { ChevronDown } from 'lucide-react';

interface MobileNavItemWithDropdownProps {
    navItem: typeof NAV_ITEMS[number];
}

const MobileNavItemWithDropdown: React.FC<MobileNavItemWithDropdownProps> = ({navItem}) => {
    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    const toggleDropdownVisibility = () => setDropdownVisibility((prev) => !prev);

    return (
        <button
        aria-haspopup="true"
        aria-expanded={isDropdownVisible}
        onClick={toggleDropdownVisibility}
        className='w-full'
      >
        <span className="flex items-center gap-1 ">
          {navItem.label}
          <ChevronDown
            className={`${
              isDropdownVisible ? "rotate-180 transform" : ""
            } transition-transform duration-300`}
          />
        </span>
      </button>
    );
};

export default MobileNavItemWithDropdown;
