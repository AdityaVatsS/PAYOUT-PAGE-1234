import React from 'react';
import { Home, User, CreditCard, Wallet, FileText, MessageSquare, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/', active: location.pathname === '/' },
    { icon: User, label: 'Account Details', path: '/account-details', active: location.pathname === '/account-details' },
    { icon: CreditCard, label: 'Load Account Details', path: '/load-account-details', active: location.pathname === '/load-account-details' },
    { icon: CreditCard, label: 'Pay-Out', path: '/pay-out', active: location.pathname === '/pay-out' },
    { icon: Wallet, label: 'Load Wallet', path: '/load-wallet', active: location.pathname === '/load-wallet' },
    { icon: FileText, label: 'Transaction Summary', path: '/transaction-summary', active: location.pathname === '/transaction-summary' },
    { icon: MessageSquare, label: 'Complain Report', path: '/complain-report', active: location.pathname === '/complain-report' },
  ];

  const handleSignOut = () => {
    // Add sign out logic here - for now just show an alert
    if (confirm('Are you sure you want to sign out?')) {
      alert('Sign out successful! You would be redirected to login page.');
      // In a real app, you would clear auth tokens and redirect to login
    }
  };

  return (
    <nav className="bg-nav-bg text-nav-foreground px-6 py-3">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 ${
                    item.active ? 'bg-white/10' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-red-500/20 text-nav-foreground hover:text-red-100"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;