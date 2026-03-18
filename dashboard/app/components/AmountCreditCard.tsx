"use client";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const avatars = [
  { src: "https://i.pravatar.cc/48?img=51", name: "Carlos M.", amount: "$1,200" },
  { src: "https://i.pravatar.cc/48?img=52", name: "Laura P.", amount: "$850" },
  { src: "https://i.pravatar.cc/48?img=53", name: "James R.", amount: "$2,100" },
  { src: "https://i.pravatar.cc/48?img=54", name: "Sofia K.", amount: "$430" },
];

export default function AmountCreditCard() {
  const [selected, setSelected] = useState<typeof avatars[0] | null>(null);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3 h-fit">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="3" stroke="#6b7280" strokeWidth="1.8" fill="none"/>
            <line x1="2" y1="10" x2="22" y2="10" stroke="#6b7280" strokeWidth="1.8"/>
            <path d="M18 13 L18 17 M16 15 L20 15" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">Amount of credit</p>
          <p className="text-xs text-gray-400">Total refund amount with fee</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold text-gray-900 tracking-tight">
          $8,945.<span className="text-gray-400">89</span>
        </p>
        <span className="bg-[#1a7a4a] text-white text-xs font-semibold px-2.5 py-1 rounded-full">+12.8%</span>
      </div>

      <div className="bg-gray-100 rounded-xl p-3 flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-bold text-gray-900 text-sm">Mandatory Payments</p>
            <p className="text-xs text-gray-400">Recent payments</p>
          </div>
          <button className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-gray-500 shadow-sm">
            <ArrowUpRight size={13} />
          </button>
        </div>
        <div className="flex items-center">
          {avatars.map((a, i) => (
            <button
              key={i}
              onClick={() => setSelected(a)}
              className="focus:outline-none hover:scale-110 transition-transform"
              style={{ marginLeft: i === 0 ? 0 : -8, zIndex: i }}
            >
              <img src={a.src} alt={a.name} className="w-10 h-10 rounded-full object-cover border-2 border-gray-100" />
            </button>
          ))}
          <div className="w-10 h-10 rounded-full bg-[#1a7a4a] flex items-center justify-center text-white font-bold text-xs border-2 border-gray-100" style={{ marginLeft: -8, zIndex: 4 }}>
            +2
          </div>
        </div>
      </div>

      {/* Avatar detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl p-6 shadow-xl w-64 flex flex-col items-center gap-3" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="self-end text-gray-400 hover:text-gray-600"><X size={16} /></button>
            <img src={selected.src} alt={selected.name} className="w-16 h-16 rounded-full object-cover" />
            <p className="font-bold text-gray-900">{selected.name}</p>
            <p className="text-sm text-gray-400">Last payment</p>
            <p className="text-2xl font-bold text-[#1a7a4a]">{selected.amount}</p>
          </div>
        </div>
      )}
    </div>
  );
}
