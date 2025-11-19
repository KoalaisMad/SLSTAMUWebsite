import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface CompactChatInterfaceProps {
  videoTitle?: string;
  className?: string;
}

export const CompactChatInterface = ({ videoTitle, className }: CompactChatInterfaceProps) => {
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
      const responses = videoTitle 
        ? [
            "I can see you've loaded a video! I'd be happy to analyze it, but I need backend capabilities to process video content. Would you like to connect to Supabase for AI-powered video analysis?",
            "Great question! To provide detailed insights about this video, I'd need access to video processing capabilities. Consider setting up the backend integration.",
            "I can see the video is loaded. For full analysis features like summarization and Q&A, we'd need to implement video processing through a backend service."
          ]
        : [
            "Please load a YouTube video first so I can help you discuss its content!",
            "I'm ready to chat! Just paste a YouTube URL above to get started.",
            "Load any YouTube video and I'll help you explore its content, themes, and insights!"
          ];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <Card className={cn("flex flex-col overflow-hidden", className)}>
      <div className="flex items-center gap-2 p-3 border-b bg-muted/30">
        <div className="w-6 h-6 bg-gradient-to-br from-youtube to-youtube-hover rounded flex items-center justify-center">
          <Sparkles className="h-3 w-3 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium truncate">AI Assistant</h3>
          <p className="text-xs text-muted-foreground truncate">
            {videoTitle ? "Ready to discuss video" : "Load video to start"}
          </p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-3" ref={scrollAreaRef} style={{ height: "300px" }}>
        <div className="space-y-3">
          {messages.length === 0 && (
            <div className="text-center py-6 animate-bounce-in">
              <div className="w-8 h-8 bg-youtube/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Bot className="h-4 w-4 text-youtube" />
              </div>
              <p className="text-xs text-muted-foreground">
                {videoTitle ? "Ask me anything about the video!" : "Load a video to start chatting"}
              </p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-2 max-w-[85%] animate-slide-in-up",
                message.isUser ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                message.isUser 
                  ? "bg-youtube text-white" 
                  : "bg-muted border"
              )}>
                {message.isUser ? (
                  <User className="h-3 w-3" />
                ) : (
                  <Bot className="h-3 w-3" />
                )}
              </div>
              <div className={cn(
                "rounded-lg px-2 py-1.5 text-xs leading-relaxed",
                message.isUser
                  ? "bg-youtube text-white"
                  : "bg-muted border"
              )}>
                <p>{message.content}</p>
                <p className={cn(
                  "text-[10px] mt-1 opacity-70",
                  message.isUser ? "text-youtube-light" : "text-muted-foreground"
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
            <div className="flex gap-2 max-w-[85%] mr-auto animate-fade-in">
              <div className="w-6 h-6 bg-muted border rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="h-3 w-3" />
              </div>
              <div className="bg-muted border rounded-lg px-2 py-1.5">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-3 border-t bg-muted/30">
        <div className="flex gap-2">
          <Input
            placeholder={videoTitle ? "Ask about the video..." : "Load video first..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isLoading}
            className="flex-1 text-xs h-8"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            size="icon"
            className="h-8 w-8 bg-youtube hover:bg-youtube-hover text-white"
          >
            <Send className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
};