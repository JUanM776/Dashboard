"use client";
import { Search, Bell, ChevronDown } from "lucide-react";

const navLinks = ["Dashboard", "Reports", "Documents", "History", "Contacts"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 shadow-sm">

      {/* Logo */}
      <div className="flex items-center gap-2.5 min-w-fit">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          {/* Outer circle */}
          <circle cx="18" cy="18" r="17" stroke="#1a7a4a" strokeWidth="2.5" fill="white" />
          {/* Inner Q shape */}
          <circle cx="17" cy="16" r="6" stroke="#1a7a4a" strokeWidth="2.5" fill="none" />
          {/* Q tail */}
          <line x1="21" y1="20" x2="26" y2="26" stroke="#1a7a4a" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="font-extrabold text-gray-900 text-xl tracking-tight">Quixotic</span>
      </div>

      {/* Nav links inside pill with visible border */}
      <div className="hidden md:flex items-center border border-gray-200 rounded-full px-2 py-1.5 gap-1">
        {navLinks.map((link) => (
          <button
            key={link}
            className={`px-5 py-1.5 rounded-full text-sm transition-colors ${
              link === "Dashboard"
                ? "bg-gray-100 text-gray-900 font-bold"
                : "text-gray-400 hover:text-gray-700 font-normal"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right: search, bell, avatar */}
      <div className="flex items-center gap-5">
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <Search size={22} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={22} />
        </button>
        <div className="flex items-center gap-1.5 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>

    </nav>
  );
}
