import { Video } from "@/interfaces/VideoInterface";
import { deleteVideo } from "@/use-cases/delete-video.use-case";
import { useRouter } from "next/navigation";
import { useState } from "react";

const backend = process.env.NEXT_PUBLIC_GET_TEXT_BACKEND;

export const useVideo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleDownload = async (video: Video) => {
    try {
      const response = await fetch(`${backend}${video.txt_file.url}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      a.download = `${video.title}.txt`;
      document.body.appendChild(a);

      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error descargando el archivo:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setIsLoading(true);
      await deleteVideo(id);

      router.refresh();
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  const copyTextVideo = async (video: Video) => {
    try {
      await navigator.clipboard.writeText(video.text);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isLoading,
    handleDelete,
    handleDownload,
    copyTextVideo
  };
};
