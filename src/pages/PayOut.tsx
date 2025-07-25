import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowDownToLine, Building, CreditCard, DollarSign } from 'lucide-react';

const PayOut = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pay-Out</h1>
          <p className="text-muted-foreground">Withdraw funds from your account to your preferred destination</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Balance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Available Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <p className="text-4xl font-bold text-primary">$2,500.00</p>
                <p className="text-muted-foreground mt-2">Available for withdrawal</p>
              </div>
              
              <div className="space-y-3 mt-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pending Withdrawals</span>
                  <span className="font-medium">$250.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reserved Funds</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-medium">Total Balance</span>
                  <span className="font-bold">$2,850.00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Withdrawal Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowDownToLine className="w-5 h-5" />
                Withdraw Funds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="withdrawal-amount">Withdrawal Amount</Label>
                <Input
                  id="withdrawal-amount"
                  type="number"
                  placeholder="Enter amount"
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">Minimum withdrawal: $10.00</p>
              </div>
              
              <div>
                <Label htmlFor="withdrawal-method">Withdrawal Method</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select withdrawal method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="card">Debit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="check">Paper Check</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="account-details">Account Details</Label>
                <Input
                  id="account-details"
                  placeholder="Account number or details"
                  className="mt-1"
                />
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Withdrawal Amount:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>Processing Fee:</span>
                  <span>$2.50</span>
                </div>
                <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                  <span>Total Deduction:</span>
                  <span>$2.50</span>
                </div>
              </div>
              
              <Button className="w-full">
                Request Withdrawal
              </Button>
            </CardContent>
          </Card>

          {/* Withdrawal History */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Withdrawals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { amount: '$750.00', method: 'Bank Transfer', date: '2024-01-14', status: 'Completed', account: '****1234' },
                  { amount: '$300.00', method: 'PayPal', date: '2024-01-10', status: 'Processing', account: 'john@example.com' },
                  { amount: '$500.00', method: 'Debit Card', date: '2024-01-08', status: 'Completed', account: '****5678' },
                ].map((withdrawal, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {withdrawal.method === 'Bank Transfer' ? (
                        <Building className="w-5 h-5 text-primary" />
                      ) : (
                        <CreditCard className="w-5 h-5 text-primary" />
                      )}
                      <div>
                        <p className="font-medium">{withdrawal.amount}</p>
                        <p className="text-sm text-muted-foreground">{withdrawal.method} • {withdrawal.account}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{withdrawal.date}</p>
                      <p className={`text-sm ${
                        withdrawal.status === 'Completed' ? 'text-green-600' : 
                        withdrawal.status === 'Processing' ? 'text-yellow-600' : 'text-gray-600'
                      }`}>
                        {withdrawal.status}
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

export default PayOut;