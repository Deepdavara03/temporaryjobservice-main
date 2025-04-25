
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { 
  BriefcaseIcon, 
  BellIcon, 
  ListTodoIcon, 
  StarIcon, 
  MessageSquareIcon, 
  UserIcon, 
  KeyIcon,
  HomeIcon,
  CheckCircleIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import JobSeekerOverview from "@/pages/dashboard/jobseeker/Overview";
import AppliedJobs from "@/pages/dashboard/jobseeker/AppliedJobs";
import JobAlerts from "@/pages/dashboard/jobseeker/JobAlerts";
import JobSeekerTasks from "@/pages/dashboard/jobseeker/Tasks";
import JobSeekerRatings from "@/pages/dashboard/jobseeker/Ratings";
import JobSeekerMessaging from "@/pages/dashboard/jobseeker/Messaging";
import JobSeekerProfile from "@/pages/dashboard/jobseeker/Profile";
import ChangePassword from "@/pages/dashboard/jobseeker/ChangePassword";

const JobSeekerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Overview",
      icon: HomeIcon,
      path: "/dashboard/jobseeker",
    },
    {
      title: "Applied Jobs",
      icon: BriefcaseIcon,
      path: "/dashboard/jobseeker/applied-jobs",
    },
    {
      title: "Job Alerts",
      icon: BellIcon,
      path: "/dashboard/jobseeker/job-alerts",
    },
    {
      title: "My Tasks",
      icon: ListTodoIcon,
      path: "/dashboard/jobseeker/tasks",
    },
    {
      title: "Ratings & Reviews",
      icon: StarIcon,
      path: "/dashboard/jobseeker/ratings",
    },
    {
      title: "Messages",
      icon: MessageSquareIcon,
      path: "/dashboard/jobseeker/messaging",
    },
    {
      title: "Profile",
      icon: UserIcon,
      path: "/dashboard/jobseeker/profile",
    },
    {
      title: "Change Password",
      icon: KeyIcon,
      path: "/dashboard/jobseeker/change-password",
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

const JobSeekerDashboard = () => {
  const [pageTitle, setPageTitle] = useState("Overview");
  
  return (
    <DashboardLayout 
      sidebar={<JobSeekerSidebar />} 
      pageTitle={pageTitle}
      expectedRole="jobseeker"
    >
      <Routes>
        <Route path="/" element={<JobSeekerOverview onTitleChange={() => setPageTitle("Overview")} />} />
        <Route path="/applied-jobs" element={<AppliedJobs onTitleChange={() => setPageTitle("Applied Jobs")} />} />
        <Route path="/job-alerts" element={<JobAlerts onTitleChange={() => setPageTitle("Job Alerts")} />} />
        <Route path="/tasks" element={<JobSeekerTasks onTitleChange={() => setPageTitle("My Tasks")} />} />
        <Route path="/ratings" element={<JobSeekerRatings onTitleChange={() => setPageTitle("Ratings & Reviews")} />} />
        <Route path="/messaging" element={<JobSeekerMessaging onTitleChange={() => setPageTitle("Messages")} />} />
        <Route path="/profile" element={<JobSeekerProfile onTitleChange={() => setPageTitle("Profile")} />} />
        <Route path="/change-password" element={<ChangePassword onTitleChange={() => setPageTitle("Change Password")} />} />
      </Routes>
    </DashboardLayout>
  );
};

export default JobSeekerDashboard;
