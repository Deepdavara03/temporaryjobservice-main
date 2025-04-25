
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  onTitleChange: (title: string) => void;
}

const AppliedJobs = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Applied Jobs");
  }, [onTitleChange]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Applied Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground mt-1">WebTech Solutions</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit" variant="outline">
                  Under Review
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Applied on: April 8, 2025
                </p>
              </div>
              <div className="mt-4 flex flex-col md:flex-row gap-2 justify-end">
                <Button variant="outline">View Job</Button>
                <Button variant="outline">Withdraw Application</Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">UX/UI Designer</h3>
                  <p className="text-sm text-muted-foreground mt-1">CreativeMinds Agency</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit bg-green-100 text-green-800 hover:bg-green-100">
                  Accepted
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Applied on: April 5, 2025
                </p>
              </div>
              <div className="mt-4 flex flex-col md:flex-row gap-2 justify-end">
                <Button variant="outline">View Job</Button>
                <Button>View Project Details</Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Content Writer</h3>
                  <p className="text-sm text-muted-foreground mt-1">Global Marketing Inc.</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit bg-red-100 text-red-800 hover:bg-red-100">
                  Rejected
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Applied on: March 28, 2025
                </p>
              </div>
              <div className="mt-4 flex flex-col md:flex-row gap-2 justify-end">
                <Button variant="outline">View Job</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppliedJobs;
