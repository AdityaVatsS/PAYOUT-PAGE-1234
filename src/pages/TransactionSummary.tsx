import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Download, Filter, TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';

const TransactionSummary = () => {
  const transactions = [
    { id: 'TXN001', type: 'Load', amount: '$500.00', status: 'Completed', date: '2024-01-15', time: '2:30 PM', method: 'Credit Card' },
    { id: 'TXN002', type: 'Payment', amount: '-$75.00', status: 'Completed', date: '2024-01-15', time: '10:15 AM', method: 'Wallet' },
    { id: 'TXN003', type: 'Withdrawal', amount: '-$200.00', status: 'Processing', date: '2024-01-14', time: '5:45 PM', method: 'Bank Transfer' },
    { id: 'TXN004', type: 'Load', amount: '$100.00', status: 'Completed', date: '2024-01-14', time: '3:20 PM', method: 'Debit Card' },
    { id: 'TXN005', type: 'Payment', amount: '-$25.00', status: 'Completed', date: '2024-01-14', time: '8:30 AM', method: 'Wallet' },
    { id: 'TXN006', type: 'Load', amount: '$300.00', status: 'Failed', date: '2024-01-13', time: '4:15 PM', method: 'Credit Card' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Transaction Summary</h1>
          <p className="text-muted-foreground">View and manage all your financial transactions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                Total Inflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$5,250.00</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-red-500" />
                Total Outflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$3,180.00</div>
              <p className="text-xs text-muted-foreground">-5% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Net Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$2,070.00</div>
              <p className="text-xs text-muted-foreground">Current period</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Input placeholder="Search transactions..." />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Transaction Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="load">Load</SelectItem>
                    <SelectItem value="payment">Payment</SelectItem>
                    <SelectItem value="withdrawal">Withdrawal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Date Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button>Apply Filters</Button>
              <Button variant="outline">Reset</Button>
              <Button variant="outline" className="ml-auto">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Transaction ID</th>
                    <th className="text-left p-3 font-medium">Type</th>
                    <th className="text-left p-3 font-medium">Amount</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Date & Time</th>
                    <th className="text-left p-3 font-medium">Method</th>
                    <th className="text-left p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-mono text-sm">{transaction.id}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.type === 'Load' ? 'bg-green-100 text-green-800' :
                          transaction.type === 'Payment' ? 'bg-blue-100 text-blue-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className={`p-3 font-medium ${
                        transaction.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {transaction.amount}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          transaction.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="p-3 text-sm">
                        <div>{transaction.date}</div>
                        <div className="text-muted-foreground">{transaction.time}</div>
                      </td>
                      <td className="p-3 text-sm">{transaction.method}</td>
                      <td className="p-3">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">Showing 6 of 156 transactions</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransactionSummary;