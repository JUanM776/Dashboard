"use client";
import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import Toast from "./Toast";

const sparkPoints = [3.5, 2.8, 4.8, 3.2, 2.2, 4.2, 3.0, 1.8, 3.8, 2.5, 4.5];
const W = 300;
const H = 80;
const MAX = 5.5;
const MIN = 1.2;

function toCoords(points: number[]) {
  const step = W / (points.length - 1);
  return points.map((v, i) => ({ x: i * step, y: H - ((v - MIN) / (MAX - MIN)) * H }));
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
  const [toast, setToast] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden h-fit">
      <div className="flex items-start justify-between px-4 pt-4 pb-1">
        <div>
          <p className="font-bold text-gray-900 text-sm">Payment Goal</p>
          <p className="text-xs text-gray-400">Total amount goal</p>
        </div>
        <button
          onClick={() => setToast("Opening details...")}
          className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
        >
          <ArrowUpRight size={13} />
        </button>
      </div>

      <div className="text-center px-4 pb-2">
        <p className="text-xs text-gray-400 mb-0.5">Total Balance</p>
        <p className="text-2xl font-bold text-gray-900 tracking-tight">
          $32,678.<span className="text-gray-400">90</span>
        </p>
      </div>

      <div className="relative w-full">
        {[0.3, 0.6].map((r, i) => (
          <div key={i} className="absolute w-full border-t border-dashed border-gray-100" style={{ top: `${r * 100}%` }} />
        ))}
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" style={{ height: 80, display: "block" }}>
          <defs>
            <linearGradient id="areaGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a7a4a" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1a7a4a" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path d={buildArea(sparkPoints)} fill="url(#areaGrad2)" />
          <path d={buildSmoothPath(sparkPoints)} fill="none" stroke="#1a7a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex gap-2 px-4 py-3">
        <button
          onClick={() => setToast("Send initiated — enter amount to continue")}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#1a7a4a] text-white rounded-full py-2 text-xs font-semibold hover:bg-[#155f3a] transition-colors"
        >
          Send <ArrowUp size={12} />
        </button>
        <button
          onClick={() => setToast("Receive — share your wallet address")}
          className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 text-gray-600 rounded-full py-2 text-xs font-semibold hover:bg-gray-200 transition-colors"
        >
          Receive <ArrowDown size={12} />
        </button>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
}
