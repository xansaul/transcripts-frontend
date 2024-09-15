"use client";

import { CardVideoInfo } from "@/components/cards/CardVideoInfo";
import { Video } from "@/interfaces/VideoInterface";
import { getVideos } from "@/use-cases/get-videos.use-case";
import { useEffect, useState } from "react";

export default function VideosPage() {
 
  const [videos, setVideos] = useState<Video[]>([])

  const fetchVideos = async()=>{
    const videos = await getVideos();
    setVideos(videos);
  }

  useEffect(()=>{
    fetchVideos();
  },[])

  return (
    <div className="py-2 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {
          videos.map(video=>(
            <CardVideoInfo key={video.txt_file.id} video={video} />
          ))
        }
      </div>
    </div>
  );
}