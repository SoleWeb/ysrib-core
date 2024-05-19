"use client";
import { useState } from "react";

export const Footer = () => {
  const getYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  };
  const [currentDate, setCurrentDate] = useState(getYear());
  return (
    <div
      className="
    border-t-[1px]
    hidden
    lg:block"
    >
      <div className="flex justify-evenly gap-4 p-4">
        <div>
          <div className="flex flex-col p-4 cursor-pointer text-xl">
            All rights reserved. @{currentDate} by Yasrib Inc.
          </div>
        </div>
      </div>
    </div>
  );
};
