
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { CheckIcon, SearchIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

interface Props {
  onTitleChange: (title: string) => void;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  lastActive: string;
}

const UserManagement = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("User Management");
  }, [onTitleChange]);

  // Mock users data
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "James Wilson",
      email: "james.wilson@example.com",
      role: "jobseeker",
      status: "active",
      createdAt: "April 1, 2025",
      lastActive: "1 hour ago"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      email: "sarah.thompson@example.com",
      role: "jobseeker",
      status: "active",
      createdAt: "March 28, 2025",
      lastActive: "3 hours ago"
    },
    {
      id: 3,
      name: "Tech Design Inc.",
      email: "contact@techdesign.com",
      role: "jobprovider",
      status: "active",
      createdAt: "March 25, 2025",
      lastActive: "5 hours ago"
    },
    {
      id: 4,
      name: "CreativeMinds Agency",
      email: "info@creativeminds.com",
      role: "jobprovider",
      status: "active",
      createdAt: "March 20, 2025",
      lastActive: "1 day ago"
    },
    {
      id: 5,
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      role: "jobseeker",
      status: "suspended",
      createdAt: "March 15, 2025",
      lastActive: "10 days ago"
    }
  ]);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleStatusChange = (userId: number, status: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status } : user
    ));
    
    const statusMessages = {
      active: "User activated successfully",
      suspended: "User suspended",
      banned: "User banned"
    };
    
    toast.success(statusMessages[status as keyof typeof statusMessages] || "Status updated");
  };

  // Filter users based on search, role, and status
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(search.toLowerCase()) || 
      user.email.toLowerCase().includes(search.toLowerCase());
      
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search users by name or email"
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select 
              value={roleFilter} 
              onValueChange={setRoleFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="jobseeker">Job Seekers</SelectItem>
                <SelectItem value="jobprovider">Job Providers</SelectItem>
                <SelectItem value="admin">Admins</SelectItem>
              </SelectContent>
            </Select>
            <Select 
              value={statusFilter} 
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="banned">Banned</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-3">User</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Registered</div>
              <div className="col-span-3 text-right">Actions</div>
            </div>
            
            {filteredUsers.length > 0 ? (
              <div className="divide-y">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="grid grid-cols-12 items-center p-3 text-sm">
                    <div className="col-span-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-medium text-gray-600">
                            {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <Badge variant="outline" className="capitalize">
                        {user.role === "jobseeker" ? "Job Seeker" : 
                         user.role === "jobprovider" ? "Job Provider" : "Admin"}
                      </Badge>
                    </div>
                    <div className="col-span-2">
                      <Badge className={`
                        ${user.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                        ${user.status === 'suspended' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : ''}
                        ${user.status === 'banned' ? 'bg-red-100 text-red-800 hover:bg-red-100' : ''}
                      `}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="col-span-2 text-muted-foreground">
                      {user.createdAt}
                    </div>
                    <div className="col-span-3 flex justify-end gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Select 
                        value={user.status}
                        onValueChange={(value) => handleStatusChange(user.id, value)}
                      >
                        <SelectTrigger className="w-[130px] h-8 text-xs">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">
                            <div className="flex items-center">
                              <CheckIcon className="h-3.5 w-3.5 mr-2 text-green-600" />
                              <span>Activate</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="suspended">
                            <div className="flex items-center">
                              <XIcon className="h-3.5 w-3.5 mr-2 text-yellow-600" />
                              <span>Suspend</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="banned">
                            <div className="flex items-center">
                              <XIcon className="h-3.5 w-3.5 mr-2 text-red-600" />
                              <span>Ban</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-muted-foreground">
                No users found matching your filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
