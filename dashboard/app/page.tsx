import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PaymentGoalCard from "./components/PaymentGoalCard";
import EngagementChart from "./components/EngagementChart";
import TotalBalanceCard from "./components/TotalBalanceCard";
import AmountCreditCard from "./components/AmountCreditCard";
import PaymentHistory from "./components/PaymentHistory";
import { Calendar, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-3 md:p-5 flex flex-col gap-3 pb-20 lg:pb-5">
      <Navbar />

      <div className="flex gap-3 flex-1">
        <Sidebar />

        <div className="flex-1 flex flex-col gap-3 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Welcome Back, <span className="text-gray-400 font-normal">Sujon</span>
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <button className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl px-3 py-1.5 text-xs md:text-sm text-gray-600 shadow-sm">
                <Calendar size={14} />
                29 Jun, 2025 - 29 August, 2025
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                <Plus size={14} /> Add New Wallet
              </button>
            </div>
          </div>

          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[0.7fr_2fr_0.7fr] gap-3">
            <PaymentGoalCard />
            <EngagementChart />
            <TotalBalanceCard />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[0.7fr_2fr_0.7fr] gap-3">
            <div className="sm:col-span-2 lg:col-span-2">
              <PaymentHistory />
            </div>
            <AmountCreditCard />
          </div>
        </div>
      </div>
    </div>
  );
}
