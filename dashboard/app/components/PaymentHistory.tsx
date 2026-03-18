"use client";
import { ArrowUpRight } from "lucide-react";

const payments = [
  {
    name: "Dribbble Design",
    change: "+18.67%",
    date: "16 Jun 2025",
    time: "10:30 PM",
    amount: "89, 345. 23 USD",
    logo: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#EA4C89"/>
        <path d="M18 6C11.373 6 6 11.373 6 18s5.373 12 12 12 12-5.373 12-12S24.627 6 18 6z" fill="#EA4C89"/>
        <path d="M18 6c-3.3 0-6.3 1.35-8.49 3.51C11.34 12.06 14.52 13.8 18.3 14.1c.57-2.76 1.02-5.49 1.2-8.07C19.02 6.03 18.51 6 18 6z" fill="white" opacity="0.3"/>
        <path d="M27.9 10.5c-1.83 2.28-4.62 3.84-7.8 4.2-.18 2.94-.12 5.91.18 8.82 3.96-1.08 7.02-4.02 8.28-7.8-.24-1.8-.36-3.48-.66-5.22z" fill="white" opacity="0.3"/>
        <path d="M9.3 21.9c1.56.66 3.27 1.02 5.07 1.02 1.62 0 3.18-.3 4.62-.84-.3-2.88-.36-5.79-.18-8.67-3.96-.36-7.32-2.22-9.51-5.01C7.8 11.04 7.2 13.44 7.2 16c0 2.16.75 4.14 2.1 5.9z" fill="white" opacity="0.3"/>
        <circle cx="18" cy="18" r="11" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6"/>
        <path d="M9 14 Q18 16 27 13" stroke="white" strokeWidth="1.2" fill="none" opacity="0.8"/>
        <path d="M8 20 Q18 22 28 19" stroke="white" strokeWidth="1.2" fill="none" opacity="0.8"/>
      </svg>
    ),
  },
  {
    name: "Google Pay",
    change: "+9.34%",
    date: "15 Jun 2025",
    time: "11:45 PM",
    amount: "12, 345. 89 USD",
    logo: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#f8f8f8"/>
        <text x="18" y="23" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#4285F4">G</text>
        <text x="18" y="23" textAnchor="middle" fontSize="18" fontWeight="bold">
          <tspan fill="#4285F4">G</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Amazon Shopping",
    change: "+12.23%",
    date: "14 Jun 2025",
    time: "10:15 PM",
    amount: "32, 123. 67 USD",
    logo: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#f8f8f8"/>
        <text x="18" y="24" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FF9900">a</text>
      </svg>
    ),
  },
];

export default function PaymentHistory() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-bold text-gray-900 text-base">Payment History</p>
          <p className="text-sm text-gray-400 mt-0.5">Recent payments history</p>
        </div>
        <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-xs text-gray-400 font-normal pb-3">Name</th>
            <th className="text-left text-xs text-gray-400 font-normal pb-3">Date</th>
            <th className="text-left text-xs text-gray-400 font-normal pb-3">Time</th>
            <th className="text-left text-xs text-gray-400 font-normal pb-3">Status</th>
            <th className="text-right text-xs text-gray-400 font-normal pb-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, i) => (
            <tr key={i} className="border-t border-gray-100">
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                    {p.logo}
                  </div>
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
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  Successful
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
