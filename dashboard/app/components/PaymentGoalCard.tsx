"use client";
import { ArrowUpRight } from "lucide-react";

export default function PaymentGoalCard() {
  return (
    <div className="bg-[#f0f2f5] rounded-3xl p-3 shadow-sm flex flex-col gap-3">
      {/* Top section — white bg */}
      <div className="bg-white rounded-2xl p-4 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="font-bold text-gray-900 text-base">Payment Goal</p>
            <p className="text-sm text-gray-400 mt-0.5">Total amount goal</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
            <ArrowUpRight size={17} />
          </button>
        </div>

        {/* Visa Card */}
        <div className="bg-[#1a7a4a] rounded-2xl p-5 text-white flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-2xl italic tracking-wide">VISA</span>
            {/* NFC waves */}
            <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
              <path d="M4 11 Q7 5 13 5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
              <path d="M4 11 Q8 2 15 2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75"/>
              <path d="M4 11 Q9 -1 18 -1" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <p className="text-green-200 text-sm mt-1">Credit Card</p>
          <p className="text-3xl font-bold tracking-tight mt-1">$ 78,989.09</p>
          <div className="flex items-center justify-between text-sm text-green-200 mt-2">
            <span>• • • •  909090</span>
            <span className="font-medium">EXP 09/26</span>
          </div>
        </div>
      </div>

      {/* Bottom section — Weekly Revenue */}
      <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Weekly Revenue</p>
          <p className="text-xl font-bold text-gray-900 mt-0.5">+3,945 USD</p>
        </div>
        <span className="bg-[#1a7a4a] text-white text-xs font-semibold px-4 py-2 rounded-full">
          +12.8%
        </span>
      </div>
    </div>
  );
}
