import React from 'react';
import { Home, User, CreditCard, Wallet, FileText, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: User, label: 'Account Details' },
    { icon: CreditCard, label: 'Load Account Details' },
    { icon: CreditCard, label: 'Pay-Out' },
    { icon: Wallet, label: 'Load Wallet' },
    { icon: FileText, label: 'Transaction Summary' },
    { icon: MessageSquare, label: 'Complain Report' },
  ];

  return (
    <nav className="bg-nav-bg text-nav-foreground px-6 py-3">
      <ul className="flex space-x-6">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 ${
                  item.active ? 'bg-white/10' : ''
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;