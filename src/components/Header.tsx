import React from 'react';

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-4 px-6">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">PAYOUT ONLINE PVT LTD.</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;