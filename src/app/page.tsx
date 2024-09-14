"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
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

      <h1 className="text-6xl mb-3 font-bold">Get text</h1>
      <div className="w-5/12">
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
      <div className="w-7/12 mt-5">
        {
          isLoading && (
            <Card>
              <CardHeader>
                <Skeleton className="h-4 w-6/12" />
                <CardDescription>
                  <Skeleton className="h-4 w-2/12" />
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-8/12" />
                <Skeleton className="h-4 w-5/12" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-11/12" />

              </CardContent>
            </Card>
          )
        }
        

        {
          videosData.map(video => (

            <Card key={video.audio_id} className="mt-5">
              <CardHeader>
                <CardTitle className="text-2xl">{video.title}</CardTitle>
                <CardDescription>
                  <p>Fecha de subida: {video.upload_date}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{video.text}</p>

              </CardContent>
            </Card>
          ))


        }
      </div>
    </div>
  );
}
