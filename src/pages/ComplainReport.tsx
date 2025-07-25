import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, AlertCircle, CheckCircle, Clock, Plus } from 'lucide-react';

const ComplainReport = () => {
  const complaints = [
    {
      id: 'CMP001',
      subject: 'Transaction not reflected',
      category: 'Payment Issue',
      status: 'Open',
      priority: 'High',
      date: '2024-01-15',
      lastUpdate: '2 hours ago'
    },
    {
      id: 'CMP002',
      subject: 'Unable to withdraw funds',
      category: 'Withdrawal Issue',
      status: 'In Progress',
      priority: 'Medium',
      date: '2024-01-14',
      lastUpdate: '1 day ago'
    },
    {
      id: 'CMP003',
      subject: 'Account access problems',
      category: 'Technical Issue',
      status: 'Resolved',
      priority: 'Low',
      date: '2024-01-12',
      lastUpdate: '3 days ago'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Complain Report</h1>
          <p className="text-muted-foreground">Submit and track your complaints and support requests</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Submit New Complaint */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Submit New Complaint
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="complaint-category">Category</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="payment">Payment Issue</SelectItem>
                      <SelectItem value="withdrawal">Withdrawal Issue</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="account">Account Issue</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of your issue"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide detailed information about your complaint..."
                  className="mt-1 min-h-[120px]"
                />
              </div>
              
              <div>
                <Label htmlFor="transaction-id">Related Transaction ID (if applicable)</Label>
                <Input
                  id="transaction-id"
                  placeholder="TXN001, TXN002, etc."
                  className="mt-1"
                />
              </div>
              
              <Button className="w-full">
                Submit Complaint
              </Button>
            </CardContent>
          </Card>

          {/* Complaint Status Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Complaint Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-medium">Open Complaints</p>
                      <p className="text-sm text-muted-foreground">Awaiting response</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">In Progress</p>
                      <p className="text-sm text-muted-foreground">Being processed</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">1</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium">Resolved</p>
                      <p className="text-sm text-muted-foreground">Successfully closed</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-600">8</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Contacts */}
          <Card>
            <CardHeader>
              <CardTitle>Support Contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">Customer Service</p>
                <p className="text-sm text-muted-foreground">support@company.com</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">Technical Support</p>
                <p className="text-sm text-muted-foreground">tech@company.com</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4568</p>
              </div>
              
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">Emergency Line</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
                <p className="text-sm text-muted-foreground">+1 (555) 911-HELP</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Complaints */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Your Complaints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {complaints.map((complaint) => (
                  <div key={complaint.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-sm text-muted-foreground">{complaint.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            complaint.status === 'Open' ? 'bg-red-100 text-red-800' :
                            complaint.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {complaint.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            complaint.priority === 'High' ? 'bg-red-100 text-red-800' :
                            complaint.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {complaint.priority}
                          </span>
                        </div>
                        <h3 className="font-medium text-foreground">{complaint.subject}</h3>
                        <p className="text-sm text-muted-foreground">{complaint.category}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Submitted: {complaint.date} • Last update: {complaint.lastUpdate}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
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

export default ComplainReport;