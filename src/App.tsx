
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import NotFound from "@/pages/NotFound";

// Dashboard Pages
import JobSeekerDashboard from "@/pages/dashboard/jobseeker/Dashboard";
import JobProviderDashboard from "@/pages/dashboard/jobprovider/Dashboard";
import AdminDashboard from "@/pages/dashboard/admin/Dashboard";

// Context Provider
import { AuthProvider } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard/jobseeker/*" element={<JobSeekerDashboard />} />
            <Route path="/dashboard/jobprovider/*" element={<JobProviderDashboard />} />
            <Route path="/dashboard/admin/*" element={<AdminDashboard />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
