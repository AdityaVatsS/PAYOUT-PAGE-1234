import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/load-account-details" element={<LoadAccountDetails />} />
          <Route path="/pay-out" element={<PayOut />} />
          <Route path="/load-wallet" element={<LoadWallet />} />
          <Route path="/transaction-summary" element={<TransactionSummary />} />
          <Route path="/complain-report" element={<ComplainReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
