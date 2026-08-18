import SidebarNoteItem from "@/components/SidebarNoteItem";
// SidebarNoteList(RSC SEO) -> 拆出来 SidebarNoteItem（交互 CSR）
export default function SidebarNoteList({note}){
    const arr = 


    return(<ul className= "notes-list">
        {
            arr.map(([noteId,note])=>{
                return(
                    <li key={noteId}>
                        <SidebarNoteItem noteId={noteId} note={JSON.parse(note)}>

                        </SidebarNoteItem>
                    </li>
                )
            })
        }
    </ul>)
}
