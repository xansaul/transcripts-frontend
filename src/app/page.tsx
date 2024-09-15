"use client";

import { Button, Card, CardContent, CardHeader, Input, VideosGrid, VideosGridSkeleton } from "@/components";
import { Video } from "@/interfaces/VideoInterface";
import { getText } from "@/use-cases/get-text.use-case";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [videosData, setVideoData] = useState<Video[]>([]);

  const handleGetText = async () => {
    if (url === "") return;
    setIsLoading(true);
    const data = await getText(url);
    setVideoData(data);
    setIsLoading(false);
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col">

      <Card className="w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <CardHeader>
          <h1 className="text-2xl mb-3 font-bold">Obtener Texto</h1>
        </CardHeader>
        <CardContent >
          <div>
            <div className="flex gap-3">
              <Input placeholder="url" onChange={(e) => setUrl(e.target.value)} />
              {
                !isLoading ? (
                  <Button onClick={handleGetText}>Get Resume</Button>
                ) : (
                  <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                )
              }
            </div>

          </div>
        </CardContent>
      </Card>

      <div className="w-11/12 mt-5">
        {
          isLoading && (
            <VideosGridSkeleton />
          )
        }
        <VideosGrid videos={videosData} />
      </div>
    </div>
  );
}
