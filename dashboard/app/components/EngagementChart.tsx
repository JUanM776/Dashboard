"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const monthlyData = [
  { month: "JAN", value: 1.2 },
  { month: "FEB", value: 2.1 },
  { month: "MAR", value: 1.8 },
  { month: "APR", value: 3.2 },
  { month: "MAY", value: 2.5 },
  { month: "JUN", value: 2.9 },
];

const annualData = [
  { month: "JAN", value: 1.8 },
  { month: "FEB", value: 4.2 },
  { month: "MAR", value: 3.0 },
  { month: "APR", value: 4.9 },
  { month: "MAY", value: 3.3 },
  { month: "JUN", value: 4.1 },
];

const MAX = 5;
const H = 200;
const BAR_W = 44;
const GAP = 22;
const LEFT = 36;
const TOTAL_W = LEFT + annualData.length * (BAR_W + GAP) - GAP + 10;
const yTicks = [0, 1, 2, 3, 4, 5];

export default function EngagementChart() {
  const [mode, setMode] = useState<"monthly" | "annually">("annually");
  const data = mode === "annually" ? annualData : monthlyData;
  const activeBar = mode === "annually" ? "APR" : "APR";

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3 h-fit">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="4" width="16" height="12" rx="2" stroke="#6b7280" strokeWidth="1.5" fill="none"/>
              <line x1="2" y1="8" x2="18" y2="8" stroke="#6b7280" strokeWidth="1.5"/>
              <circle cx="6" cy="6" r="1" fill="#6b7280"/>
              <circle cx="10" cy="6" r="1" fill="#6b7280"/>
            </svg>
          </div>
          <span className="font-semibold text-gray-800 text-sm">Engagement Rate</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode("monthly")}
            className={`px-4 py-1.5 text-sm rounded-full transition-colors ${mode === "monthly" ? "bg-[#1a7a4a] text-white font-medium" : "text-gray-500 hover:bg-gray-100"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setMode("annually")}
            className={`px-4 py-1.5 text-sm rounded-full transition-colors ${mode === "annually" ? "bg-[#1a7a4a] text-white font-medium" : "text-gray-500 hover:bg-gray-100"}`}
          >
            Annually
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <div className="w-full flex-1">
        <svg viewBox={`0 0 ${TOTAL_W} ${H + 30}`} className="w-full h-full" style={{ minWidth: 280 }}>
          <defs>
            <pattern id="stripeLight" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <rect width="8" height="8" fill="#86efac" />
              <line x1="0" y1="0" x2="0" y2="8" stroke="#4ade80" strokeWidth="3" />
            </pattern>
            <pattern id="stripeDark" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <rect width="8" height="8" fill="#15803d" />
              <line x1="0" y1="0" x2="0" y2="8" stroke="#166534" strokeWidth="3" />
            </pattern>
            {data.map((d, i) => {
              const barH = (d.value / MAX) * H;
              const x = LEFT + i * (BAR_W + GAP);
              const y = H - barH;
              return (
                <clipPath key={i} id={`clip-${i}`}>
                  <rect x={x} y={y} width={BAR_W} height={barH} rx={BAR_W / 2} ry={BAR_W / 2} />
                </clipPath>
              );
            })}
          </defs>

          {yTicks.map((tick) => {
            const y = H - (tick / MAX) * H;
            return (
              <g key={tick}>
                <line x1={LEFT} y1={y} x2={TOTAL_W} y2={y} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                <text x={0} y={y + 4} fontSize={11} fill="#9ca3af" textAnchor="start">
                  {tick === 0 ? "0" : `${tick}k`}
                </text>
              </g>
            );
          })}

          {data.map((d, i) => {
            const barH = (d.value / MAX) * H;
            const x = LEFT + i * (BAR_W + GAP);
            const y = H - barH;
            const isActive = d.month === activeBar;
            return (
              <g key={`${mode}-${d.month}`}>
                <rect x={x} y={y} width={BAR_W} height={barH} rx={BAR_W / 2} ry={BAR_W / 2} fill={isActive ? "#15803d" : "#86efac"} />
                <rect x={x} y={y} width={BAR_W} height={barH} fill={isActive ? "url(#stripeDark)" : "url(#stripeLight)"} clipPath={`url(#clip-${i})`} />
                {isActive && (
                  <g>
                    <rect x={x + BAR_W / 2 - 28} y={y - 34} width={56} height={22} rx={11} fill="#1a7a4a" />
                    <text x={x + BAR_W / 2} y={y - 19} fontSize={10} fill="white" textAnchor="middle" fontWeight="600">
                      {mode === "annually" ? "+17.8%" : "+8.4%"}
                    </text>
                    <polygon points={`${x + BAR_W / 2 - 5},${y - 13} ${x + BAR_W / 2 + 5},${y - 13} ${x + BAR_W / 2},${y - 6}`} fill="#1a7a4a" />
                    <circle cx={x + BAR_W / 2} cy={y} r={6} fill="white" stroke="#1a7a4a" strokeWidth={2} />
                  </g>
                )}
                <text x={x + BAR_W / 2} y={H + 20} fontSize={11} fill="#9ca3af" textAnchor="middle">{d.month}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
