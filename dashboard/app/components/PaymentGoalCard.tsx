"use client";
import { ArrowUpRight } from "lucide-react";

export default function PaymentGoalCard() {
  return (
    <div className="bg-[#f0f2f5] rounded-2xl p-2 shadow-sm flex flex-col gap-2 h-fit">
      {/* Top — white */}
      <div className="bg-white rounded-xl p-3 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-bold text-gray-900 text-sm">Payment Goal</p>
            <p className="text-xs text-gray-400">Total amount goal</p>
          </div>
          <button className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full text-gray-500">
            <ArrowUpRight size={13} />
          </button>
        </div>
        {/* Visa Card */}
        <div className="bg-[#1a7a4a] rounded-xl p-3 text-white flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-base italic tracking-wide">VISA</span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path d="M2 8 Q5 3 10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
              <path d="M2 8 Q6 1 12 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75"/>
              <path d="M2 8 Q7 -1 14 -1" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <p className="text-green-200 text-xs">Credit Card</p>
          <p className="text-xl font-bold tracking-tight">$ 78,989.09</p>
          <div className="flex items-center justify-between text-xs text-green-200">
            <span>•••• 909090</span>
            <span>EXP 09/26</span>
          </div>
        </div>
      </div>
      {/* Bottom — Weekly Revenue */}
      <div className="bg-white rounded-xl px-3 py-2 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Weekly Revenue</p>
          <p className="text-base font-bold text-gray-900">+3,945 USD</p>
        </div>
        <span className="bg-[#1a7a4a] text-white text-xs font-semibold px-3 py-1 rounded-full">
          +12.8%
        </span>
      </div>
    </div>
  );
}
