
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Props {
  onTitleChange: (title: string) => void;
}

const PostJob = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Post a Job");
  }, [onTitleChange]);

  const [jobData, setJobData] = useState({
    title: "",
    category: "",
    skills: "",
    description: "",
    duration: "",
    budget: "",
    location: "",
    remoteAllowed: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setJobData({
      ...jobData,
      remoteAllowed: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobData.title || !jobData.description || !jobData.skills) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Here you would send the job data to your backend
    console.log("Posting job:", jobData);
    toast.success("Job posted successfully!");
    
    // Reset form
    setJobData({
      title: "",
      category: "",
      skills: "",
      description: "",
      duration: "",
      budget: "",
      location: "",
      remoteAllowed: true,
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Post a New Job</CardTitle>
          <CardDescription>
            Fill in the details below to post a new job opportunity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Frontend Developer for E-commerce Website"
                value={jobData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={jobData.category} 
                  onValueChange={(value) => handleSelectChange("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Web Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="writing">Content Writing</SelectItem>
                    <SelectItem value="admin">Administrative</SelectItem>
                    <SelectItem value="customer_service">Customer Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select 
                  value={jobData.duration} 
                  onValueChange={(value) => handleSelectChange("duration", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less_than_week">Less than a week</SelectItem>
                    <SelectItem value="1_2_weeks">1-2 weeks</SelectItem>
                    <SelectItem value="3_4_weeks">3-4 weeks</SelectItem>
                    <SelectItem value="1_3_months">1-3 months</SelectItem>
                    <SelectItem value="3_6_months">3-6 months</SelectItem>
                    <SelectItem value="more_than_6">More than 6 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="skills">Required Skills *</Label>
              <Textarea
                id="skills"
                name="skills"
                placeholder="e.g. React, JavaScript, HTML, CSS, Tailwind CSS"
                value={jobData.skills}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-muted-foreground">
                Separate skills with commas. These will be used to match your job with qualified professionals.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Job Description *</Label>
              <Textarea
                id="description"
                name="description"
                rows={6}
                placeholder="Provide detailed information about the job, requirements, and expectations..."
                value={jobData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="e.g. $1000-1500 or $50-70/hr"
                  value={jobData.budget}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. San Francisco, CA"
                  value={jobData.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remoteAllowed" 
                checked={jobData.remoteAllowed}
                onCheckedChange={handleCheckboxChange}
              />
              <label
                htmlFor="remoteAllowed"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                This job can be done remotely
              </label>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Post Job
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostJob;
