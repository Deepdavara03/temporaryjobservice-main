
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ClockIcon } from "lucide-react";

interface Props {
  onTitleChange: (title: string) => void;
}

const JobSeekerTasks = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("My Tasks");
  }, [onTitleChange]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Assigned Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-5">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Website Redesign - Phase 1</h3>
                  <p className="text-sm text-muted-foreground mt-1">Tech Design Inc.</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit md:w-auto bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  <ClockIcon className="h-3.5 w-3.5 mr-1" /> Due Tomorrow
                </Badge>
              </div>
              
              <div className="mt-4">
                <p className="text-sm">
                  Complete the homepage mockup for client review. Follow the brand
                  guidelines provided in the attached document.
                </p>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-end">
                <Button variant="outline">View Details</Button>
                <Button>Submit Task</Button>
              </div>
            </div>

            <div className="border rounded-lg p-5">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Content Writing - Blog Posts</h3>
                  <p className="text-sm text-muted-foreground mt-1">EcoSolutions Ltd.</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit md:w-auto">
                  Due in 3 days
                </Badge>
              </div>
              
              <div className="mt-4">
                <p className="text-sm">
                  Write two 1,000-word articles on renewable energy trends. Focus on
                  solar and wind power innovations in the residential sector.
                </p>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-end">
                <Button variant="outline">View Details</Button>
                <Button>Submit Task</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-5">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Logo Design</h3>
                  <p className="text-sm text-muted-foreground mt-1">Creative Spark Agency</p>
                </div>
                <Badge className="mt-2 md:mt-0 w-fit md:w-auto bg-green-100 text-green-800 hover:bg-green-100">
                  Completed
                </Badge>
              </div>
              
              <div className="mt-4">
                <p className="text-sm">
                  Created 3 logo concepts and finalized design after client feedback.
                </p>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-end">
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobSeekerTasks;
