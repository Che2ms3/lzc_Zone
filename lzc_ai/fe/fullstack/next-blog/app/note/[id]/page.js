// alias
import { getAllNotes } from "@/lib/redis"

// note 详情页 /note/[id]
export default async function Page({ params }){
    const { id } = await params; // Next 16: params 是 Promise
    const notes = await getAllNotes();
    const noteStr = notes[id];
    if(!noteStr){
        return <div className="note--empty-state">Note not found!</div>
    }
    const { title, content, updateTime } = JSON.parse(noteStr);
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <small>{updateTime}</small>
        </div>
    )
}
