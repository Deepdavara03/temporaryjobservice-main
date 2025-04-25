
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircleIcon, ClockIcon, XCircleIcon } from "lucide-react";

interface Props {
  onTitleChange: (title: string) => void;
}

const JobProviderProjects = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Projects");
  }, [onTitleChange]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Manage Your Projects</h2>
          <p className="text-sm text-muted-foreground">Track and manage your ongoing projects</p>
        </div>
        <Button>Create New Project</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-5">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">E-commerce Website Redesign</h3>
                  <p className="text-sm text-muted-foreground mt-1">Assigned to: Jessica Chen</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit md:w-auto bg-green-100 text-green-800 hover:bg-green-100">
                  <CheckCircleIcon className="h-3.5 w-3.5 mr-1" /> On Track
                </Badge>
              </div>
              
              <div className="mb-4">
                <p className="text-sm">
                  Complete redesign of e-commerce website with focus on improving user experience and conversion rates.
                </p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span>Start Date: April 1, 2025</span>
                  <span className="mx-2">•</span>
                  <span>Due Date: April 15, 2025</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                  <Button variant="outline">Message</Button>
                  <Button>View Details</Button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-5">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Mobile App UX Improvements</h3>
                  <p className="text-sm text-muted-foreground mt-1">Assigned to: Michael Rodriguez</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit md:w-auto bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  <ClockIcon className="h-3.5 w-3.5 mr-1" /> Needs Attention
                </Badge>
              </div>
              
              <div className="mb-4">
                <p className="text-sm">
                  Improve the user experience of our mobile application with focus on navigation and checkout flow.
                </p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span>Start Date: March 25, 2025</span>
                  <span className="mx-2">•</span>
                  <span>Due Date: April 15, 2025</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                  <Button variant="outline">Message</Button>
                  <Button>View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-5">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Logo Redesign</h3>
                  <p className="text-sm text-muted-foreground mt-1">Assigned to: Amanda Smith</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit md:w-auto bg-green-100 text-green-800 hover:bg-green-100">
                  <CheckCircleIcon className="h-3.5 w-3.5 mr-1" /> Completed
                </Badge>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span>Completed on: March 15, 2025</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                  <Button variant="outline">View Deliverables</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobProviderProjects;
