import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/Flycare_logo.png";
export const Footer = (): JSX.Element => {
  const usefulLinks = [
    { text: "Our Products", path: "/sanitary-pads" },
    { text: "Our Brands", path: "/brands" },
    { text: "About Us", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Career", path: "/careers" },
    { text: "Blog", path: "/blog" },
    { text: "Terms & Condition", path: "/terms" },
    { text: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-6">
            <img
              className="h-12 w-auto object-contain mb-6 filter brightness-0 invert"
              alt="Flycare logo"
              src={logo}
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              FlyCare stands as a beacon of quality and innovation in the realm of personal hygiene products. 
              Committed to excellence, we offer a diverse range of sanitary pads, napkins, and liners that 
              redefine comfort and protection. Born from a vision of empowerment, FlyCare products embody a 
              perfect blend of advanced technology and care for the well-being of our users.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#136ea1] rounded-full flex items-center justify-center hover:bg-[#0f5a8a] transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#136ea1] rounded-full flex items-center justify-center hover:bg-[#0f5a8a] transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#136ea1] rounded-full flex items-center justify-center hover:bg-[#0f5a8a] transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#136ea1] rounded-full flex items-center justify-center hover:bg-[#0f5a8a] transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Contact Details</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#136ea1] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white block">Customer Care:</span>
                  +91-7209 770033
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#136ea1] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white block">Email:</span>
                  contact@myflycare.com
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#136ea1] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white block">Head Office:</span>
                  T-57 C, Library Road, Azad Market, Delhi - 110006
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#136ea1] mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white block">Corporate Office:</span>
                  F-122, GF, Utsav Apartment, Sector 18, Rohini Delhi - 110089
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FlyCare. All rights reserved. | Designed with ❤️ for better health</p>
        </div>
      </div>
    </footer>
  );
};