import { Video } from "@/interfaces/VideoInterface";


const backend = process.env.NEXT_PUBLIC_GET_TEXT_BACKEND;

export async function getVideoById(id:number) {
    try {
        const resp = await fetch(`${backend}/api/videos-txts/${id}/`);
        const data: Video  = await resp.json();

        if(!resp.ok){
            throw new Error("Error getting video");
        }

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}