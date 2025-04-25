
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { 
  BriefcaseIcon, 
  StarIcon, 
  MessageSquareIcon, 
  UserIcon, 
  KeyIcon,
  HomeIcon,
  PlusCircleIcon,
  UsersIcon,
  FolderIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import JobProviderOverview from "@/pages/dashboard/jobprovider/Overview";
import JobProviderProfile from "@/pages/dashboard/jobprovider/Profile";
import PostJob from "@/pages/dashboard/jobprovider/PostJob";
import ApplicationTracking from "@/pages/dashboard/jobprovider/ApplicationTracking";
import JobProviderProjects from "@/pages/dashboard/jobprovider/Projects";
import JobProviderMessaging from "@/pages/dashboard/jobprovider/Messaging";
import JobProviderRatings from "@/pages/dashboard/jobprovider/Ratings";
import JobProviderChangePassword from "@/pages/dashboard/jobprovider/ChangePassword";

const JobProviderSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Overview",
      icon: HomeIcon,
      path: "/dashboard/jobprovider",
    },
    {
      title: "Post a Job",
      icon: PlusCircleIcon,
      path: "/dashboard/jobprovider/post-job",
    },
    {
      title: "Applications",
      icon: UsersIcon,
      path: "/dashboard/jobprovider/applications",
    },
    {
      title: "Projects",
      icon: FolderIcon,
      path: "/dashboard/jobprovider/projects",
    },
    {
      title: "Messages",
      icon: MessageSquareIcon,
      path: "/dashboard/jobprovider/messaging",
    },
    {
      title: "Ratings & Reviews",
      icon: StarIcon,
      path: "/dashboard/jobprovider/ratings",
    },
    {
      title: "Profile",
      icon: UserIcon,
      path: "/dashboard/jobprovider/profile",
    },
    {
      title: "Change Password",
      icon: KeyIcon,
      path: "/dashboard/jobprovider/change-password",
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

const JobProviderDashboard = () => {
  const [pageTitle, setPageTitle] = useState("Overview");
  
  return (
    <DashboardLayout 
      sidebar={<JobProviderSidebar />} 
      pageTitle={pageTitle}
      expectedRole="jobprovider"
    >
      <Routes>
        <Route path="/" element={<JobProviderOverview onTitleChange={() => setPageTitle("Overview")} />} />
        <Route path="/profile" element={<JobProviderProfile onTitleChange={() => setPageTitle("Profile")} />} />
        <Route path="/post-job" element={<PostJob onTitleChange={() => setPageTitle("Post a Job")} />} />
        <Route path="/applications" element={<ApplicationTracking onTitleChange={() => setPageTitle("Applications")} />} />
        <Route path="/projects" element={<JobProviderProjects onTitleChange={() => setPageTitle("Projects")} />} />
        <Route path="/messaging" element={<JobProviderMessaging onTitleChange={() => setPageTitle("Messages")} />} />
        <Route path="/ratings" element={<JobProviderRatings onTitleChange={() => setPageTitle("Ratings & Reviews")} />} />
        <Route path="/change-password" element={<JobProviderChangePassword onTitleChange={() => setPageTitle("Change Password")} />} />
      </Routes>
    </DashboardLayout>
  );
};

export default JobProviderDashboard;
