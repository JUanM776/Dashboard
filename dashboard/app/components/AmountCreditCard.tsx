"use client";
import { ArrowUpRight } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/60?img=51",
  "https://i.pravatar.cc/60?img=52",
  "https://i.pravatar.cc/60?img=53",
  "https://i.pravatar.cc/60?img=54",
];

export default function AmountCreditCard() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col gap-5">
      {/* Amount of credit section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="3" stroke="#6b7280" strokeWidth="1.8" fill="none"/>
              <line x1="2" y1="10" x2="22" y2="10" stroke="#6b7280" strokeWidth="1.8"/>
              <line x1="6" y1="15" x2="10" y2="15" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M18 13 L18 17 M16 15 L20 15" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-base">Amount of credit</p>
            <p className="text-sm text-gray-400">Total refund amount with fee</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-4xl font-bold text-gray-900 tracking-tight">
            $8,945.<span className="text-gray-400">89</span>
          </p>
          <span className="bg-[#1a7a4a] text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
            +12.8%
          </span>
        </div>
      </div>

      {/* Mandatory Payments section — gray bg */}
      <div className="bg-gray-100 rounded-2xl p-4 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-bold text-gray-900 text-base">Mandatory Payments</p>
            <p className="text-sm text-gray-400 mt-0.5">Recent payments</p>
          </div>
          <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="flex items-center">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`user-${i}`}
              className="w-14 h-14 rounded-full object-cover"
              style={{ marginLeft: i === 0 ? 0 : -10, zIndex: i }}
            />
          ))}
          <div
            className="w-14 h-14 rounded-full bg-[#1a7a4a] flex items-center justify-center text-white font-bold text-base"
            style={{ marginLeft: -10, zIndex: 4 }}
          >
            +2
          </div>
        </div>
      </div>
    </div>
  );
}
