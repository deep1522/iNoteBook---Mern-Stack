
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
            "title": "title",
            "description": "description",
            "tag": "tag",
            "_id": "6580d0b9f50821f5bdb82e81",
            "date": "2023-12-18T23:07:37.753Z",
            "__v": 0
        },  
        {
            "title": "title2",
            "description": "description2",
            "tag": "tag",
            "_id": "6581f44d8b69399967345e00",
            "date": "2023-12-19T19:51:41.734Z",
            "__v": 0
        },{
            "title": "title",
            "description": "description",
            "tag": "tag",
            "_id": "6580d0b9f50821f5bdb82e81",
            "date": "2023-12-18T23:07:37.753Z",
            "__v": 0
        },  
        {
            "title": "title2",
            "description": "description2",
            "tag": "tag",
            "_id": "6581f44d8b69399967345e00",
            "date": "2023-12-19T19:51:41.734Z",
            "__v": 0
        },{
            "title": "title",
            "description": "description",
            "tag": "tag",
            "_id": "6580d0b9f50821f5bdb82e81",
            "date": "2023-12-18T23:07:37.753Z",
            "__v": 0
        },  
        {
            "title": "title2",
            "description": "description2",
            "tag": "tag",
            "_id": "6581f44d8b69399967345e00",
            "date": "2023-12-19T19:51:41.734Z",
            "__v": 0
        },
        {
            "title": "title",
            "description": "description",
            "tag": "tag",
            "_id": "6580d0b9f50821f5bdb82e81",
            "date": "2023-12-18T23:07:37.753Z",
            "__v": 0
        },  
        {
            "title": "title2",
            "description": "description2",
            "tag": "tag",
            "_id": "6581f44d8b69399967345e00",
            "date": "2023-12-19T19:51:41.734Z",
            "__v": 0
        }
    ]
    const[notes,setNotes]=useState(notesInitial)

    //Add a note
    const addNote=(title,description,tag)=>{
        console.log("Adding a new note")
        const note= {
            "title": title,
            "description": description,
            "tag": tag,
            "_id": "6581f44d8b69399967345e00",
            "date": "2023-12-19T19:51:41.734Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a note
    const deletenote=()=>{

    }

    //edit a note
    const editnote=()=>{

    }
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deletenote,editnote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;
