
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "sonner";

interface Props {
  onTitleChange: (title: string) => void;
}

const ApplicationTracking = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Applications");
  }, [onTitleChange]);

  // Mock data for applications
  const [applications, setApplications] = useState([
    { 
      id: 1, 
      job: "Frontend Developer", 
      applicant: "James Wilson", 
      appliedOn: "April 8, 2025", 
      status: "pending",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      experience: "5 years",
      matchScore: 98
    },
    { 
      id: 2, 
      job: "UX/UI Designer", 
      applicant: "Emma Johnson", 
      appliedOn: "April 7, 2025", 
      status: "pending",
      skills: ["Figma", "UI/UX", "Adobe XD", "Wireframing"],
      experience: "3 years",
      matchScore: 85
    },
    { 
      id: 3, 
      job: "Frontend Developer", 
      applicant: "Michael Rodriguez", 
      appliedOn: "April 5, 2025", 
      status: "accepted",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      experience: "4 years",
      matchScore: 90
    },
    { 
      id: 4, 
      job: "Content Writer", 
      applicant: "Sarah Thompson", 
      appliedOn: "April 3, 2025", 
      status: "rejected",
      skills: ["Content Writing", "SEO", "Research", "Editing"],
      experience: "2 years",
      matchScore: 75
    }
  ]);

  const handleStatusChange = (applicationId: number, status: string) => {
    setApplications(applications.map(app => 
      app.id === applicationId ? { ...app, status } : app
    ));
    
    const statusMessages = {
      pending: "Application marked as pending",
      accepted: "Application accepted",
      rejected: "Application rejected",
      interviewing: "Applicant moved to interviewing stage"
    };
    
    toast.success(statusMessages[status as keyof typeof statusMessages] || "Status updated");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Job Applications</CardTitle>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="interviewing">Interviewing</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications.map((application) => (
              <div key={application.id} className="border rounded-lg p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{application.applicant}</h3>
                    <p className="text-sm text-muted-foreground">
                      Applied for: <span className="font-medium">{application.job}</span> on {application.appliedOn}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center">
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">
                      {application.matchScore}% Match
                    </div>
                    <Badge className={`
                      ${application.status === 'pending' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : ''}
                      ${application.status === 'accepted' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                      ${application.status === 'rejected' ? 'bg-red-100 text-red-800 hover:bg-red-100' : ''}
                      ${application.status === 'interviewing' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : ''}
                    `}>
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm mb-2 font-medium">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {application.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm">
                    <span className="font-medium">Experience:</span> {application.experience}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-end gap-2">
                  <Button variant="outline">View Profile</Button>
                  <Button>View Application</Button>
                  <Select 
                    value={application.status}
                    onValueChange={(value) => handleStatusChange(application.id, value)}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Update Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="interviewing">Interviewing</SelectItem>
                      <SelectItem value="accepted">Accept</SelectItem>
                      <SelectItem value="rejected">Reject</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationTracking;
