import React, {useState} from 'react';
import './NewNoteForm.css';

const NewNoteForm = ({addNote}) => {

    const [characters, setCharacters] = useState(0);
    const [noteToSend, setNoteToSend] = useState('');

    const sendNote = (e) => {
        e.preventDefault();
        if(noteToSend.length > 0 && /\S/.test(noteToSend)){
            addNote(noteToSend);
            setNoteToSend('');
            setCharacters(0);
        }
    }

    const getNoteString = (e) => {
        setNoteToSend(e.target.value);
        setCharacters(e.target.value.length);
    }

    return (
        <div className="add-note-container">
            <form className="note-form" onSubmit={sendNote}>
                <p>Characters: {characters}/30</p>
                <input className="note-input" type="textarea" onChange={getNoteString} maxlength={30} value={noteToSend}/>
            </form>
        </div>
    );
  }

  export default NewNoteForm;