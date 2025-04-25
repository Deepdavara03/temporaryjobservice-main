
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface Props {
  onTitleChange: (title: string) => void;
}

const AdminSettings = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Settings");
  }, [onTitleChange]);

  const [generalSettings, setGeneralSettings] = useState({
    siteName: "SkillSpark",
    siteDescription: "A platform connecting talented professionals with exciting temporary job opportunities.",
    contactEmail: "support@skillspark.com",
    adminNotificationEmail: "admin@skillspark.com"
  });

  const [featureSettings, setFeatureSettings] = useState({
    enableRegistration: true,
    enableJobPosting: true,
    moderateJobsBeforePublishing: true,
    moderateReviewsBeforePublishing: true,
    enableMessaging: true,
    enableNotifications: true
  });

  const handleGeneralSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: value,
    });
  };

  const handleFeatureToggle = (feature: keyof typeof featureSettings) => {
    setFeatureSettings({
      ...featureSettings,
      [feature]: !featureSettings[feature],
    });
  };

  const handleSaveSettings = () => {
    // Here you would send the settings to your backend
    console.log("Saving settings:", { generalSettings, featureSettings });
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>
            Configure basic platform settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  name="siteName"
                  value={generalSettings.siteName}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={generalSettings.contactEmail}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  name="siteDescription"
                  rows={3}
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminNotificationEmail">Admin Notification Email</Label>
                <Input
                  id="adminNotificationEmail"
                  name="adminNotificationEmail"
                  type="email"
                  value={generalSettings.adminNotificationEmail}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feature Settings</CardTitle>
          <CardDescription>
            Enable or disable platform features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">User Registration</h4>
                <p className="text-sm text-muted-foreground">
                  Allow new users to register on the platform
                </p>
              </div>
              <Switch
                checked={featureSettings.enableRegistration}
                onCheckedChange={() => handleFeatureToggle("enableRegistration")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Job Posting</h4>
                <p className="text-sm text-muted-foreground">
                  Allow job providers to post new jobs
                </p>
              </div>
              <Switch
                checked={featureSettings.enableJobPosting}
                onCheckedChange={() => handleFeatureToggle("enableJobPosting")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Job Moderation</h4>
                <p className="text-sm text-muted-foreground">
                  Review and approve jobs before they are published
                </p>
              </div>
              <Switch
                checked={featureSettings.moderateJobsBeforePublishing}
                onCheckedChange={() => handleFeatureToggle("moderateJobsBeforePublishing")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Review Moderation</h4>
                <p className="text-sm text-muted-foreground">
                  Review and approve user reviews before they are published
                </p>
              </div>
              <Switch
                checked={featureSettings.moderateReviewsBeforePublishing}
                onCheckedChange={() => handleFeatureToggle("moderateReviewsBeforePublishing")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Messaging System</h4>
                <p className="text-sm text-muted-foreground">
                  Enable the in-platform messaging system
                </p>
              </div>
              <Switch
                checked={featureSettings.enableMessaging}
                onCheckedChange={() => handleFeatureToggle("enableMessaging")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Enable in-app and email notifications
                </p>
              </div>
              <Switch
                checked={featureSettings.enableNotifications}
                onCheckedChange={() => handleFeatureToggle("enableNotifications")}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSaveSettings}>
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
