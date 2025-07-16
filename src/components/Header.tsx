import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ChevronDown, Menu, X, ShoppingCart } from "lucide-react";
import logo from "../assets/flycare_logo.png";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Our Products", path: "/sanitary-pads", hasDropdown: true },
    { text: "Our Brands", path: "/brands", hasDropdown: true },
    { text: "About Us", path: "/about" },
    { text: "Blog", path: "/blog" },
    { text: "Careers", path: "/careers" },
    { text: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 animate-fade-in">
            <img
              className="h-8 lg:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              alt="Flycare logo"
              src={logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link to={item.path}>
                    <NavigationMenuLink 
                      className={`group flex items-center font-medium transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg ${
                        isActive(item.path) 
                          ? 'text-[#136ea1] bg-blue-50' 
                          : 'text-gray-700 hover:text-[#136ea1] hover:bg-gray-50'
                      }`}
                    >
                      {item.text}
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Cart and Mobile menu button */}
          <div className="flex items-center gap-4">
            {/* <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden md:inline">Cart</span>
            </Button> */}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#136ea1] hover:bg-gray-100 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-[#136ea1] bg-blue-50'
                    : 'text-gray-700 hover:text-[#136ea1] hover:bg-gray-50'
                }`}
              >
                {item.text}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};