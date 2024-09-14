import { Video } from "@/interfaces/VideoInterface";

export interface Response {
    videos: Video[];
}

const backed = process.env.NEXT_PUBLIC_GET_TEXT_BACKEND;

export async function getText(url:string): Promise<Video[]>{

    try {
        
        const resp =  await fetch(`${backed}/generate/get-text/`,{
            method: 'POST',
            body: JSON.stringify({url}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    
        const data: Response = await resp.json();
        
        return data.videos;
    } catch (error) {
        console.log(error);
        return [];
    }
}