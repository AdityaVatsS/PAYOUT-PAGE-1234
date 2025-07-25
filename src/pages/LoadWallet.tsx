import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wallet, Plus, Minus, ArrowUpRight, ArrowDownLeft, QrCode } from 'lucide-react';

const LoadWallet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Load Wallet</h1>
          <p className="text-muted-foreground">Manage your digital wallet and quick payment options</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wallet Balance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Wallet Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 text-white mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-sm">Available Balance</p>
                    <p className="text-3xl font-bold">$1,250.00</p>
                  </div>
                  <QrCode className="w-8 h-8 text-white/80" />
                </div>
                <div className="mt-4 flex gap-4">
                  <Button variant="secondary" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Funds
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Minus className="w-4 h-4 mr-2" />
                    Withdraw
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <ArrowUpRight className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">$3,250</p>
                  <p className="text-sm text-muted-foreground">Total Loaded</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <ArrowDownLeft className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">$2,000</p>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add $25
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add $50
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add $100
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Custom Amount
              </Button>
            </CardContent>
          </Card>

          {/* Load Wallet Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Load Wallet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="load-amount">Amount to Load</Label>
                  <Input
                    id="load-amount"
                    type="number"
                    placeholder="Enter amount"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="source-account">Source Account</Label>
                  <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                    <option>Main Account (****1234)</option>
                    <option>Savings Account (****5678)</option>
                    <option>Credit Card (****9012)</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button className="flex-1">
                  Load Wallet Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Schedule Load
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Auto-Reload Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Auto-Reload</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="auto-reload-threshold">Reload when balance falls below</Label>
                <Input
                  id="auto-reload-threshold"
                  type="number"
                  placeholder="$50"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="auto-reload-amount">Auto-reload amount</Label>
                <Input
                  id="auto-reload-amount"
                  type="number"
                  placeholder="$100"
                  className="mt-1"
                />
              </div>
              <Button variant="outline" className="w-full">
                Enable Auto-Reload
              </Button>
            </CardContent>
          </Card>

          {/* Recent Wallet Activity */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Wallet Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: 'load', amount: '+$100.00', description: 'Wallet reload from main account', date: '2024-01-15', time: '2:30 PM' },
                  { type: 'spend', amount: '-$25.00', description: 'Payment to Coffee Shop', date: '2024-01-15', time: '10:15 AM' },
                  { type: 'load', amount: '+$50.00', description: 'Quick reload', date: '2024-01-14', time: '5:45 PM' },
                  { type: 'spend', amount: '-$12.50', description: 'Transit payment', date: '2024-01-14', time: '8:30 AM' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {activity.type === 'load' ? (
                        <ArrowUpRight className="w-5 h-5 text-green-500" />
                      ) : (
                        <ArrowDownLeft className="w-5 h-5 text-red-500" />
                      )}
                      <div>
                        <p className="font-medium">{activity.description}</p>
                        <p className="text-sm text-muted-foreground">{activity.date} at {activity.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${
                        activity.type === 'load' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {activity.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoadWallet;