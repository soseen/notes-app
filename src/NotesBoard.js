import React, {useState, useEffect} from 'react';
import NewNoteForm from './NewNoteForm';
import './NotesBoard.css';
import './fonts/ReenieBeanie-Regular.ttf'

const NotesBoard = () => {

    const [notes, setNotes] = useState(['Posprzatac pokoj']);

    const addNote = (note) => {
        let notesArray = [...notes, note];
        setNotes(notesArray);
    }
        return (
            <div className="board-container">
                <h1>My Notes</h1>
                <div className="notes-board">
                    {notes.map(item => (
                        <div key={item} className="note">
                            <span className="pin"></span>
                            <h3>#Note</h3>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <h2>New Note</h2>
                <NewNoteForm addNote={addNote}/>
            </div>
          );
   
}

export default NotesBoard;