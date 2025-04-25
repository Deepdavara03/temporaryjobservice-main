
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BriefcaseIcon, 
  BellIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  StarIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OverviewProps {
  onTitleChange: (title: string) => void;
}

const JobSeekerOverview = ({ onTitleChange }: OverviewProps) => {
  useEffect(() => {
    onTitleChange("Overview");
  }, [onTitleChange]);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applied Jobs</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">
              2 active applications
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Job Alerts</CardTitle>
            <BellIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on your skills
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <CheckCircleIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">
              1 due tomorrow
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <StarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-muted-foreground mt-1">
              From 12 reviews
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 border rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <ClockIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Website Redesign - Phase 1</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete the homepage mockup for client review
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-destructive">Due Tomorrow</div>
                <div className="mt-1 text-xs text-muted-foreground">Tech Design Inc.</div>
              </div>
            </div>
            
            <div className="flex items-start justify-between p-4 border rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <ClockIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Content Writing - Blog Posts</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Write two 1,000-word articles on renewable energy
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">Due in 3 days</div>
                <div className="mt-1 text-xs text-muted-foreground">EcoSolutions Ltd.</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Job Matches */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Job Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground mt-1">WebTech Solutions</p>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  98% Match
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Looking for an experienced frontend developer to help with our 
                  e-commerce platform redesign. 3-week project with possible extension.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">TypeScript</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">E-commerce</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-muted-foreground">Posted 2 days ago</span>
                  <span className="mx-2">•</span>
                  <span className="text-muted-foreground">$50-70/hr</span>
                  <span className="mx-2">•</span>
                  <span className="text-muted-foreground">Remote</span>
                </div>
                <Button>View Details</Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">UX/UI Designer</h3>
                  <p className="text-sm text-muted-foreground mt-1">CreativeMinds Agency</p>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  95% Match
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Seeking a UI/UX designer for a 2-month project to redesign our mobile app. 
                  Looking for someone with experience in financial apps.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Figma</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Mobile Design</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">User Testing</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">Wireframing</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-muted-foreground">Posted 3 days ago</span>
                  <span className="mx-2">•</span>
                  <span className="text-muted-foreground">$4,000-5,000</span>
                  <span className="mx-2">•</span>
                  <span className="text-muted-foreground">Remote</span>
                </div>
                <Button>View Details</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobSeekerOverview;
