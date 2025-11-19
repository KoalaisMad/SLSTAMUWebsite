import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Play, AlertCircle } from "lucide-react";

export const YouTubePlayer = () => {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [error, setError] = useState("");

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
      setError("Please enter a valid YouTube URL");
      return;
    }
    setVideoId(id);
    const title = `YouTube Video: ${id}`;
    setVideoTitle(title);
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-youtube text-white rounded-lg">
          <Play className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">YouTube Video</h2>
          <p className="text-sm text-muted-foreground">
            Enter a YouTube URL to load the video
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            placeholder="Enter YouTube URL (e.g., https://www.youtube.com/watch?v=...)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
            onKeyDown={(e) => e.key === "Enter" && handleLoadVideo()}
          />
          <Button 
            onClick={handleLoadVideo}
            className="bg-youtube hover:bg-youtube-hover text-white px-6"
          >
            Load Video
          </Button>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}
      </div>

      {videoId && (
        <div className="space-y-3">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={videoTitle}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </Card>
  );
};