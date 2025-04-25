
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

interface Report {
  id: number;
  type: string;
  contentTitle: string;
  reportedItem: string;
  reportedBy: string;
  reason: string;
  status: string;
  reportedAt: string;
}

const ReportedContent = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Reported Content");
  }, [onTitleChange]);

  // Mock reports data
  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      type: "job",
      contentTitle: "Suspicious Job Listing",
      reportedItem: "Data Entry Specialist",
      reportedBy: "james.wilson@example.com",
      reason: "This job is asking for payment upfront, might be a scam",
      status: "pending",
      reportedAt: "April 10, 2025"
    },
    {
      id: 2,
      type: "user",
      contentTitle: "Inappropriate User Behavior",
      reportedItem: "robert.johnson@example.com",
      reportedBy: "info@creativeminds.com",
      reason: "User is sending inappropriate messages",
      status: "investigating",
      reportedAt: "April 9, 2025"
    },
    {
      id: 3,
      type: "review",
      contentTitle: "Fake Review",
      reportedItem: "Review for Tech Design Inc.",
      reportedBy: "contact@techdesign.com",
      reason: "This review contains false information",
      status: "resolved",
      reportedAt: "April 5, 2025"
    }
  ]);

  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const handleStatusChange = (reportId: number, status: string) => {
    setReports(reports.map(report => 
      report.id === reportId ? { ...report, status } : report
    ));
    
    const statusMessages = {
      pending: "Report marked as pending",
      investigating: "Report is now being investigated",
      resolved: "Report marked as resolved",
      dismissed: "Report has been dismissed"
    };
    
    toast.success(statusMessages[status as keyof typeof statusMessages] || "Status updated");
  };

  // Filter reports based on status and type
  const filteredReports = reports.filter(report => {
    const matchesStatus = statusFilter === "all" || report.status === statusFilter;
    const matchesType = typeFilter === "all" || report.type === typeFilter;
    
    return matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Reported Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <Select 
              value={typeFilter} 
              onValueChange={setTypeFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="job">Jobs</SelectItem>
                <SelectItem value="user">Users</SelectItem>
                <SelectItem value="review">Reviews</SelectItem>
                <SelectItem value="message">Messages</SelectItem>
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
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="investigating">Investigating</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="dismissed">Dismissed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <Card key={report.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{report.contentTitle}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline" className="capitalize">
                            {report.type}
                          </Badge>
                          <Badge className={`
                            ${report.status === 'pending' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : ''}
                            ${report.status === 'investigating' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : ''}
                            ${report.status === 'resolved' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                            ${report.status === 'dismissed' ? 'bg-gray-100 text-gray-800 hover:bg-gray-100' : ''}
                          `}>
                            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                        Reported on {report.reportedAt}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Reported Item:</p>
                        <p className="text-sm text-muted-foreground">{report.reportedItem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Reported By:</p>
                        <p className="text-sm text-muted-foreground">{report.reportedBy}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium">Reason:</p>
                      <p className="text-sm">{report.reason}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-end gap-2">
                      <Button variant="outline">View Details</Button>
                      <Select 
                        value={report.status}
                        onValueChange={(value) => handleStatusChange(report.id, value)}
                      >
                        <SelectTrigger className="w-[160px]">
                          <SelectValue placeholder="Update Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Mark as Pending</SelectItem>
                          <SelectItem value="investigating">Investigating</SelectItem>
                          <SelectItem value="resolved">Mark as Resolved</SelectItem>
                          <SelectItem value="dismissed">Dismiss Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="py-12 text-center text-muted-foreground">
                No reports found matching your filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportedContent;
