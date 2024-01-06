import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"})
    const handleclick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)

    }
    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})

    }
return (

    <div>
    <div className="container my-3">
        <h1>Add a Note</h1>
        </div>
        
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={onchange} placeholder="Title"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="description" name='description' onChange={onchange}  rows="3"></textarea>

        </div>
        <button type='submit' className='btn btn-primary' onClick={handleclick}>Add Note</button>
    </div>
)
}

export default AddNote
