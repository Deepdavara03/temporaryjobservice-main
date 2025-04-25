
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BellIcon, XIcon } from "lucide-react";

interface Props {
  onTitleChange: (title: string) => void;
}

const JobAlerts = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Job Alerts");
  }, [onTitleChange]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Matched Job Alerts</CardTitle>
          <div className="text-sm text-muted-foreground">
            Based on your skills and preferences
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 relative">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <BellIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-semibold text-lg">React Native Developer</h3>
                    <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-100">
                      100% Match
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    MobileApp Solutions • Posted 12 hours ago
                  </p>
                  <p className="mt-2 text-sm">
                    Looking for a skilled React Native developer to help build a cross-platform
                    e-commerce mobile application. 2-month contract with possible extension.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Redux</Badge>
                    <Badge variant="outline">Mobile Development</Badge>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button>View Job</Button>
                    <Button variant="outline">Apply Now</Button>
                  </div>
                </div>
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="border rounded-lg p-4 relative">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <BellIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-semibold text-lg">UI/UX Designer for Dashboard</h3>
                    <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-100">
                      95% Match
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Bright Analytics • Posted 1 day ago
                  </p>
                  <p className="mt-2 text-sm">
                    Seeking a UI/UX designer to improve our analytics dashboard. 
                    Should have experience with data visualization and user testing.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">UI/UX</Badge>
                    <Badge variant="outline">Data Visualization</Badge>
                    <Badge variant="outline">Dashboard Design</Badge>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button>View Job</Button>
                    <Button variant="outline">Apply Now</Button>
                  </div>
                </div>
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobAlerts;
