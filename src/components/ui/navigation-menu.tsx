import { useState } from "react";
import Link from "next/link"; 
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-orange-600 text-2xl">UrbanShare</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline">
              About
            </Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden sm:flex sm:items-center">
            <Button className="rounded-full bg-green-600 hover:bg-green-500">
              Submit a Report
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-4">
              <Button className="w-full bg-green-600 hover:bg-green-500" onClick={toggleMenu}>
                Submit a Report
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
