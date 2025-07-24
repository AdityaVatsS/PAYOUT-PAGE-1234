import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  amount: string;
  subtitle?: string;
  icon: LucideIcon;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, amount, subtitle, icon: Icon }) => {
  return (
    <Card className="relative overflow-hidden border border-border">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
            <p className="text-2xl font-bold text-foreground">{amount}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;