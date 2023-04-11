import Link from 'next/link';
import React from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div>
      <nav className="w-full text-center justify-between flex flex-row bg-[#333333] px-10 py-4">
        <div className="px-20 text-lg text-teal-500 ">LOGO</div>
        <div>
          <ul className="flex flex-row text-teal-500 text-lg cursor-pointer">
            <li className="px-10 hover:text-teal-300">
              <Link href="#">Home</Link>
            </li>
            <li className="px-10 hover:text-teal-300">
              <Link href="#">Movies</Link>
            </li>
            <li className="px-10 hover:text-teal-300">
              <Link href="#">About</Link>
            </li>
          </ul>
        </div>

        <div className="hidden sm:">
          <span className="text-2xl cursor-pointer hover:text-teal-300 text-teal-400">
            <AiOutlineMenuUnfold />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
