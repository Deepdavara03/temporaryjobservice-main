
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

interface Job {
  id: number;
  title: string;
  company: string;
  category: string;
  status: string;
  postedBy: string;
  postedAt: string;
  applications: number;
}

const JobManagement = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Job Management");
  }, [onTitleChange]);

  // Mock jobs data
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Design Inc.",
      category: "Web Development",
      status: "approved",
      postedBy: "contact@techdesign.com",
      postedAt: "April 8, 2025",
      applications: 5
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "CreativeMinds Agency",
      category: "Design",
      status: "approved",
      postedBy: "info@creativeminds.com",
      postedAt: "April 7, 2025",
      applications: 3
    },
    {
      id: 3,
      title: "Content Writer",
      company: "Global Marketing Inc.",
      category: "Writing",
      status: "pending",
      postedBy: "hiring@globalmarketing.com",
      postedAt: "April 6, 2025",
      applications: 0
    },
    {
      id: 4,
      title: "Social Media Manager",
      company: "Digital Brands Co.",
      category: "Marketing",
      status: "rejected",
      postedBy: "jobs@digitalbrands.com",
      postedAt: "April 5, 2025",
      applications: 0
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "Tech Design Inc.",
      category: "Mobile Development",
      status: "pending",
      postedBy: "contact@techdesign.com",
      postedAt: "April 4, 2025",
      applications: 0
    }
  ]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleStatusChange = (jobId: number, status: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, status } : job
    ));
    
    const statusMessages = {
      approved: "Job approved and now visible to job seekers",
      pending: "Job set to pending review",
      rejected: "Job rejected"
    };
    
    toast.success(statusMessages[status as keyof typeof statusMessages] || "Status updated");
  };

  // Filter jobs based on search, category, and status
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(search.toLowerCase()) || 
      job.company.toLowerCase().includes(search.toLowerCase());
      
    const matchesCategory = categoryFilter === "all" || job.category.toLowerCase() === categoryFilter;
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search jobs by title or company"
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select 
              value={categoryFilter} 
              onValueChange={setCategoryFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="web development">Web Development</SelectItem>
                <SelectItem value="mobile development">Mobile Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="writing">Writing</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
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
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-4">Job</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Applications</div>
              <div className="col-span-3 text-right">Actions</div>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="divide-y">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="grid grid-cols-12 items-center p-3 text-sm">
                    <div className="col-span-4">
                      <div>
                        <div className="font-medium">{job.title}</div>
                        <div className="text-xs text-muted-foreground">{job.company}</div>
                        <div className="text-xs text-muted-foreground mt-1">Posted: {job.postedAt}</div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      {job.category}
                    </div>
                    <div className="col-span-2">
                      <Badge className={`
                        ${job.status === 'approved' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                        ${job.status === 'pending' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : ''}
                        ${job.status === 'rejected' ? 'bg-red-100 text-red-800 hover:bg-red-100' : ''}
                      `}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="col-span-1 text-center">
                      {job.applications}
                    </div>
                    <div className="col-span-3 flex justify-end gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Select 
                        value={job.status}
                        onValueChange={(value) => handleStatusChange(job.id, value)}
                      >
                        <SelectTrigger className="w-[130px] h-8 text-xs">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="approved">
                            <div className="flex items-center">
                              <CheckIcon className="h-3.5 w-3.5 mr-2 text-green-600" />
                              <span>Approve</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="pending">
                            <div className="flex items-center">
                              <XIcon className="h-3.5 w-3.5 mr-2 text-yellow-600" />
                              <span>Pending</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="rejected">
                            <div className="flex items-center">
                              <XIcon className="h-3.5 w-3.5 mr-2 text-red-600" />
                              <span>Reject</span>
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
                No jobs found matching your filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobManagement;
