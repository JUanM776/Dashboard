import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PaymentGoalCard from "./components/PaymentGoalCard";
import EngagementChart from "./components/EngagementChart";
import TotalBalanceCard from "./components/TotalBalanceCard";
import AmountCreditCard from "./components/AmountCreditCard";
import MandatoryPayments from "./components/MandatoryPayments";
import PaymentHistory from "./components/PaymentHistory";
import { Calendar, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 md:p-6">
      {/* Navbar */}
      <div className="mb-4">
        <Navbar />
      </div>

      <div className="flex gap-4 items-stretch">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back, <span className="text-gray-400 font-normal">Sujon</span>
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 border border-gray-200 bg-white rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                <Calendar size={16} />
                29 Jun, 2025 - 29 August, 2025
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Plus size={16} /> Add New Wallet
              </button>
            </div>
          </div>

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PaymentGoalCard />
            <EngagementChart />
            <div className="flex flex-col gap-4">
              <TotalBalanceCard />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <PaymentHistory />
            </div>
            <div className="flex flex-col gap-3">
              <AmountCreditCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
