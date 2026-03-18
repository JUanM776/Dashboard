"use client";
import { ArrowUpRight } from "lucide-react";

const data = [
  { month: "JAN", value: 1.8 },
  { month: "FEB", value: 4.2 },
  { month: "MAR", value: 3.0 },
  { month: "APR", value: 4.9 },
  { month: "MAY", value: 3.3 },
  { month: "JUN", value: 4.1 },
];

const MAX = 5;
const H = 200;
const BAR_W = 52;
const GAP = 28;
const LEFT = 36;
const TOTAL_W = LEFT + data.length * (BAR_W + GAP) - GAP + 10;
const yTicks = [0, 1, 2, 3, 4, 5];

export default function EngagementChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
      {/* Header */}
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
          <span className="font-semibold text-gray-800 text-base">Engagement Rate</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 text-sm text-gray-500 rounded-full hover:bg-gray-100 transition-colors">
            Monthly
          </button>
          <button className="px-4 py-1.5 text-sm bg-[#1a7a4a] text-white rounded-full font-medium">
            Annually
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${TOTAL_W} ${H + 30}`}
          className="w-full"
          style={{ minWidth: 300 }}
        >
          <defs>
            {/* Diagonal stripe pattern for light bars */}
            <pattern id="stripeLight" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <rect width="8" height="8" fill="#86efac" />
              <line x1="0" y1="0" x2="0" y2="8" stroke="#4ade80" strokeWidth="3" />
            </pattern>
            {/* Diagonal stripe pattern for dark bar (APR) */}
            <pattern id="stripeDark" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <rect width="8" height="8" fill="#15803d" />
              <line x1="0" y1="0" x2="0" y2="8" stroke="#166534" strokeWidth="3" />
            </pattern>
            {/* Clip paths per bar */}
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

          {/* Dashed horizontal grid lines */}
          {yTicks.map((tick) => {
            const y = H - (tick / MAX) * H;
            return (
              <g key={tick}>
                <line
                  x1={LEFT}
                  y1={y}
                  x2={TOTAL_W}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text x={0} y={y + 4} fontSize={11} fill="#9ca3af" textAnchor="start">
                  {tick === 0 ? "0" : `${tick}k`}
                </text>
              </g>
            );
          })}

          {/* Bars with stripe pattern */}
          {data.map((d, i) => {
            const barH = (d.value / MAX) * H;
            const x = LEFT + i * (BAR_W + GAP);
            const y = H - barH;
            const isActive = d.month === "APR";

            return (
              <g key={d.month}>
                {/* Bar background shape */}
                <rect
                  x={x} y={y} width={BAR_W} height={barH}
                  rx={BAR_W / 2} ry={BAR_W / 2}
                  fill={isActive ? "#15803d" : "#86efac"}
                />
                {/* Stripe overlay clipped to bar shape */}
                <rect
                  x={x} y={y} width={BAR_W} height={barH}
                  fill={isActive ? "url(#stripeDark)" : "url(#stripeLight)"}
                  clipPath={`url(#clip-${i})`}
                />

                {/* APR tooltip */}
                {isActive && (
                  <g>
                    {/* Tooltip bubble */}
                    <rect x={x + BAR_W / 2 - 28} y={y - 34} width={56} height={22} rx={11} fill="#1a7a4a" />
                    <text x={x + BAR_W / 2} y={y - 19} fontSize={10} fill="white" textAnchor="middle" fontWeight="600">
                      +17.8%
                    </text>
                    {/* Tooltip tail */}
                    <polygon
                      points={`${x + BAR_W / 2 - 5},${y - 13} ${x + BAR_W / 2 + 5},${y - 13} ${x + BAR_W / 2},${y - 6}`}
                      fill="#1a7a4a"
                    />
                    {/* White circle on top of bar */}
                    <circle cx={x + BAR_W / 2} cy={y} r={6} fill="white" stroke="#1a7a4a" strokeWidth={2} />
                  </g>
                )}

                {/* Month label */}
                <text x={x + BAR_W / 2} y={H + 20} fontSize={11} fill="#9ca3af" textAnchor="middle">
                  {d.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
