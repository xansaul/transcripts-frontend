
const backend = process.env.NEXT_PUBLIC_GET_TEXT_BACKEND;

export async function deleteVideo(id:number) {

    try {
        await fetch(`${backend}/api/videos-txts/${id}/`,{
            method: 'DELETE',
            cache: 'no-store' 
        });

        return true
    } catch (error) {
        return false;
    }
    
}