import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Upload, FileText, CheckCircle } from 'lucide-react';

const LoadAccountDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Load Account Details</h1>
          <p className="text-muted-foreground">Add funds to your account using various methods</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Load Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Credit/Debit Card</p>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">Direct transfer from your bank account</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Digital Wallet</p>
                      <p className="text-sm text-muted-foreground">PayPal, Apple Pay, Google Pay</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Load Form */}
          <Card>
            <CardHeader>
              <CardTitle>Load Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cardholder">Cardholder Name</Label>
                  <Input
                    id="cardholder"
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>
                
                <Button className="w-full">
                  Load Funds
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Loads */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Load Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { amount: '$500.00', method: 'Credit Card', date: '2024-01-15', status: 'Completed' },
                  { amount: '$250.00', method: 'Bank Transfer', date: '2024-01-12', status: 'Completed' },
                  { amount: '$100.00', method: 'PayPal', date: '2024-01-10', status: 'Pending' },
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div>
                        <p className="font-medium">{transaction.amount}</p>
                        <p className="text-sm text-muted-foreground">{transaction.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{transaction.date}</p>
                      <p className="text-sm text-green-600">{transaction.status}</p>
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

export default LoadAccountDetails;