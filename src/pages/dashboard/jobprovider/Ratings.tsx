
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface Props {
  onTitleChange: (title: string) => void;
}

const JobProviderRatings = ({ onTitleChange }: Props) => {
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
              <div className="text-5xl font-bold">4.9</div>
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon 
                    key={star} 
                    className={`h-5 w-5 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"}`} 
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-2">Based on 23 reviews</div>
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center">
                <div className="text-sm w-12">5 stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="text-sm w-12 text-right">19 reviews</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm w-12">4 stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <div className="text-sm w-12 text-right">3 reviews</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm w-12">3 stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "5%" }}></div>
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
          <CardTitle>Recent Reviews from Freelancers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium text-gray-600">JW</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-semibold">James Wilson</h3>
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
                    "Tech Design Inc. was a pleasure to work with. Clear requirements from the start, prompt feedback, and fair payment. The team was respectful of my process and professional throughout the project."
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium text-gray-600">MR</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Michael Rodriguez</h3>
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon 
                            key={star} 
                            className={`h-4 w-4 ${star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">2 months ago</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 text-sm font-medium">
                      UX/UI Design
                    </div>
                  </div>
                  <p className="mt-3 text-sm">
                    "One of the best clients I've worked with. Tech Design Inc. provided detailed requirements, was responsive to questions, and paid on time. They valued my expertise and made the collaboration smooth."
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

export default JobProviderRatings;
