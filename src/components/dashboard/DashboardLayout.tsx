
import { useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  BellIcon, 
  MessageSquareTextIcon, 
  UserIcon, 
  LogOutIcon,
  MenuIcon,
  XIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  pageTitle: string;
  expectedRole: "jobseeker" | "jobprovider" | "admin";
}

const DashboardLayout = ({ 
  children,
  sidebar,
  pageTitle,
  expectedRole
}: DashboardLayoutProps) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notificationCount, setNotificationCount] = useState(3);
  const [messageCount, setMessageCount] = useState(2);

  // Check if user is authenticated and has the correct role
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (user?.role !== expectedRole) {
      navigate(`/dashboard/${user?.role}`);
    }
  }, [isAuthenticated, user, navigate, expectedRole]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Left side - Logo and menu toggle */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none"
            >
              {isSidebarOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
            <div className="ml-4 flex items-center">
              <span className="text-xl font-bold text-primary mr-1">Temporary Job Service</span>
              <span className="text-xl font-bold text-gray-900">WEB</span>
            </div>
            <div className="hidden md:block ml-6 text-gray-500">
              {expectedRole === "jobseeker" && "Job Seeker Dashboard"}
              {expectedRole === "jobprovider" && "Job Provider Dashboard"}
              {expectedRole === "admin" && "Admin Dashboard"}
            </div>
          </div>

          {/* Right side - user menu, notifications */}
          <div className="flex items-center space-x-4">
            {/* Messages */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <MessageSquareTextIcon className="h-5 w-5" />
                  {messageCount > 0 && (
                    <Badge 
                      className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-5 min-h-5 flex items-center justify-center"
                    >
                      {messageCount}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-2 font-medium border-b">Messages</div>
                <div className="py-4 px-2 text-center text-sm text-gray-500">
                  No new messages
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <BellIcon className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <Badge 
                      className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-5 min-h-5 flex items-center justify-center"
                    >
                      {notificationCount}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-2 font-medium border-b">Notifications</div>
                <div className="py-4 px-2 text-center text-sm text-gray-500">
                  No new notifications
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative p-1">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start p-2">
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium text-sm">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
                <DropdownMenuItem 
                  className="flex items-center cursor-pointer"
                  onClick={() => navigate(`/dashboard/${expectedRole}/profile`)}
                >
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="flex items-center text-destructive focus:text-destructive cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-white border-r border-gray-200 w-64 flex-shrink-0 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:relative h-[calc(100vh-64px)] z-30`}
        >
          {sidebar}
        </aside>

        {/* Main content area */}
        <main className={`flex-1 overflow-auto transition-all p-6 ${isSidebarOpen ? "md:ml-0" : "ml-0"}`}>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
