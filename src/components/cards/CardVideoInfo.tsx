"use client";

import React, { useState } from "react";
import { DownloadIcon, Trash } from "lucide-react";
import Link from "next/link";
import { Video } from "@/interfaces/VideoInterface";
import { deleteVideo } from "@/use-cases/delete-video.use-case";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button } from "@/components";


interface Props {
    video: Video;

}

const backend = process.env.NEXT_PUBLIC_GET_TEXT_BACKEND;

export const CardVideoInfo = ({ video }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const router = useRouter()
    const handleDownload = async () => {
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
    }

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            await deleteVideo(video.id);
            
            router.refresh();
        } catch (error) {
            console.error("Error al eliminar el video:", error);
        }
    }

    return (
        <Card className="mt-5 min-h-96 max-h-96 flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="text-2xl line-clamp-1">{video.title}</CardTitle>
                <CardDescription>
                    <span>Fecha de subida: {video.upload_date}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <span className="line-clamp-6">{video.text}</span>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href={`/videos/${video.id}`} className="font-semibold underline text-muted-foreground hover:text-foreground">
                    Leer más...
                </Link>
                <div className="flex gap-2">
                    <Button variant="destructive" size="icon" disabled={isLoading} onClick={handleDelete}>
                        <Trash className="h-4 w-4"  />
                    </Button>
                    <Button variant="default" size="icon">
                        <DownloadIcon className="h-4 w-4" color="white" onClick={handleDownload} />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};
