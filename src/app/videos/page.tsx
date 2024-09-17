export const revalidate = 0;

import { VideosGrid } from "@/components";
import { getVideos } from "@/use-cases/get-videos.use-case";

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <div className="py-2 px-4">
      <VideosGrid videos={videos} />
    </div>
  );
}