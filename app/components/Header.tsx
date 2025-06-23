// components/Header.js

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Image
            src="/Logo.jpg"
            alt="BTB Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/About" className="hover:underline">
            About
          </Link>
          <Link href="/Programs" className="hover:underline">
            Program
          </Link>
          <Link href="/Donations" className="hover:underline">
            Donations
          </Link>
          <Link href="/Partners" className="hover:underline">
            Partners
          </Link>
          <Link href="/Team" className="hover:underline">
            Team
          </Link>
          <ul></ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
