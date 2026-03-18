"use client";
import { LayoutGrid, BarChart2, Wallet, LayoutDashboard, CreditCard, Mail, XCircle, Settings, LogOut } from "lucide-react";

const group1 = [
  { icon: LayoutGrid, active: true },
  { icon: BarChart2 },
  { icon: Wallet },
  { icon: LayoutDashboard },
];

const group2 = [
  { icon: CreditCard },
  { icon: Mail },
  { icon: XCircle },
];

const group3 = [
  { icon: Settings },
  { icon: LogOut },
];

function NavGroup({ items, className = "" }: { items: { icon: React.ElementType; active?: boolean }[]; className?: string }) {
  return (
    <div className={`bg-white flex flex-col items-center gap-1 py-4 px-2 shadow-sm ${className}`} style={{ borderRadius: 40 }}>
      {items.map(({ icon: Icon, active }, i) => (
        <button
          key={i}
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-colors ${
            active ? "bg-[#1a7a4a] text-white" : "text-gray-400 hover:bg-gray-100"
          }`}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  );
}

function MobileNav() {
  const allItems: { icon: React.ElementType; active?: boolean }[] = [...group1, ...group2, ...group3];
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex justify-around z-50 shadow-lg">
      {allItems.slice(0, 6).map(({ icon: Icon, active }, i) => (
        <button
          key={i}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
            active ? "bg-[#1a7a4a] text-white" : "text-gray-400"
          }`}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  );
}

export default function Sidebar() {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-16 self-stretch gap-3">
        <NavGroup items={group1} />
        <NavGroup items={group2} />
        <div className="flex-1" />
        <NavGroup items={group3} />
      </aside>

      {/* Mobile bottom nav */}
      <MobileNav />
    </>
  );
}
