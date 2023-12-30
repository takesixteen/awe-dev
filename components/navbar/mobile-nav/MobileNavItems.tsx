"use client";

import React from 'react';

import { NAV_ITEMS } from '@/constants';

import MobileNavItem from './MobileNavItem';
import MobileNavItemWithDropdown from './MobileNavItemWithDropdown';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const MobileNavItems: React.FC = () => {
    return (
        <Sheet>
        <SheetTrigger className='text-white flex flex-col justify-center items-end hover:bg-white/10 p-2 transition-colors focus-visible:bg-white/10'>
    <div className='w-6 h-0.5 bg-white mb-1'></div>
    <div className='w-4 h-0.5 bg-white mb-1'></div>
    <div className='w-6 h-0.5 bg-white'></div>
</SheetTrigger>
      <SheetContent className='bg-special border-l-white/10 px-[32px] pt-[40px]'>
        

        {/* Navigation Items mapped */}
        <ul className='flex flex-col gap-y-2'>
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className='w-full py-2 text-white text-lg font-semibold capitalize'>
              {item.label === 'Services' ? (
                <MobileNavItemWithDropdown navItem={item} />
              ) : (
                <MobileNavItem navItem={item} />
              )}
            </li>
          ))}
        </ul>

        <SheetFooter>
          <SheetClose className='border text-white'>
            Save changes
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    );
};

export default MobileNavItems;
