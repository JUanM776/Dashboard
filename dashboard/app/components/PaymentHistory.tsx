"use client";
import { ArrowUpRight, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const allPayments = [
  {
    name: "Dribbble Design", change: "+18.67%", date: "16 Jun 2025", time: "10:30 PM",
    amount: "89, 345. 23 USD", status: "Successful",
    logo: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#EA4C89"/>
        <circle cx="18" cy="18" r="11" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6"/>
        <path d="M9 14 Q18 16 27 13" stroke="white" strokeWidth="1.2" fill="none" opacity="0.8"/>
        <path d="M8 20 Q18 22 28 19" stroke="white" strokeWidth="1.2" fill="none" opacity="0.8"/>
      </svg>
    ),
  },
  {
    name: "Google Pay", change: "+9.34%", date: "15 Jun 2025", time: "11:45 PM",
    amount: "12, 345. 89 USD", status: "Successful",
    logo: <img src="/icons/google.svg" alt="Google" className="w-9 h-9 rounded-full object-contain bg-gray-50 p-1" />,
  },
  {
    name: "Amazon Shopping", change: "+12.23%", date: "14 Jun 2025", time: "10:15 PM",
    amount: "32, 123. 67 USD", status: "Successful",
    logo: <img src="/icons/amazon-logo.svg" alt="Amazon" className="w-9 h-9 rounded-full object-contain bg-gray-50 p-1" />,
  },
];

type SortKey = "name" | "date" | "amount";

export default function PaymentHistory() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const filtered = allPayments
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey];
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });

  const SortIcon = ({ col }: { col: SortKey }) =>
    sortKey === col
      ? (sortAsc ? <ChevronUp size={12} /> : <ChevronDown size={12} />)
      : <ChevronDown size={12} className="opacity-30" />;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3 h-fit">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-bold text-gray-900 text-base">Payment History</p>
          <p className="text-sm text-gray-400 mt-0.5">Recent payments history</p>
        </div>
        <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search payments..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-3 py-1.5 text-sm text-gray-700 outline-none focus:border-[#1a7a4a] transition-colors"
      />

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left pb-2">
              <button onClick={() => handleSort("name")} className="flex items-center gap-1 text-xs text-gray-400 font-normal">
                Name <SortIcon col="name" />
              </button>
            </th>
            <th className="text-left pb-2">
              <button onClick={() => handleSort("date")} className="flex items-center gap-1 text-xs text-gray-400 font-normal">
                Date <SortIcon col="date" />
              </button>
            </th>
            <th className="text-left text-xs text-gray-400 font-normal pb-2">Time</th>
            <th className="text-left text-xs text-gray-400 font-normal pb-2">Status</th>
            <th className="text-right pb-2">
              <button onClick={() => handleSort("amount")} className="flex items-center gap-1 text-xs text-gray-400 font-normal ml-auto">
                Amount <SortIcon col="amount" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr><td colSpan={5} className="text-center text-sm text-gray-400 py-4">No results found</td></tr>
          ) : filtered.map((p, i) => (
            <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">{p.logo}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                    <p className="text-xs text-green-500">{p.change}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-sm text-gray-500 whitespace-nowrap">{p.date}</td>
              <td className="py-3 text-sm text-gray-500 whitespace-nowrap">{p.time}</td>
              <td className="py-3">
                <span className="flex items-center gap-1.5 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />{p.status}
                </span>
              </td>
              <td className="py-3 text-right text-sm font-medium text-gray-800 whitespace-nowrap">{p.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
