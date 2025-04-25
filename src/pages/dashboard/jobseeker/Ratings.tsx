
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface Props {
  onTitleChange: (title: string) => void;
}

const JobSeekerRatings = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Ratings & Reviews");
  }, [onTitleChange]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Ratings & Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="text-center">
              <div className="text-5xl font-bold">4.8</div>
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon 
                    key={star} 
                    className={`h-5 w-5 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"}`} 
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-2">Based on 12 reviews</div>
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center">
                <div className="text-sm w-12">5 stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <div className="text-sm w-12 text-right">9 reviews</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm w-12">4 stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "17%" }}></div>
                </div>
                <div className="text-sm w-12 text-right">2 reviews</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm w-12">3 stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "8%" }}></div>
                </div>
                <div className="text-sm w-12 text-right">1 review</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm w-12">2 stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <div className="text-sm w-12 text-right">0 reviews</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm w-12">1 star</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <div className="text-sm w-12 text-right">0 reviews</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium text-gray-600">TD</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Tech Design Inc.</h3>
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon 
                            key={star} 
                            className={`h-4 w-4 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">1 month ago</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 text-sm font-medium">
                      Website Redesign Project
                    </div>
                  </div>
                  <p className="mt-3 text-sm">
                    "James delivered exceptional work on our website redesign project. 
                    His attention to detail and creative solutions exceeded our expectations. 
                    Communication was clear and timely throughout the project."
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium text-gray-600">ES</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-semibold">EcoSolutions Ltd.</h3>
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon 
                            key={star} 
                            className={`h-4 w-4 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">2 months ago</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 text-sm font-medium">
                      Content Writing
                    </div>
                  </div>
                  <p className="mt-3 text-sm">
                    "James wrote excellent content for our blog series. The articles 
                    were well-researched and engaging. Delivered everything on time 
                    and was receptive to feedback."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobSeekerRatings;
