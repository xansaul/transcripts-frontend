import { Video } from "@/interfaces/VideoInterface";

const backend = process.env.NEXT_PUBLIC_GET_TEXT_BACKEND;


export async function getVideos(){

    try {
        const videos = await fetch(`${backend}/api/videos-txts`, { cache: 'no-cache' });
        const data: Video[] = await videos.json();

        return data;
    } catch (error) {
        console.log(error);
        return [];
    }

}