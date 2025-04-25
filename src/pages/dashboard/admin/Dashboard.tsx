
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboardIcon, 
  UsersIcon, 
  BriefcaseIcon, 
  ShieldAlertIcon, 
  SettingsIcon,
  BarChart3Icon,
  BanIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminOverview from "@/pages/dashboard/admin/Overview";
import UserManagement from "@/pages/dashboard/admin/UserManagement";
import JobManagement from "@/pages/dashboard/admin/JobManagement";
import ReportedContent from "@/pages/dashboard/admin/ReportedContent";
import AdminSettings from "@/pages/dashboard/admin/Settings";
import Analytics from "@/pages/dashboard/admin/Analytics";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Overview",
      icon: LayoutDashboardIcon,
      path: "/dashboard/admin",
    },
    {
      title: "User Management",
      icon: UsersIcon,
      path: "/dashboard/admin/users",
    },
    {
      title: "Job Management",
      icon: BriefcaseIcon,
      path: "/dashboard/admin/jobs",
    },
    {
      title: "Reported Content",
      icon: ShieldAlertIcon,
      path: "/dashboard/admin/reported",
    },
    {
      title: "Analytics",
      icon: BarChart3Icon,
      path: "/dashboard/admin/analytics",
    },
    {
      title: "Settings",
      icon: SettingsIcon,
      path: "/dashboard/admin/settings",
    },
  ];

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={cn(
              "w-full flex items-center py-2 px-3 rounded-md text-sm transition-colors",
              location.pathname === item.path
                ? "bg-primary text-primary-foreground"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [pageTitle, setPageTitle] = useState("Admin Dashboard");
  
  return (
    <DashboardLayout 
      sidebar={<AdminSidebar />} 
      pageTitle={pageTitle}
      expectedRole="admin"
    >
      <Routes>
        <Route path="/" element={<AdminOverview onTitleChange={() => setPageTitle("Admin Dashboard")} />} />
        <Route path="/users" element={<UserManagement onTitleChange={() => setPageTitle("User Management")} />} />
        <Route path="/jobs" element={<JobManagement onTitleChange={() => setPageTitle("Job Management")} />} />
        <Route path="/reported" element={<ReportedContent onTitleChange={() => setPageTitle("Reported Content")} />} />
        <Route path="/analytics" element={<Analytics onTitleChange={() => setPageTitle("Analytics")} />} />
        <Route path="/settings" element={<AdminSettings onTitleChange={() => setPageTitle("Settings")} />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AdminDashboard;
