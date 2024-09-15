import { VideosGrid } from "@/components";
import { getVideos } from "@/use-cases/get-videos.use-case";

export const revalidate = 0;
export const dynamic = 'force-dynamic';


export default async function VideosPage() {
  const videos = await getVideos();
  return (
    <div className="py-2 px-4">
      <VideosGrid videos={videos} />
    </div>
  );
}