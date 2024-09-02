import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-lightest-dark dark:bg-customPurple text-black p-4 flex dark:text-white justify-between items-center">
      {/* Left most heading */}
      <h2 className="text-2xl font-raleway font-regular">
        <Link to="/" className="">
          BMI Index Calculating Website
          {/* When open in small devices its BMI  */}
        </Link>
      </h2>

      <div className="leftContainer mr-20 font-raleway font-normal ">
        <ul className="flex space-x-8">
          <li>
            <a href="#calculator" className="hover:underline">
              Calculator
            </a>
          </li>
          <li>
            <a href="#blogs" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
