"use client";
import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react";

const sparkPoints = [3.5, 2.8, 4.8, 3.2, 2.2, 4.2, 3.0, 1.8, 3.8, 2.5, 4.5];

const W = 300;
const H = 120;
const MAX = 5.5;
const MIN = 1.2;

function toCoords(points: number[]) {
  const step = W / (points.length - 1);
  return points.map((v, i) => ({
    x: i * step,
    y: H - ((v - MIN) / (MAX - MIN)) * H,
  }));
}

function buildSmoothPath(points: number[]) {
  const c = toCoords(points);
  let d = `M ${c[0].x.toFixed(1)} ${c[0].y.toFixed(1)}`;
  for (let i = 1; i < c.length; i++) {
    const cpx = ((c[i - 1].x + c[i].x) / 2).toFixed(1);
    d += ` C ${cpx} ${c[i - 1].y.toFixed(1)}, ${cpx} ${c[i].y.toFixed(1)}, ${c[i].x.toFixed(1)} ${c[i].y.toFixed(1)}`;
  }
  return d;
}

function buildArea(points: number[]) {
  return buildSmoothPath(points) + ` L ${W} ${H} L 0 ${H} Z`;
}

export default function TotalBalanceCard() {
  return (
    <div className="bg-white rounded-3xl shadow-sm flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-5 pb-2">
        <div>
          <p className="font-bold text-gray-900 text-base">Payment Goal</p>
          <p className="text-sm text-gray-400 mt-0.5">Total amount goal</p>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
          <ArrowUpRight size={17} />
        </button>
      </div>

      {/* Balance */}
      <div className="text-center px-5 pb-4">
        <p className="text-sm text-gray-400 mb-1">Total Balance</p>
        <p className="text-4xl font-bold text-gray-900 tracking-tight">
          $32,678.<span className="text-gray-400">90</span>
        </p>
      </div>

      {/* Area chart — full width */}
      <div className="relative w-full">
        {[0.25, 0.5, 0.75].map((ratio, i) => (
          <div
            key={i}
            className="absolute w-full border-t border-dashed border-gray-200"
            style={{ top: `${ratio * 100}%` }}
          />
        ))}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: 130, display: "block" }}
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a7a4a" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1a7a4a" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <path d={buildArea(sparkPoints)} fill="url(#areaGrad)" />
          <path
            d={buildSmoothPath(sparkPoints)}
            fill="none"
            stroke="#1a7a4a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 py-4">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#1a7a4a] text-white rounded-full py-3 text-sm font-semibold hover:bg-[#155f3a] transition-colors">
          Send <ArrowUp size={15} />
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-600 rounded-full py-3 text-sm font-semibold hover:bg-gray-200 transition-colors">
          Receive <ArrowDown size={15} />
        </button>
      </div>
    </div>
  );
}
