"use client";
import { Search, Bell, ChevronDown, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const navLinks = ["Dashboard", "Reports", "Documents", "History", "Contacts"];

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    <nav className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 shadow-sm relative">
      {/* Logo */}
      <div className="flex items-center gap-2.5 min-w-fit">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17" stroke="#1a7a4a" strokeWidth="2.5" fill="white" />
          <circle cx="17" cy="16" r="6" stroke="#1a7a4a" strokeWidth="2.5" fill="none" />
          <line x1="21" y1="20" x2="26" y2="26" stroke="#1a7a4a" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="font-extrabold text-gray-900 text-xl tracking-tight">Quixotic</span>
      </div>

      {/* Nav links */}
      {!searchOpen && (
        <div className="hidden lg:flex items-center border border-gray-200 rounded-full px-2 py-1.5 gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`px-5 py-1.5 rounded-full text-sm transition-colors ${
                active === link ? "bg-gray-100 text-gray-900 font-bold" : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* Search expanded */}
      {searchOpen && (
        <div className="hidden lg:flex flex-1 mx-6 items-center border border-gray-200 rounded-full px-4 py-2 gap-2">
          <Search size={16} className="text-gray-400" />
          <input
            ref={searchRef}
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            placeholder="Search..."
            className="flex-1 text-sm outline-none text-gray-700"
          />
          <button onClick={() => { setSearchOpen(false); setSearchVal(""); }}>
            <X size={16} className="text-gray-400 hover:text-gray-600" />
          </button>
        </div>
      )}

      {/* Right */}
      <div className="flex items-center gap-5">
        <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-500 hover:text-gray-700 transition-colors">
          <Search size={22} />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button onClick={() => { setNotifOpen(!notifOpen); setUserOpen(false); }} className="text-gray-500 hover:text-gray-700 transition-colors">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1a7a4a] rounded-full text-white text-[9px] flex items-center justify-center">3</span>
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-10 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 p-4 flex flex-col gap-3">
              <p className="font-semibold text-gray-800 text-sm">Notifications</p>
              {["Payment received: $1,200", "New wallet connected", "Monthly report ready"].map((n, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600 border-t border-gray-50 pt-2">
                  <span className="w-2 h-2 rounded-full bg-[#1a7a4a] mt-1.5 shrink-0" />{n}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User dropdown */}
        <div className="relative">
          <button onClick={() => { setUserOpen(!userOpen); setNotifOpen(false); }} className="flex items-center gap-1.5 cursor-pointer">
            <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          {userOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 p-2 flex flex-col">
              {["Profile", "Settings", "Sign out"].map((item, i) => (
                <button key={i} className="text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
