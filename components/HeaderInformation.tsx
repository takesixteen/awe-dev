import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const HeaderInformation: React.FC = () => {
  return (
    <header className="bg-brand sm:h-[40px]">
      <div className="flex h-full py-1.5 sm:py-0 master-container justify-between text-white font-light">
        {/* hours */}
        <div
          className="flex gap-x-2 items-center text-sm "
          role="contentinfo"
          aria-label="Business hours"
        >
          <Clock className="h-4 w-4" aria-hidden />
          <p>
            Mon-Fri : 07:00 - 17:00{" "}
            <span className="hidden sm:inline-block">|</span>{" "}
            <br className="sm:hidden" /> Sat: 08:00 - 13:00
          </p>
        </div>

        {/* contact (seen until md) */}
        <div
          className="flex gap-x-2 items-center md:hidden text-sm"
          role="contentinfo"
          aria-label="Phone number"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <p>018 381 7456</p>
        </div>

        {/* location (seen after md)*/}
        <address
          className="hidden md:flex gap-x-2 items-center text-sm "
          role="contentinfo"
          aria-label="Location"
        >
          <MapPin className="h-4 w-4" aria-hidden />
          <p>23 Nelson Mandela Dr, Mahikeng</p>
        </address>
      </div>
    </header>
  );
};

export default HeaderInformation;
