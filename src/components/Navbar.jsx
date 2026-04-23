import { X, MenuIcon } from "lucide-react";
import { useState } from "react";

/**
 * Navbar Component
 * ---------------------------------------
 * Props:
 * - scrolled (boolean): controls background style when page is scrolled
 *
 * Features:
 * - Responsive navigation (desktop + mobile)
 * - Mobile menu toggle
 * - Sticky navbar with blur effect
 */
const Navbar = ({ scrolled }) => {
  // 🔹 State: controls mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * 🔹 Toggle mobile menu
   * Keeps logic reusable and clean
   */
  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  /**
   * 🔹 Close mobile menu (used when clicking links)
   */
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/20 backdrop-blur-lg border-b border-slate-800"
          : "bg-slate-950/20 backdrop-blur-sm border-transparent"
      }`}
    >
      {/* 🔹 Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* 🔹 Logo Section */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="BuildFlow Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />

              {/* 🔹 Brand Name */}
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Build</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </a>
          </div>

          {/* 🔹 Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
          </div>

          {/* 🔹 Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a href="#features" className="mobile-nav-link" onClick={closeMenu}>
              Features
            </a>
            <a href="#pricing" className="mobile-nav-link" onClick={closeMenu}>
              Pricing
            </a>
            <a
              href="#testimonials"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
