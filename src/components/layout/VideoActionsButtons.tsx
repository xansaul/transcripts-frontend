"use client";

import React from 'react'
import { Button } from '@/components';
import { Clipboard, DownloadIcon, Trash } from 'lucide-react';
import { useVideo } from '@/hooks/useVideo';
import { Video } from '@/interfaces/VideoInterface';

interface Props {
    video: Video;
}

export const VideoActionsButtons = ({ video }: Props) => {
    const { handleDelete, handleDownload, isLoading, copyTextVideo } = useVideo();
    return (

        <div className="flex gap-2">
            <Button variant="secondary" size="icon">
                <Clipboard className="h-4 w-4" color="white" onClick={() => copyTextVideo(video)} />
            </Button>
            <Button variant="default" size="icon">
                <DownloadIcon className="h-4 w-4" color="white" onClick={() => handleDownload(video)} />
            </Button>
            <Button variant="destructive" size="icon" disabled={isLoading} onClick={() => handleDelete(video.id)}>
                <Trash className="h-4 w-4" />
            </Button>
        </div>

    )
}
