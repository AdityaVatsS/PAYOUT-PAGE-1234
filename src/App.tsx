import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "./pages/Login";
import Index from "./pages/Index";
import AccountDetails from "./pages/AccountDetails";
import LoadAccountDetails from "./pages/LoadAccountDetails";
import PayOut from "./pages/PayOut";
import LoadWallet from "./pages/LoadWallet";
import TransactionSummary from "./pages/TransactionSummary";
import ComplainReport from "./pages/ComplainReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/account-details" element={
              <ProtectedRoute>
                <AccountDetails />
              </ProtectedRoute>
            } />
            <Route path="/load-account-details" element={
              <ProtectedRoute>
                <LoadAccountDetails />
              </ProtectedRoute>
            } />
            <Route path="/pay-out" element={
              <ProtectedRoute>
                <PayOut />
              </ProtectedRoute>
            } />
            <Route path="/load-wallet" element={
              <ProtectedRoute>
                <LoadWallet />
              </ProtectedRoute>
            } />
            <Route path="/transaction-summary" element={
              <ProtectedRoute>
                <TransactionSummary />
              </ProtectedRoute>
            } />
            <Route path="/complain-report" element={
              <ProtectedRoute>
                <ComplainReport />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
