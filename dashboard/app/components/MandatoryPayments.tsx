"use client";
import { ArrowUpRight } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/56?img=51",
  "https://i.pravatar.cc/56?img=52",
  "https://i.pravatar.cc/56?img=53",
  "https://i.pravatar.cc/56?img=54",
];

export default function MandatoryPayments() {
  return (
    <div className="bg-gray-100 rounded-3xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-bold text-gray-900 text-base">Mandatory Payments</p>
          <p className="text-sm text-gray-400 mt-0.5">Recent payments</p>
        </div>
        <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Avatars with overlap */}
      <div className="flex items-center">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`user-${i}`}
            className="w-14 h-14 rounded-full object-cover border-4 border-gray-100"
            style={{ marginLeft: i === 0 ? 0 : -16 }}
          />
        ))}
        <div
          className="w-14 h-14 rounded-full bg-[#1a7a4a] flex items-center justify-center text-white font-bold text-base border-4 border-gray-100"
          style={{ marginLeft: -16 }}
        >
          +2
        </div>
      </div>
    </div>
  );
}
