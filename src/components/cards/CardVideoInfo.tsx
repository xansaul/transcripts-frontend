"use client";

import Link from "next/link";
import { Video } from "@/interfaces/VideoInterface";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, VideoActionsButtons } from "@/components";


interface Props {
    video: Video;

}

export const CardVideoInfo = ({ video }: Props) => {
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
                <VideoActionsButtons video={video} />
            </CardFooter>
        </Card>
    );
};
