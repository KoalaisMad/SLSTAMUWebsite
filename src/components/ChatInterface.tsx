import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  videoTitle?: string;
  className?: string;
}

export const ChatInterface = ({ videoTitle, className }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: videoTitle 
          ? `I'd be happy to help you understand the video "${videoTitle}". However, I need to be connected to a backend service to analyze the video content. Would you like to set up video analysis capabilities?`
          : "Please load a YouTube video first so I can help you discuss its content!",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <div className="flex items-center gap-2 p-4 border-b">
        <div className="flex items-center justify-center w-8 h-8 bg-chat-bot rounded-lg">
          <MessageSquare className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-semibold">Video Chat Assistant</h3>
          <p className="text-xs text-muted-foreground">
            {videoTitle ? `Discussing: ${videoTitle}` : "Load a video to start chatting"}
          </p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <Bot className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No messages yet. Start by asking a question about the video!</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 max-w-[80%]",
                message.isUser ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0",
                message.isUser 
                  ? "bg-chat-user text-chat-user-foreground" 
                  : "bg-chat-bot text-chat-bot-foreground"
              )}>
                {message.isUser ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>
              <div className={cn(
                "rounded-lg px-3 py-2 text-sm",
                message.isUser
                  ? "bg-chat-user text-chat-user-foreground"
                  : "bg-chat-bot text-chat-bot-foreground border"
              )}>
                <p>{message.content}</p>
                <p className={cn(
                  "text-xs mt-1 opacity-70",
                  message.isUser ? "text-chat-user-foreground" : "text-muted-foreground"
                )}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 max-w-[80%] mr-auto">
              <div className="flex items-center justify-center w-8 h-8 bg-chat-bot text-chat-bot-foreground rounded-lg">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-chat-bot text-chat-bot-foreground border rounded-lg px-3 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder={videoTitle ? "Ask about the video..." : "Load a video first..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            size="icon"
            className="bg-youtube hover:bg-youtube-hover text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};