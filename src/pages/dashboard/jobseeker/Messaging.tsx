
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

interface Props {
  onTitleChange: (title: string) => void;
}

const JobSeekerMessaging = ({ onTitleChange }: Props) => {
  useEffect(() => {
    onTitleChange("Messages");
  }, [onTitleChange]);

  const [message, setMessage] = useState("");

  const contacts = [
    { id: 1, name: "Tech Design Inc.", lastMessage: "Hi James, do you have an update on the website mockup?", time: "10:30 AM", unread: true },
    { id: 2, name: "CreativeMinds Agency", lastMessage: "Your application has been accepted!", time: "Yesterday", unread: false },
    { id: 3, name: "EcoSolutions Ltd.", lastMessage: "Thanks for submitting the articles. They look great!", time: "Apr 10", unread: false },
  ];

  const messages = [
    { id: 1, senderId: 1, text: "Hi James, do you have an update on the website mockup?", time: "10:30 AM", isUser: false },
    { id: 2, senderId: 0, text: "Yes, I've been working on it. I'll be done by tomorrow.", time: "10:32 AM", isUser: true },
    { id: 3, senderId: 1, text: "Great! Looking forward to seeing it.", time: "10:33 AM", isUser: false },
    { id: 4, senderId: 1, text: "Also, do you need any additional information from our end?", time: "10:34 AM", isUser: false },
    { id: 5, senderId: 0, text: "No, I have everything I need for now. If I have any questions, I'll reach out.", time: "10:35 AM", isUser: true },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would normally send the message to your backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="h-[calc(100vh-200px)]">
      <Card className="h-full">
        <CardContent className="p-0 h-full">
          <div className="flex h-full">
            {/* Contacts sidebar */}
            <div className="w-80 border-r border-gray-200 h-full overflow-y-auto hidden md:block">
              <div className="p-4">
                <Input placeholder="Search messages..." className="w-full" />
              </div>
              <div className="divide-y">
                {contacts.map((contact) => (
                  <div 
                    key={contact.id} 
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${contact.id === 1 ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="font-medium text-gray-600">
                            {contact.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{contact.name}</div>
                          <div className={`text-sm ${contact.unread ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                            {contact.lastMessage.length > 30 
                              ? `${contact.lastMessage.substring(0, 30)}...` 
                              : contact.lastMessage
                            }
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs ${contact.unread ? 'text-primary font-medium' : 'text-gray-500'}`}>
                        {contact.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Messages area */}
            <div className="flex-1 flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium text-gray-600">TD</span>
                  </div>
                  <div>
                    <div className="font-medium">Tech Design Inc.</div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                </div>
              </div>
              
              {/* Message list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-md p-3 rounded-lg ${
                        msg.isUser 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div>{msg.text}</div>
                      <div className={`text-xs mt-1 ${msg.isUser ? 'text-primary-foreground/70' : 'text-gray-500'}`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input area */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Type your message..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                  >
                    <SendIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobSeekerMessaging;
