import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Play, AlertCircle, ExternalLink } from "lucide-react";

export const CompactYouTubePlayer = () => {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const handleLoadVideo = () => {
    setError("");
    const id = extractVideoId(url);
    if (!id) {
      setError("Invalid YouTube URL");
      return;
    }
    setVideoId(id);
    setIsExpanded(true);
  };

  return (
    <Card className="overflow-hidden animate-fade-in">
      <div className="p-3 bg-gradient-to-r from-youtube to-youtube-hover">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
              <Play className="h-3 w-3" />
            </div>
            <span className="text-sm font-medium">YouTube Chat</span>
          </div>
          {videoId && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-6 w-6 p-0 text-white hover:bg-white/20"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      <div className="p-3 space-y-3">
        <div className="space-y-2">
          <Input
            placeholder="Paste YouTube URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="text-xs h-8"
            onKeyDown={(e) => e.key === "Enter" && handleLoadVideo()}
          />
          <Button 
            onClick={handleLoadVideo}
            className="w-full h-7 bg-youtube hover:bg-youtube-hover text-white text-xs"
            disabled={!url.trim()}
          >
            Load Video
          </Button>
        </div>

        {error && (
          <div className="flex items-center gap-1 text-xs text-destructive bg-destructive/10 p-2 rounded">
            <AlertCircle className="h-3 w-3 flex-shrink-0" />
            {error}
          </div>
        )}

        {videoId && isExpanded && (
          <div className="space-y-2 animate-slide-in-up">
            <div className="relative w-full bg-muted rounded overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Video loaded! Ask questions below.
            </p>
          </div>
        )}

        {videoId && !isExpanded && (
          <div className="text-center animate-fade-in">
            <div className="w-12 h-8 bg-youtube/10 rounded mx-auto mb-1 flex items-center justify-center">
              <Play className="h-3 w-3 text-youtube" />
            </div>
            <p className="text-xs text-muted-foreground">Video ready for chat</p>
          </div>
        )}
      </div>
    </Card>
  );
};