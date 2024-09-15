import { VideoActionsButtons } from "@/components";
import { getVideoById } from "@/use-cases/get-video-by-id.use-case";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    id: string;
  }
}

export default async function VideoDetailPage({ params }: Props) {
  
  if(isNaN(+params.id)) {
    redirect("/");
  }
  const id = +params.id;
  const video = await getVideoById(id);
  
  if(!video) {
    redirect("/");
  }

  return (
    <div className="py-3 w-8/12 m-auto">
      <div className="flex justify-end my-5">
        <VideoActionsButtons video={video} />
      </div>
      <h1 className="font-bold text-3xl mb-3">{video.title}</h1>
      <p>{video.text}</p>
    </div>
  );
}