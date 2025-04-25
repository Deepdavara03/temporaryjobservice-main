
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserIcon, 
  BriefcaseIcon, 
  AlertTriangleIcon, 
  DollarSignIcon,
  BarChart2Icon
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OverviewProps {
  onTitleChange: (title: string) => void;
}

const AdminOverview = ({ onTitleChange }: OverviewProps) => {
  useEffect(() => {
    onTitleChange("Admin Dashboard");
  }, [onTitleChange]);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12 today
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">356</div>
            <p className="text-xs text-muted-foreground mt-1">
              +28 this week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reported Issues</CardTitle>
            <AlertTriangleIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-red-500 mt-1">
              +3 unresolved
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-green-500 mt-1">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Users Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* User Registrations */}
        <Card>
          <CardHeader>
            <CardTitle>User Registration</CardTitle>
            <CardDescription>New user registrations over time</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <BarChart2Icon className="h-16 w-16 mx-auto mb-4 opacity-20" />
              <p>Chart visualization would appear here</p>
            </div>
          </CardContent>
        </Card>

        {/* User Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
            <CardDescription>Breakdown by user roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex flex-col justify-center space-y-6">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Job Seekers</span>
                  <span className="text-sm font-medium">874</span>
                </div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Job Providers</span>
                  <span className="text-sm font-medium">358</span>
                </div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "29%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Admins</span>
                  <span className="text-sm font-medium">2</span>
                </div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "1%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-blue-100 p-2 rounded-full">
                <UserIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">New User Registration</h4>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Emma Wilson registered as a Job Seeker
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-green-100 p-2 rounded-full">
                <BriefcaseIcon className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">New Job Posted</h4>
                  <span className="text-xs text-muted-foreground">4 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  TechCorp posted a new job: "Senior Backend Developer"
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="bg-yellow-100 p-2 rounded-full">
                <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Report Submitted</h4>
                  <span className="text-xs text-muted-foreground">6 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  A job listing was reported for inappropriate content
                </p>
                <div className="mt-2">
                  <Button size="sm" variant="outline">Review Report</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverview;
