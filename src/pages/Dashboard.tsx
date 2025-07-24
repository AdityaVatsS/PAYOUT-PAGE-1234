import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import DashboardCard from '@/components/DashboardCard';
import { 
  Wallet, 
  PiggyBank, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Users,
  DollarSign 
} from 'lucide-react';

const Dashboard = () => {
  const dashboardData = [
    {
      title: "TOTAL BALANCE",
      amount: "₹ 0",
      subtitle: "Lean Balance ₹ 0",
      icon: Wallet
    },
    {
      title: "TOTAL HOLD BALANCE", 
      amount: "₹ 0",
      subtitle: "Disputed Amount ₹ 0",
      icon: PiggyBank
    },
    {
      title: "WALLET LOAD TODAY'S",
      amount: "₹ 0", 
      subtitle: "Total ₹ 0",
      icon: TrendingUp
    },
    {
      title: "PAY-IN TODAY'S",
      amount: "₹ 0",
      subtitle: "Total ₹ 0", 
      icon: ArrowDownLeft
    },
    {
      title: "TODAY PAYOUT",
      amount: "₹ 0",
      subtitle: "Total ₹ 0",
      icon: ArrowUpRight
    },
    {
      title: "TODAY BULK PAYOUT",
      amount: "₹ 0",
      subtitle: "Total ₹ 0",
      icon: Users
    },
    {
      title: "CHARGES",
      amount: "₹ 0",
      subtitle: "Total ₹ 0",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Welcome To Payout Online Pvt. Ltd.</h1>
          <nav className="text-sm text-muted-foreground">
            <span>Dashboard</span> <span className="mx-2">/</span> <span>Dashboard</span>
          </nav>
        </div>

        <div className="mb-8">
          <HeroBanner />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dashboardData.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              amount={item.amount}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          ))}
        </div>
      </main>

      <footer className="mt-12 border-t border-border py-6 px-6 text-center">
        <p className="text-sm text-muted-foreground">
          Copyright © 2021 <span className="text-primary">Payout Online Pvt. Ltd.</span> Designed by Payout Online Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;