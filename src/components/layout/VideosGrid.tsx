import { Video } from "@/interfaces/VideoInterface";
import { CardVideoInfo } from "../cards/CardVideoInfo";

interface Props {
  videos: Video[];
}

export const VideosGrid = ({ videos }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {videos.map((video) => (
        <CardVideoInfo key={video.txt_file.id} video={video} />
      ))}
    </div>
  );
};
